import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, getUsers, saveUser } from "../../../../ApiServices/ApiServices"

function UpdateUsers() {

  const naviagate = useNavigate();

  const {id} = useParams();

  const {register, handleSubmit, setValue} =  useForm();

  function saveData(data){
    const res = saveUser(data, id);

    if (res.status === 200){
      naviagate('/show/users/')
    }

  }

  async function fetchUser(){
    const result  = await getUser(id);  //api is in APIServeces.js
    console.log('fetched data--->', result.data)

    setValue('first_name', result.data.first_name);
    setValue('last_name', result.data.last_name);
    setValue('dob', result.data.dob);
    setValue('gender', result.data.gender);
    setValue('email', result.data.email);
    setValue('address', result.data.address);
    setValue('city', result.data.city);
    setValue('state', result.data.state);
    setValue('country', result.data.country);
    setValue('pin_code', result.data.pin_code);
    setValue('mobile', result.data.mobile);
    setValue('photo', result.data.photo);
    setValue('signature', result.data.signature);
    setValue('role', result.data.role);
    setValue('password', result.data.password);
    setValue('username', result.data.username);
  }

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <>
        <div>
        <form action=""  onSubmit={handleSubmit(saveData)} className='container jumbotron mt-5 shadow'>
            <center><h1>UpdateUsers</h1></center>
            <br /><br />
            <label htmlFor=""><b>First Name:</b></label>
            <input type="text" className='form-control' {...register('first_name')}/>
            <br /><br />

            <label htmlFor=""><b>Last Name:</b></label>
            <input type="text" className='form-control' {...register('last_name')}/>
            <br /><br />

            <label htmlFor=""><b>Date of Birth:</b></label>
            <input type="date" className='form-control' {...register('dob')}/>
            <br /><br />

            <label htmlFor="id_gneder"><b>Gender:</b></label>
            <select  id="id_gender" className='form-control' {...register('gender')}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br /><br />

            <label htmlFor=""><b>Email:</b></label>
            <input type="email" className='form-control' placeholder='e.g. Joey@gmail.com' {...register('email')}/>
            <br /><br />

            <label htmlFor=""><b> Address:</b></label>
            <textarea  id="" cols="30" rows="3" className='form-control' {...register('address')}></textarea>
            <br /><br />

            <label htmlFor=""><b>City:</b></label>
            <input type="text" className='form-control' {...register('city')}/>
            <br /><br />

            <label htmlFor=""><b>State:</b></label>
            <input type="text" className='form-control' {...register('state')}/>
            <br /><br />

            <label htmlFor=""><b>Country:</b></label>
            <input type="text" className='form-control' {...register('country')}/>
            <br /><br />

            <label htmlFor=""><b>Pin Code:</b></label>
            <input type="number" className='form-control' {...register('pin_code')}/>
            <br /><br />

            <label htmlFor=""><b>Mobile Number:</b></label>
            <input type="Number" className='form-control' {...register('mobile')}/>
            <br /><br />

            <label htmlFor=""><b>Photo:</b></label>
            <input type="file" className='form-control'  {...register('photo')}/>
            <br /><br />

            <label htmlFor=""><b>Signature:</b></label>
            <input type="file" className='form-control'  {...register('signature')}/>
            <br /><br />

            <label htmlFor=""><b>Role:</b></label>
            {/* <input type="text" className='form-control'/> */}
            <select  id="" className='form-control' {...register('role')}>
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
              <option value="Operational_Head">Operational Head</option>
              <option value="Loan_Representative">Relationship Manager</option>
            </select>
            <br /><br />

            <input type="submit" value='Register' className='btn btn-outline-success col-5'/>
            <input type="reset"  className='btn btn-outline-info col-5 float-right'/>
        </form>
        </div>
    </>
  )
}


export default UpdateUsers;