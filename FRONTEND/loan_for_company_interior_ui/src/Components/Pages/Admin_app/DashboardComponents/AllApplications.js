import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

function AllApplications() {

    const [appplications, setApplications] = useState([]);

    async function fetchApplications(){
        const result = await axios.get(`http://127.0.0.1:8000/api/application/`);
        console.log('fecthed Applications-->', result.data);
        setApplications(result.data);
    }

    useEffect(()=>{
        fetchApplications();
    },[])
  return (
    <>
    <div className='DashBoardContent'>
        <table className='table table-dark table-hover text-center'>
            <thead>
                <tr>
                    <th>Application ID</th>
                    <th>Aadhar Number</th>
                    <th>PAN Card Number</th>
                    <th>Type of Employement</th>
                    <th>Bussiness Title</th>
                    <th>Bussiness Type</th>
                    <th>Bussiness Address</th>
                    <th>GST Number</th>
                    <th>Bussiness License</th>
                    <th>Years in Current Bussiness</th>
                    <th>COllatral</th>
                    <th>Aplication time</th>
                    <th>Remark</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    appplications.map(obj=>{
                        return (
                            <>
                                <tr className='col-height-5'>
                                    <td>{obj.id}</td>
                                    <td>{obj.aadhaar_no}</td>
                                    <td>{obj.pan_no}</td>
                                    <td>{obj.type_of_employment}</td>
                                    <td>{obj.business_title}</td>
                                    <td>{obj.business_type}</td>
                                    <td>{obj.business_address}</td>
                                    <td>{obj.gst_registration_no}</td>
                                    <td>{obj.business_license_no}</td>
                                    <td>{obj.expected_average_annual_turnover}</td>
                                    <td>{obj.years_in_current_business}</td>
                                    <td>{obj.collateral}</td>
                                    <td>{obj.remark}</td>
                                    <td className='font-weight-bold'>{obj.status}</td>
                                    <td>
                                        <NavLink to={`/check/document/${obj.id}`}>
                                            <button className='btn btn-warning btn-sm'>Check</button>
                                        </NavLink>
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

export default AllApplications