import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";   
import Forget from "./Forget";
import Dashboard from "./Dashboard";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
   
  );
}

export default App;
