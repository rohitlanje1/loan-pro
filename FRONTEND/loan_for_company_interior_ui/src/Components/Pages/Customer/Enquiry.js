
import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { addEnquiry } from '../../../ApiServices/ApiServices'


function Enquiry() {

    const navigate = useNavigate();
    const {register, handleSubmit,formState:{errors}} = useForm();

    async function saveData(data){
      const resp = await addEnquiry(data)
      if(resp.status===201){
        navigate('#')
  
      }
    }
  
    return (
      <>
   
      <div className='container-fluid col-6 bg-light'>
        <br/>
        <center><h2>----ENQUIRY FORM----</h2></center><br/>
        <form onSubmit={handleSubmit(saveData)}>
        
        <div>
          <label htmlFor='fn'>First Name</label>
          <input type='text' id='fn' className='form-control' placeholder='e.g. Sixuka Yahoon' {...register('first_name',
          {required:'This Field Is Required..',
            minLength:{
              value:2,
              message:'Minimum Two Characters Required...'
            }
          })} ></input>
          <h6>{errors.first_name?.message}</h6>
        </div>
        <br/>
          
        <div>
          <label htmlFor='ln'>Last Name</label>
          <input type='text' id='ln' className='form-control' {...register('last_name',
          {required:'This Field Is Required...',
            minLength:{
              value:2,
              message:'Minimum Two Characters Required...'
            }
          })} />
          <h6>{errors.last_name?.message}</h6>
        </div><br/>
          
        <div>
          <label htmlFor='email'>Email Id</label>
          <input type='email' id='email' className='form-control' {...register('email',
          {required:'This Field Is Required..',
          pattern:{
            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message:"Invalid Email..."
          }
          })} />
          <h6>{errors.email?.message}</h6>
        </div><br/>
        
          <div>
          <label htmlFor='mobile'>Mobile</label>
          <input type='text' id='mobile' className='form-control' {...register('mobile',
          {required:'This Field Is Required..',
            pattern:{
              value:/^[6789]{1}[0-9]{9}$/,
              message:"Invalid Mobile Number..." 
            }
          })} />
          <h6>{errors.mobile?.message}</h6>
        </div><br/>

        <div>
          <label htmlFor='message'>Message</label>
          <input type='text' id='message' className='form-control' {...register('message',
          {required:'This Field Is Required...',
            minLength:{
              value:2,
              message:'Minimum Two Characters Required...'
            }
          })} />
          <h6>{errors.last_name?.message}</h6>
        </div><br/>
          
        <div>
          <label htmlFor='ed'>Enquiry Date</label>
          <input type='date' id='ed' className='form-control' {...register('ed',{required:'This Field Is Required..'})} />
        </div><br/>
          
        <div>
          <label htmlFor='status'>Status</label>
          <select className='form-control'   {...register('status')}>
              <option>pending</option>
              <option>Successful</option>
              <option>rejected</option>
          </select>
        </div><br/>

        <div>
          <label htmlFor='res'>Response Timestamp</label>
          <input type='date' id='res' className='form-control' {...register('res',{required:'This Field Is Required..'})} />
        </div><br/>
          
          <input type='submit' value='ADD ENQUIRY'className='btn btn-success col-3'/>
          <input type='reset' value='RESET' className='btn btn-warning col-3'/>
          
          </form><br/><br/>
      </div> 
      
      
      </>
    )
}

export default Enquiry;