import React from 'react'
import './App.css'
import Router from "./Router" 
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
// import { toast } from "react-toastify";

function App() {
  return (
    // <div className="min-h-screen flex flex-col">
    //   <Navbar />
    //   <div className="flex-1">
    //     <SignUp />
    //   </div>
    //   <Footer />
    // </div>
    <>
    <Outlet />   {/* renders all pages */}
      <ToastContainer position="top-right" autoClose={3000} />

    <Router/>
    </>
  )
}

export default App
