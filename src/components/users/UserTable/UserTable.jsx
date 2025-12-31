import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate API call with 1 second delay
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: "Sizzad", email: "sizzad@gmail.com", role: "Admin" },
        { id: 2, name: "Rahim", email: "rahim@gmail.com", role: "User" },
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (users.length === 0) {
    return <p data-testid="loading">Loading users...</p>;
  }

  return (
    <table data-testid="user-table" border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} data-testid="user-row">
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
