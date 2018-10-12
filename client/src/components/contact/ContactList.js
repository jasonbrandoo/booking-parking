import React from 'react';
import { Table } from 'reactstrap';

const ContactList = ({ list }) => (
  <Table className="mt-1 table-bordered">
    <thead className="thead-dark">
      <tr>
        <th>
          First Name
        </th>
        <th>
          Last Name
        </th>
        <th>
          Email
        </th>
        <th>
          Phone
        </th>
        <th>
          Address
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {list.firstName}
        </td>
        <td>
          {list.lastName}
        </td>
        <td>
          {list.email}
        </td>
        <td>
          {list.address}
        </td>
        <td>
          {list.phoneNumber}
        </td>
      </tr>
    </tbody>
  </Table>
);

export default ContactList;
