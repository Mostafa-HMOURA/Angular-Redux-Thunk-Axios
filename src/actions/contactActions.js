import axios from 'axios';

export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch ({
        type: 'GET_CONTACT',
        pyload: res.data
      });
}

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch ({
        type: 'GET_CONTACTS',
        pyload: res.data
      });
}

export const deleteContact = (id) => async dispatch =>{
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: 'DELETE_CONTACT',
            pyload: id
          });

    } catch (error) {
        alert(error);
    }
}

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact)
    dispatch({
        type: 'ADD_CONTACT',
        pyload: res.data
      });
}

export const updateContact = (contact) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)
    dispatch({
        type: 'UPDATE_CONTACT',
        pyload: res.data
      });
}