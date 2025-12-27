import React, { useState } from "react";

export const UserProfile: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <h1>User Profile</h1>

      {/* Form with label, placeholder, title */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          title="name-input"
          data-testid="name-input-testid"
        />

        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="email-input"
          data-testid="email-input-testid"
        />

        <button type="submit">Submit</button>
      </form>

      {/* Displayed values */}
      <p data-testid="display-name">Name: {name}</p>
      <p data-testid="display-email">Email: {email}</p>

      {/* Image with alt text */}
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        data-testid="user-avatar"
      />
    </div>
  );
};
