import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditStudent() {
  const navigate = useNavigate();
  const { studentid } = useParams();

  const [validation,setValidation]=useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  // Fetch existing student data when component mounts
  useEffect(() => {
    fetch(`http://localhost:3001/students/${studentid}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setPlace(data.place);
        setPhone(data.phone);
      })
      .catch((err) => console.log(err.message));
  }, [studentid]);

  const handlesubmit = (e) => {
    e.preventDefault();

    const studentsData = { id, name, place, phone };

    fetch(`http://localhost:3001/students/${studentid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentsData)
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Student updated successfully!");
        navigate("/"); // go back to student list
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
    <div className="text-center mt-[150px]">
      <p className="text-4xl underline decoration-red-500 decoration-4 mb-6">
        Update Student Record
      </p>

      <form onSubmit={handlesubmit}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <label htmlFor="id" className="text-3xl w-[100px] text-right">Id:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
            onMouseDown={()=>setValidation(true)}
        />
            {id.length===0 && validation &&  <span className="text-red-400 semi-bold">please enter your id</span>}
          
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <label htmlFor="name" className="text-3xl w-[100px] text-right">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
            onMouseDown={()=>setValidation(true)}
          />
          {name.length===0 && validation &&  <span className="text-red-400 semi-bold">please enter your name</span>}
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <label htmlFor="place" className="text-3xl w-[100px] text-right">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
            onMouseDown={()=>setValidation(true)}
          />
          {place.length===0 && validation &&  <span className="text-red-400 semi-bold">please enter your place</span>}
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <label htmlFor="phone" className="text-3xl w-[100px] text-right">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-[40px] w-[200px] border px-3 py-2 rounded"
            onMouseDown={()=>setValidation(true)}
          />
          {phone.length===0 && validation &&  <span className="text-red-400 semi-bold">please enter your phone number</span>}
        </div>

        <div className="flex justify-center items-center gap-[50px]">
          <button type='submit' className="px-3 py-1 border border-black hover:bg-gray-200">Update</button>
          <Link to="/" className="px-3 py-1 border border-black hover:bg-gray-200">Back</Link>
        </div>
      </form>
    </div>
    </>
  );
}

export default EditStudent;
