import React from 'react'
import {useForm} from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { addDefaulter } from '../../../ApiServices/ApiServices'

function Defaulter() {
  const navigate = useNavigate
  const {register,handleSubmit} = useForm()

  async function saveData(data){
    const resp = await addDefaulter(data)
    if(resp.status===201){
      navigate('#')

    }
  }
  return (
    <>

    <div className='float-right col-6'>
    <NavLink to={"/dashboard"}><button className='btn btn-danger col-5 mt-2 btn-lg'>BACK TO ADMIN DASHBOARD </button></NavLink>
    </div>
    <br/><br/><br/>
    <div className='container-fluid col-6 bg-light'>
      <br/>
      <center><h2>Defaulter Section</h2></center><br/>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <label htmlFor='user'>User</label>
          <input type='text' id='user' className='form-control' {...register('user')} ></input>
        </div>
        <br/>
        <div>
          <label htmlFor='default_amount'>Default Amount</label>
          <input type='text' id='default_amount' className='form-control' {...register('default_amount')} ></input>
        </div>
        <br/>
        <div>
          <label htmlFor='default_amount'>Pending Since Date</label>
          <input type='date' id='default_amount' className='form-control' {...register('pending_since_date')} ></input>
        </div>
        <br/>
        <input type='submit' value='ADD'className='btn btn-success col-6'/>
        <input type='reset' value='RESET' className='btn btn-warning col-6'/>


      </form>
    </div>
    
    
    </>
  )
}

export default Defaulter