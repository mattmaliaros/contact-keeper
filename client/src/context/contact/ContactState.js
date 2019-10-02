import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jeff Goldblum',
        email: 'jeff@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'John Soldblum',
        email: 'john@gmail.com',
        phone: '121-121-1221',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Sara Blum',
        email: 'sara@gmail.com',
        phone: '313-313-3113',
        type: 'professional'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
