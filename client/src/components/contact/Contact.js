import React from 'react';
import ContactList from './ContactList';

const Contact = ({ contact }) => (
  <React.Fragment>
    {contact.map(item => (
      <React.Fragment>
        <h1 className="mt-5">
          Your Contacts
        </h1>
        <ContactList key={item.firstName} list={item} />
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default Contact;
