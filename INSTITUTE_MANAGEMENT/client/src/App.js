import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import ExamAdmin from "./pages/admin/ExamAdmin";
import ExamView from "./pages/admin/ExamView";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import StExamView from "./pages/StExamView";
import { Context } from "./context/Context";
import React, { useContext } from 'react'

function App() {

  const [modalShow, setModalShow] = React.useState(false);
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="/login" element={user ? <Homepage/> :<Login/>} />
        <Route path="/stexam" element={<StExamView />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/exam" element={<ExamAdmin/>} />
        <Route path="/examview" element={<ExamView />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
