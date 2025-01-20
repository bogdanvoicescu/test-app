import React, { useState } from "react";
import { useAuth } from "../utils/authContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tester");
  const { user, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password, role });
  };

  if (user) {
    return null;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="tester">Tester</option>
            <option value="mp">MP</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;