import React from 'react';
import WithData from '../../container/ContactData';
import ContactList from './ContactList';

const Contact = ({ contact, total }) => (
  <React.Fragment>
    {contact.map(item => (
      <React.Fragment key={item.firstName}>
        <div className="d-flex">
          <h1 className="mt-5">
              Your Contacts
          </h1>
          <h5 className="ml-auto mt-auto">
              Total contacts :
            {total}
          </h5>
        </div>
        <ContactList key={item.firstName} list={item} />
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default WithData(Contact);
