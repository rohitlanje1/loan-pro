import axios from 'axios';
import {useEffect,useState} from 'react';
import { customerRegist,applicationInprocess } from '../../../../ApiServices/ApiServices';
import Sidebar from './Sidebar';




const Dashboard = () => {
   
   const[record,setRecord] = useState([])
   const[register_user,setRegister_user] = useState([])
   const[applications,setApplications] = useState([])
   const[applications_approved,setApplications_approved] = useState([])
 
    async  function getData () {
        const result= await axios.get('http://127.0.0.1:8000/api/defaulter/');
        setRecord(result.data);
    }

    async function CustomersRegister(){
        const res = await customerRegist()
        setRegister_user(res.data)
        // function roleFilter(res1){
        //     res1.map(obj)=>{
        //         if(obj.role  ['Admin','Loan_Sanction_Officer','Operational_head','Loan_Representative']){
        //             return obj
        //         }

        //     }
    
    }
    async function ApplicationsInProcess(){
        const res = await applicationInprocess()
        setApplications(res.data)
    }
    async function ApplicationsApproved(){
        const res = await applicationInprocess()
        setApplications_approved(res.data)
    }
    // async function ApplicationsRejected(){
    //     const res = await applicationInprocess()
    //     setApplications(res.data)
    // }

//********************************************************************** */
    useEffect(() => {
        getData();
        },[])
    
    useEffect(
        ()=>{CustomersRegister();
        },[])

    useEffect(
        ()=>{ApplicationsInProcess()
        },[])
    useEffect(
        ()=>{ApplicationsApproved()
        },[])
    // useEffect(
    //     ()=>{ApplicationsRejected()
    //     },[])
 
    return (
    <>
    <div className="col col-lg-2  float-left bg-light" >
        <Sidebar />
    </div>
    
    <div className="col col-lg-10 float-right bg-light">
         

        <p className="lead d-none d-sm-block mt-1 text-lg-2"><b>Customers Details and Records</b></p>
 
        <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about Customers
        </div>
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                    <div className="card-body bg-info" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                            <i className="fa fa-user fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase text-dark">Customers Registered</h6>
                        <h1 className="display-3 text-center font-weight-bold">{register_user.length}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-warning">
                        <div className="rotate">
                            <i className="fa fa-list fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase text-dark">Application Inprocess</h6>
                        <h1 className="display-3 text-center font-weight-bold">{applications.length}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-success h-100">
                    <div className="card-body bg-success">
                        <div className="rotate">
                          <i className="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase text-dark">Application Approved</h6>
                        <h1 className="display-3 text-center font-weight-bold">{applications_approved.length}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body">
                        <div className="rotate">
                            <i className="fa fa-share fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase text-dark">Applications Rejected</h6>
                        <h1 className="display-3 text-center font-weight-bold">{register_user.length-applications.length-applications_approved.length}</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>

       
        <div className="row col col-lg-12">
            <div className="col col-lg-12">
              <center><h5 className="mt-3 mb-3 text-secondary bg-dark text-light p-2">Defaulter Customers Data</h5></center>
               
              
                <div className="table-responsive">
                    <table className="table table-bordered col col-12 text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER</th>
                                <th>DEFAULT AMOUNT</th>
                                <th>PENDING SINCE DATE</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                         {record.map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.user}</td>
                                <td>{output.default_amount}</td>
                                <td>{output.pending_since_date}</td>
                                
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
  
        </div>
    </>
    )
}
 
export default Dashboard