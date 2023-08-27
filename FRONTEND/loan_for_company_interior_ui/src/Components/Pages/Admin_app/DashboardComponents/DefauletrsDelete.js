import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function DefauletrsDelete() {
    const{userId} = useParams()
    const[users,setUsers] = useState({})
    const navigate=useNavigate()
   
    async function fetchUser(){
        const res= await axios.get(`http://127.0.0.1:8000/api/defaulter/${userId}`)
        setUsers(res.data)
    }

    function deleteUser(){
        axios.delete(`http://127.0.0.1:8000/api/defaulter/${userId}`)
        navigate('/showdefault')   
    }
    
    useEffect(
        ()=>{fetchUser()},[]
    )

  return (
    <>
        <form onSubmit={deleteUser}>
            <center>
            <p>Do You Really Want To Delete Record For <span>{users.id} {users.user}</span> ?</p>
            <br/><br/>
            <input type='submit' value='YES' className='btn btn-danger'/>
            <NavLink to='/showdefault'><button className='btn btn-success ms-3'>NO</button></NavLink>
                    
            </center>
        </form>
    </>
  )
}

export default DefauletrsDelete