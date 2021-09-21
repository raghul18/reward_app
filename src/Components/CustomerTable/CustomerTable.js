import React from "react";
import { useHistory } from "react-router-dom";
import './CustomerTable.css'

const CustomerTable = ({ customers }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/reward/${id}`);
  };

  return (
    <div>
      <h2>Customer List</h2>
      <table className='customers'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((customer) => {
            return (
              <tr key={customer.id} onClick={() => handleClick(customer.id)}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.mobileNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
