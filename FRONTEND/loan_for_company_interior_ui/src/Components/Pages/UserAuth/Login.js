

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2><center>LOGIN</center></h2>
            <center>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username"><b>Username</b></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="username"  placeholder="abc@" id="username" name="username" />
                <label htmlFor="password"><b>Password</b></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br></br>
                <center><NavLink to='/banner'><button type="submit" className='btn btn-outline-warning col-2' >Login</button></NavLink></center>
            </form>
            </center>
            
        </div>
    )
}