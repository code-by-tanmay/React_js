import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom"

import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";


function StudentTable() {
  const [students, setStudents] = useState([]);

   const navigate = useNavigate()

  const DisplayDetails =(id)=>{

    // console.log(id);

    navigate("/student/view/"+id);

  }

    //  const navigate = useNavigate()

  useEffect(() => {
    // fetch("http://localhost:8000/students")
    fetch("http://localhost:3001/students")

      .then((res) => res.json())
      .then((data) => setStudents(data))
      
      .catch((err) => console.log(err.message));
  }, []);


  // delete function 

  const DisplayDelete = (id) => {
  console.log(id);
  if (window.confirm("sure if you want to delete data ?")) {
    fetch("http://localhost:3001/students/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(studentsData)
    })
      .then((res) => {
        alert("data removed successfully");
        window.location.reload();
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  } // close if
}; // close function


// Edit function 

const EditDetails =(id)=>{
  
  console.log(id);
navigate("/student/edit/"+id)

}


  return (
    <div className="text-center mt-[150px]">
      <h1 className="text-4xl underline decoration-red-500 decoration-4 mb-6">
        Student Record
      </h1>

      <table className="border-collapse w-[60%] mx-auto border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2 text-center">SR.No</th>
            <th className="border border-black p-2 text-center">Name</th>
            <th className="border border-black p-2 text-center">Place</th>
            <th className="border border-black p-2 text-center">Phone</th>
            <th className="border border-black p-2 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item,index) => (
            <tr key={item.id}>
              <td className="border border-black p-2 text-center">{index+1}</td>
              <td className="border border-black p-2 text-center">{item.name}</td>
              <td className="border border-black p-2 text-center">{item.place}</td>
              <td className="border border-black p-2 text-center">{item.phone}</td>
              <td className="border border-black p-2 text-center flex justify-center items-center gap-5">
                <Link
                  to="/student/create"
                  className="px-3 py-1 border border-black hover:bg-gray-200 inline-flex items-center justify-center"
                >
                  <FaRegAddressCard />
                </Link>
                <button onClick={()=>DisplayDetails(item.id)} className="px-3 py-1 border border-black hover:bg-gray-200">
                  <FiEye />
                </button>
                <button onClick={()=>EditDetails(item.id)} className="px-3 py-1 border border-black hover:bg-gray-200">
                  <FiEdit />
                </button>
                <button onClick={()=>DisplayDelete(item.id)} className="px-3 py-1 border border-black hover:bg-gray-200">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
