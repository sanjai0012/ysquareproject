import React, { useState } from 'react';
import './table.css'; 

const tableData = [
  {
    sno: 1,
    firstName: 'Sanjai',
    lastName: 'kumar',
    email: 'sanjaikumar255@gmail.com',
    phoneNumber: '6380799320',
  },
  {
    sno: 2,
    firstName: 'chandru',
    lastName: 'marimuthu',
    email: 'chandru@gmail.com',
    phoneNumber: '9894766099',
  },
  {
    sno: 3,
    firstName: 'kiruba',
    lastName: 'karan',
    email: 'kiruba@gmail.com',
    phoneNumber: '9843476379',
  },
  {
    sno: 4,
    firstName: 'nandhu',
    lastName: 'elavarasu',
    email: 'nandhu@gmail.com',
    phoneNumber: '8656454658',
  },
  {
    sno: 5,
    firstName: 'naveen',
    lastName: 'kumar',
    email: 'naveen@gmail.com',
    phoneNumber: '9843334544',
  },
  {
    sno: 6,
    firstName: 'teja',
    lastName: 'kumari',
    email: 'teja@gmail.com',
    phoneNumber: '9848678765',
  },


];

function Table() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = tableData.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.lastName.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm) ||
        item.phoneNumber.includes(searchTerm)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <table className="table">
        <thead>
          <tr>
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
