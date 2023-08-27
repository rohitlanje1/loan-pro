import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"


class Banner extends Component {
    render() {
        return (
            
            <section className="container-banner">
                    <Header/>
                    <a href="Admin_app/DashboardComponents/DashBoard/Dasboard"><img id="profilepic" src="https://ik.imagekit.io/tko8b2tmb/Loan_Project/user.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676348692458"  width="170" height="175" alt="profilepic"/></a>
                    <h1 className="head-1"><b></b></h1>
                    <NavLink to='/user'><input type='button' value='Apply' className='btn btn-outline-warning col-3'/></NavLink>
                    <input type='button' value='Reschedule' className='btn btn-outline-warning col-3 ms-4'/>
                    <input type='button' value='EMI Check' className='btn btn-outline-warning col-3 ms-4'/><br/>
                    <input type='button' value='Track Your Application' className='btn btn-outline-warning col-3 ms-4'/>

                    
            </section>
                    
        )
    }
}
export default Banner