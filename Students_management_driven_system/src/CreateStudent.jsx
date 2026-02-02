import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = id && name && place && phone;

  const handlesubmit = (e) => {
    e.preventDefault();

    const studentsData = { id, name, place, phone };

    fetch("http://localhost:3001/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentsData)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Student data saved successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="text-center mt-[150px]">
      <p className="text-4xl underline decoration-red-500 decoration-4 mb-6">
        Create Student Record
      </p>

      <form onSubmit={handlesubmit}>

        {/* ID */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <label className="text-3xl w-[100px] text-right">Id:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => {
              if (/^\d*$/.test(e.target.value)) {
                setId(e.target.value);
              }
            }}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
          />
        </div>

        {/* Name */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <label className="text-3xl w-[100px] text-right">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
          />
        </div>

        {/* Place */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <label className="text-3xl w-[100px] text-right">Place:</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <label className="text-3xl w-[100px] text-right">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-center items-center gap-[50px]">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-3 py-1 border border-black 
              ${isFormValid ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"}`}
          >
            Save
          </button>

          <Link to="/" className="px-5 py-1 border border-black hover:bg-gray-200">
            Back
          </Link>
        </div>

      </form>
    </div>
  );
}

export default CreateStudent;
