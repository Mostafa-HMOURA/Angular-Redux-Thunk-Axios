import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getContact } from '../../actions/contactActions';

export class DetailsContact extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getContact(id);
      }
    
      componentWillReceiveProps(nextProps,nextState){
        const {name,email,phone} = nextProps.contact;
        this.setState({
          name,
          email,
          phone
        })
      }
    
      state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
      };

      redirect = () => {
        this.props.history.push('/');
      }

  render() {
    const { id } = this.props.match.params;
    const { name, email, phone} = this.state;
    return (
      <div className="card mb-3">
      <div className="card-header"><strong>Details Of Contact : {id}</strong></div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name : {name}</li>
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone : {phone}</li>
        </ul>
      </div>
       <button type="button" className="btn btn-success"
        onClick={this.redirect}>Back to Home</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      contact: state.myContact.contact
    }
  }

export default connect(mapStateToProps,{ getContact})(DetailsContact);