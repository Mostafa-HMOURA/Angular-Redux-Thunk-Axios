const initialState = {
        contacts: [],
        contact: {}
}

export default function(state = initialState, action){

    switch(action.type){

        case 'GET_CONTACT': 
          return {
              ...state,
              contact: action.pyload
          }

        case 'GET_CONTACTS': 
            return {
                ...state,
                contacts: action.pyload
            }

        case 'ADD_CONTACT': 
            return {
                ...state,
                contacts: [action.pyload,...state.contacts]
            }
        
          case 'UPDATE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.map(contact => 
                  contact.id === action.pyload.id ? (contact = action.pyload)
                  : contact
                )
            }
            
        case 'DELETE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.pyload )
            }

        default:
            {
                return state;
            }
    }

} 