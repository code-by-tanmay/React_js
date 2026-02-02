
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");


  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const savedPassword = localStorage.getItem("rememberPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    try {
      
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setSuccessMsg("Login successful!");
        setErrors({});

      
        if (remember) {
          localStorage.setItem("rememberEmail", email);
          localStorage.setItem("rememberPassword", password);
        } else {
          localStorage.removeItem("rememberEmail");
          localStorage.removeItem("rememberPassword");
        }

    
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setSuccessMsg("");
        setErrors({ login: "Invalid email or password" });
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setErrors({ login: "Server error" });
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 p-6 rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <div className="flex flex-col mb-2">
          <input
            className="w-full border bg-indigo-500/5 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

  
        <div className="flex flex-col mb-2">
          <input
            className="w-full border bg-indigo-500/5 border-gray-500/10 outline-none rounded py-2.5 px-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password}
            </span>
          )}
        </div>

        
        {errors.login && (
          <span className="text-red-500 text-sm mb-2">{errors.login}</span>
        )}

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <Link to="/forget" className="text-blue-500 underline">
            Forget Password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full mb-2 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium"
        >
         <Link to="/dashboard">Log In</Link>
        </button>

        
        {successMsg && (
          <span className="text-green-500 text-[15px] mb-2 relative pl-[100px]">{successMsg}</span>
        )}

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
