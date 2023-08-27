

import React, { useState, useEffect} from 'react';

import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(true); 
     }
   }, [isAuth]);
  return (

    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
            <div className="container col-2">
            <NavLink className="navbar-brand " to="#">
            <img src="#" alt="Logo" width="65" height="40" className="d-inline-block align-text-top"/></NavLink>LoanWeb</div>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    {isAuth ? <NavLink className="nav-link col-1 " to="#">Home</NavLink>:null}
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link col-1" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/enquiry">Enquiry</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/user">Apply Now</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link col-2" to="/emi">EMI</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/emi">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/login">Login/Signup</NavLink>
                    </li>
                    <li className="nav-item">
                    {isAuth ? <NavLink className="nav-link " to="/logout">Logout</NavLink>:null}
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/logout">Name Of User</NavLink>
                    </li>
                </ul>
                </div>
        </div>
        </nav>
    
    </>
  )
}

export default Navbar
