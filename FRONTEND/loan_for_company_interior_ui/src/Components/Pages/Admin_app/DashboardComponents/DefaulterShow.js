import axios from 'axios';
import {useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';

 
 
 
 const DefaulterShow = () => {
   
   const[record,setRecord] = useState([])
 
   async  function getData () {
       const result= await axios.get('http://127.0.0.1:8000/api/defaulter/');
       setRecord(result.data);
   }
 
   useEffect(() => {
      getData();
   },[])
    
 
    return (
    <>

<div className="row ">
    
<div className="col-lg-12 col-md-12 col-sm-12 text-center">
    <div className='float-right col-6'>
    <NavLink to={"/dashboard"}><button className='btn btn-info col-5 mt-2 btn-lg'>BACK TO ADMIN DASHBOARD </button></NavLink>
    </div>
  <h3 className="mt-3 bm-3 bg-warning">
  <cente><u><b>DEFAULTER CUSTOMER DATA</b></u></cente>
  </h3>
    <div className="table-responsive jumbotron" >
        <table className="table table-lg table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER</th>
                    <th>DEFAULT AMOUNT</th>
                    <th>PENDING SINCE DATE</th>
                    <th>ACTION</th>
                   
                </tr>
            </thead>
            <tbody >

             {record.map((output)=>
                <tr>
                    <td>{output.id}</td>
                    <td>{output.user}</td>
                    <td>{output.default_amount}</td>
                    <td>{output.pending_since_date}</td>
                    <td>
                        <NavLink to={`/deletedefault/${output.id}`}><button className='btn btn-danger ms-3'>DELETE</button></NavLink>
                            
                    </td>
                    
                </tr>
               )}
            </tbody>
        </table>
    </div>
</div>
</div>
    </>
    )
}
 
export default DefaulterShow
