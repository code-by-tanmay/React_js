import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const users = res.data;

        const foundUser = users.find(
  (u) =>
    u.username === formData.email &&
    u.password === formData.password
);


        if (foundUser) {
  localStorage.setItem("username", foundUser.username);
  navigate("/dashboard");   
}
else {
          setError("❌ User does not exist or wrong credentials");
        }
      })
      .catch(() => {
        setError("❌ Something went wrong. Try again later.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white mx-auto mt-[150px]"
    >
      <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>

      <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

      {error && (
        <p className="text-red-500 text-sm mt-4">{error}</p>
      )}

    
      <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <input
          type="text"
          name="email"
          placeholder="username"
          className="border-none outline-none ring-0"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

     
      <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-none outline-none ring-0"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 text-center text-indigo-500">
        <button className="text-sm" type="reset">
          Forget password?
        </button>
        <br />
        <br />
      </div>

      <button
        type="submit"
        className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
      >
        Login
      </button> <br /> <br /> <br />
    </form>
  );
}
