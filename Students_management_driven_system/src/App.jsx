import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import StudentTable from './StudentTable'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import ViewStudent from './ViewStudent'

function App() {
  return (
    <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable></StudentTable>}></Route>
        <Route path="/student/create" element={<CreateStudent></CreateStudent>}></Route>
        <Route path="/student/edit/:studentid" element={<EditStudent></EditStudent>}></Route>
         <Route path="/student/view/:studentid" element={<ViewStudent></ViewStudent>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>

    </>
  )
}

export default App
