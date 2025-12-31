// Login.jsx
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple fake login
    if (email === "test@example.com" && password === "123456") {
          document.cookie = "access_token=fake-jwt-token; path=/;";
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (loggedIn) {
    return <h1>Welcome, User!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>

      {/* getByLabel */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter Your Email"
        data-testid="email"
        title="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* getByLabel */}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter Your Password"
        data-testid="password"
        title="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* getByRole */}
      <button type="submit">Login</button>
    </form>
  );
}
