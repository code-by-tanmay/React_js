import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!email) { alert("Please fill Email"); return false; }
    if (!phone) { alert("Please fill Phone Number"); return false; }
    if (!password) { alert("Please fill Password"); return false; }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) { alert("Phone number must be 10 digits"); return false; }

    const passwordRegex = /^[A-Za-z0-9_$]+$/;
    if (!passwordRegex.test(password)) { alert("Password must contain only A-Z, a-z, 0-9, _ or $"); return false; }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = { email, phone, password };

    try {
      
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      
      const userExists = users.some(
        (user) => user.email === email || user.phone === phone
      );
      if (userExists) {
        alert("User already exists with this email or phone!");
        return;
      }

     
      const res2 = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (res2.ok) {
        alert("Account created successfully!");
        setEmail(""); setPhone(""); setPassword("");
      } else {
        alert("Error saving data");
      }
    } catch (error) {
      alert("Server error: " + error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] bg-white text-gray-500 p-6 rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <input
          id="email"
          className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          id="phone"
          className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            if (e.target.value.length <= 10) setPhone(e.target.value);
          }}
        />

        <input
          id="password"
          className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
        >
          Create Account
        </button>

        <p className="text-center mt-4">
          Already have an account?&nbsp;
          <Link to="/login" className="text-blue-500 underline">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
