import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewStudent() {
  const { studentid } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    if (studentid) {
      fetch(`http://localhost:3001/students/${studentid}`)
        .then((res) => res.json())
        .then((data) => setStudentData(data))
        .catch((err) => console.log(err.message));
    }
  }, [studentid]);

  return (
    <div className=" text-center mt-[150px]">
      <h1 className="text-4xl underline decoration-indigo-500 decoration-4 mb-6">Student Details</h1>

      {studentData && (
        <div>
          <p><strong>ID:</strong> {studentData.id}</p>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Place:</strong> {studentData.place}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p> <br />
          <p> <Link to="/" className="px-3 py-1 border border-black hover:bg-gray-200">Back</Link></p>
        </div>

        
      )}

  
     
    
       </div>
   
  );
}

export default ViewStudent;
