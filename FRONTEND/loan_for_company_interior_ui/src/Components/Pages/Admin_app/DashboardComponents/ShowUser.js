import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { customerRegist } from "../../../../ApiServices/ApiServices"

function ShowUser() {

    const [users, setUsers] = useState([]);

    async function fetchUsers(){
        const result = await customerRegist();
        setUsers(result.data);
    }

    useEffect(()=>{
        fetchUsers();
    },[]);


  return (
    <>
        <center><h3>Customer Details</h3></center>
        <div className='float-right col-6'>
    <NavLink to={"/dashboard"}><button className='btn btn-danger col-5 mt-1 btn-lg'>BACK TO ADMIN DASHBOARD </button></NavLink>
    </div>
    <br/>
        <div className='DashBoardContent mt-3'>
            <table className=' m-3 ApplicationTable table float-left table-dark table-hover text-center'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Photo</th>
                        <th>Signature</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(obj=>{
                            return (
                                <>
                                    <tr>
                                        <td>{obj.id}</td>
                                        <td>{obj.first_name}</td>
                                        <td>{obj.last_name}</td>
                                        <td>{obj.mobile}</td>
                                        <td><img src={obj.photo} alt="image" height={'30px'} width={'50px'}/></td>
                                        <td><img src={obj.signature} alt="image" height={'30px'} width={'50px'}/></td>
                                        <td>{obj.role}</td>
                                        <td>
                                            <NavLink to={`/update/user/${obj.id}/`}><button className='btn btn-warning btn-sm'>Update</button></NavLink>
                                            <NavLink to={`/delete/user/${obj.id}/`}><button className='btn btn-danger btn-sm ml-3'>Delete</button></NavLink>
                                        </td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ShowUser