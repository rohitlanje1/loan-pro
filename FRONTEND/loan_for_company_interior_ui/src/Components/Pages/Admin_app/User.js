import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../../ApiServices/ApiServices'
// import "../../../static/myStyle.css"

// const myStyle={color:'red'}

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';


registerPlugin(FilePondPluginFileValidateSize, FilePondPluginImagePreview)
function FileSizeValidate() {
  const [files, initFiles] = useState([])
  return (
    <div className="container mt-5">
      <h2 className="mb-4">React File Upload Size Validation Example</h2>
      <FilePond
        files={files}
        allowFileSizeValidation={true}
        maxFileSize={1}
        labelMaxFileSizeExceeded={'File is too large'}
      />
    </div>
  )
}

function User() {
  const navigate = useNavigate
  const {register,handleSubmit,formState:{errors}} = useForm()





// ****************************************************************************


  async function saveData(data){
    console.log(data)
    const resp = await addUser(data)
    if(resp.status===201){
      navigate('#')

    }
  }
  function fileSizeFilter(){

  }

  return (
    <>
    <br/>
    <div className='container jumbotron col-6 '>
      <br/>
      <center><h2>Let's Get Start</h2></center><br/>
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
          <label htmlFor='dob'>Date Of Birth</label>
          <input type='date' id='dob' className='form-control' {...register('dob',{required:'This Field Is Required..'})} />
          <h6>{errors.dob?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='gender'>Gender</label>
          <select id='gender' className='form-control' {...register('gender',{required:'This Field Is Required..'})}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
          </select>
          <h6>{errors.gender?.message}</h6>
          
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
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' className='form-control' {...register('address',{required:'This Field Is Required..'})} />
          <h6>{errors.address?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='city'>City Name</label>
          <input type='text' id='city' className='form-control' {...register('city',
          {required:'This Field Is Required..',
          minLength:{
            value:3,
            message:'Minimum Three Characters Required...'
          }
          })} />
          <h6>{errors.city?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='state'>State Name</label>
          <input type='text' id='state' className='form-control' {...register('state',
          {required:'This Field Is Required..',
          minLength:{
            value:3,
            message:'Minimum Three Characters Required...'
          }
          })} />
          <h6>{errors.state?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='ln'>Country Name</label>
          <input type='text' id='ln' className='form-control' {...register('country',{required:'This Field Is Required..'})} />
          <h6>{errors.country?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='pin_code'>Pin Code</label>
          <input type='text' id='pin_code' className='form-control' {...register('pin_code',
          {required:'This Field Is Required..',
          minLength:{
            value:6,
            message:'Minimum Six Digit Pin Code Required...'
          }
          })} />
          <h6>{errors.pin_code?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='photo'>Photo</label>
          <input type='file' id='photo' accept='.jpg, .png, .jpeg, .pdf' className='form-control'  {...register('photo',{required:'This Field Is Required..'})} />
          <h6>{errors.photo?.message}</h6>
        </div><br/>
        <div>
          <label htmlFor='signature'>Signature</label>
          <input type='file' id='signature' accept='.jpg, .png, .jpeg, .pdf' className='form-control' onChange={FileSizeValidate} {...register('signature',{required:'This Field Is Required..'})} />
          <h6>{errors.signature?.message}</h6>
        </div>
        <div>
          <label htmlFor='role'></label>
          <input type='hidden' id='role' className='form-control' {...register('role')} />
          
        </div>
        <div>
          <label htmlFor='ud'>Username</label>
          <input type='text' id='ud' className='form-control' {...register('username',
          {required:'This Field Is Required..',
          minLength:{
            value:6,
            message:'Minimum Six Characters Required...'
          }
          })} />
          <h6>{errors.username?.message}</h6>
        </div><br/>


        <div>
          <label htmlFor='pw'>Password</label>
          <input type='text' id='pw' className='form-control' name = "pswd1" {...register('password',
          {required:'This Field Is Required..',
          minLength:{
            value:7,
            message:'Minimum Seven Characters Required...'
          }
          })} />
          <h6>{errors.password?.message}</h6>
        </div><br/>

        <div>
          <label htmlFor='pw'>Confirm Password</label>
          <input type="password" id='pw' className='form-control' name = "pswd2" {...register('confirm_password',
          {required:'This Field Is Required..'
          })} />
          <h6>{errors.confirm_password?.message}</h6>
        </div><br/>
        <br/>
        <input type='submit' value='ADD'className='btn btn-success col-6'/>
        <input type='reset' value='RESET' className='btn btn-warning col-6'/>
        
        </form>
    </div> 
    
    
    </>
  )
}

export default User