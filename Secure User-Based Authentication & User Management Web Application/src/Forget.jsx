import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forget() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  
  const handleChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "newPassword") setNewPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);

    if (email && newPassword && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!email) tempErrors.email = "Email is required!";
    if (!newPassword) tempErrors.newPassword = "New Password is required!";
    if (!confirmPassword)
      tempErrors.confirmPassword = "Confirm Password is required!";

    const passwordRegex = /^[A-Za-z0-9_$]+$/;
    if (newPassword && !passwordRegex.test(newPassword)) {
      tempErrors.newPassword =
        "Password must contain only A-Z, a-z, 0-9, _ or $";
    }

   
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match!";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
     
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      const user = users.find((u) => u.email === email);

      if (!user) {
        alert("User not found with this email!");
        return;
      }

    
      const updatedUser = { ...user, password: newPassword };

      await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      alert("Password updated successfully!");
      navigate("/login"); 
    } catch (err) {
      alert("Server error: " + err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] bg-white text-gray-500 p-6 rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Forget Password
        </h2>

       
        <div className="flex flex-col mb-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-500/10 outline-none rounded py-2.5 px-3"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

       
        <div className="flex flex-col mb-2">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className="w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-500/10 outline-none rounded py-2.5 px-3"
          />
          {errors.newPassword && (
            <span className="text-red-500 text-sm">{errors.newPassword}</span>
          )}
        </div>

       
        <div className="flex flex-col mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full border mt-1 bg-indigo-500/5 mb-1 border-gray-500/10 outline-none rounded py-2.5 px-3"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full mb-2 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 active:scale-95"
          }`}
        >
          Forget Password
        </button>
      </form>
    </div>
  );
}

export default Forget;
