import React from "react";

type UserProps = {
  name: string;
  email: string;
};

export const User: React.FC<UserProps> = ({ name, email }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p data-testid="user-name">Name: {name}</p>
      <p data-testid="user-email">Email: {email}</p>
    </div>
  );
};
