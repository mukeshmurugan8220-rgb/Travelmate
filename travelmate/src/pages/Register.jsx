import { useState } from "react";

function Register() {
  const [user, setUser] = useState("");

  const handleRegister = () => {
    alert("Registration Successful");
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;