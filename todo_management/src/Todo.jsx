import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("todo");
    if (data) {
      setTodo(JSON.parse(data));
    }
  }, []);

  const saveTodo = (list) => {
    localStorage.setItem("todo", JSON.stringify(list));
  };

  const addTodo = () => {
    if (!text) return;

    const list = [...todo, text];
    setTodo(list);
    saveTodo(list);
    console.log("Added:", text);
    setText("");
  };

  const updateTodo = () => {
    if (!text) return;

    const list = [...todo];
    list[editIndex] = text;
    setTodo(list);
    saveTodo(list);
    console.log("Updated:", text);
    setEditIndex(null);
    setText("");
  };

  const deleteTodo = (index) => {
    const list = todo.filter((_, i) => i !== index);
    setTodo(list);
    saveTodo(list);
    console.log("Deleted:", index);
  };

  const startEdit = (index) => {
    setText(todo[index]);
    setEditIndex(index);
  };

  return (
    <div className="text-center mt-[200px] pl-[80px] ">
      <h2 className="text-[40px] underline text-red-600">Todo App</h2> <br /> <br />

      
      <input
        type="text"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        className="h-[30px] w-[200px]flex-1 border px-3 py-2 rounded"
      /> &nbsp; &nbsp; &nbsp;

      <button onClick={editIndex === null ? addTodo : updateTodo}
       className="rounded-lg bg-slate-300 px-5 py-2 text-white font-medium hover:bg-indigo-700 transition">
        {editIndex === null ? "Add" : "Update"}
       
      </button> <br /> <br />
     
      <ul className="max-w-md mx-auto mt-6 space-y-4">
  {todo.map((item, index) => (
    <li
      key={index}
      className="flex items-center justify-between border border-gray-300 px-4 py-2 rounded-lg"
    >
      <span className="text-gray-800 font-medium">
        {item}
      </span>

      <div className="flex gap-3">
        <button
          onClick={() => startEdit(index)}
          className="border border-gray-400 p-2 rounded hover:bg-gray-100"
        >
          <FiEdit />
        </button>

        <button
          onClick={() => deleteTodo(index)}
          className="border border-red-400 p-2 rounded hover:bg-red-100 text-red-600"
        >
          <FiTrash2 />
        </button>
      </div>
    </li>
  ))}
</ul>

</div>
   
  )
};

export default Todo;


{/* <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            <div className="flex items-center justify-center gap-15 pr-[50px]">
            {todo}
            <button onClick={() => startEdit(index)} className="border border-2[px] border solidblack">  <FiEdit />
            
            </button>
            <button onClick={() => deleteTodo(index)}> <FiTrash2 /></button>
            </div>
          </li>
        ))}
      </ul>  */}




//     <div className="max-w-md mx-auto mt-8 border border-gray-300 rounded-lg p-4">
//   <ul className="space-y-3">
//     {todo.map((item, index) => (
//       <li
//         key={index}
//         className="flex items-center justify-between"
//       >
//         <span className="text-gray-800 font-medium">
//           {item}
//         </span>

//         <div className="flex gap-3">
//           <button
//             onClick={() => startEdit(index)}
//             className="p-1 border border-gray-400 rounded hover:bg-gray-100"
//           >
//             <FiEdit />
//           </button>

//           <button
//             onClick={() => deleteTodo(index)}
//             className="p-1 border border-red-400 rounded text-red-600 hover:bg-red-100"
//           >
//             <FiTrash2 />
//           </button>
//         </div>
//       </li>
//     ))}
//   </ul>
// </div>


