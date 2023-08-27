import React, { useEffect, useState, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';




function MonthlyApplicationChart() {

    const [application, setApplication ] = useState([]);

    async function fetchApplications(){
        const result = await axios.get(`http://127.0.0.1:8000/application/`);
        console.log('fetched data-->', result.data)
        setApplication(result.data);

        var today = new Date('2022-01-10 17:22:20.675299'); // yyyy-mm-dd

        // Getting short month name (e.g. "Oct")
        var month = today.toLocaleString('default', { month: 'short' });
        var year = today.toLocaleString('default', { year: 'short' });
        console.log('month-------->', month)
        console.log('year--->', year)
        
       
    }
    const data4 = [];


    application.map(obj=>{
   
       const datTime = new Date(obj.application_timestamp)
       var month = datTime.toLocaleString('default', { month: 'short' });
       var year = datTime.getFullYear();
       console.log('month__', month)
       if (obj.status==="Inprocess"){
            const appl = {Month:{month}, 'Year':{year}, Accepted:0, Rejected:0, Inprocess:1}
            data4.push(appl)
       }
       if (obj.status==="Rejected"){
            const appl = {'Month':{month}, 'Year':{year}, Accepted:0, Rejected:1, Inprocess:0}
            data4.push(appl)
       }
       if (obj.status==="Approved"){
            const appl = {'Month':{month}, 'Year':{year}, Accepted:1, Rejected:0, Inprocess:0}
            data4.push(appl)
       }
       
    })


    console.log('data4-------->',data4)

    const sumSimilarMonth = arr => {
        const res = [];
        for(let i = 0; i < arr.length; i++){
           const ind = res.findIndex(el => el.Month['month'] === arr[i].Month['month'] && el.Year['year'] === arr[i].Year['year']);
           if(ind === -1){
              res.push(arr[i]);
           }else{
              res[ind].Accepted += arr[i].Accepted;
              res[ind].Rejected += arr[i].Rejected;
              res[ind].Inprocess += arr[i].Inprocess;
           };
        };
        return res;
     };
     console.log('lalala',sumSimilarMonth(data4));

     const graphical_data = sumSimilarMonth(data4);
     
     console.log('Graphical Data--->', graphical_data);
 
    useEffect(()=>{
        fetchApplications();
    }, []);

  return (
    <>
        <div className='DashBoardContent mt-3 '>
            <div className='float-left'>
                
            <BarChart width={500} height={500} data={graphical_data} >
                <CartesianGrid strokeDasharray/>
                <XAxis dataKey="Month.month" />
                <YAxis />
                <Legend />
                <Bar dataKey="Accepted" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Rejected" stackId="a" fill="#ff0066" />
                <Bar dataKey="Inprocess" stackId="a" fill="#8884d8" />
                
            </BarChart>
            
            <center><h5>Monthly Report</h5></center>
            </div>
            <div className='float-left'>
            
            <BarChart width={500} height={500} data={graphical_data} >
                <CartesianGrid strokeDasharray/>
                <XAxis dataKey="Month.month" />
                <YAxis />
                <Legend />
                <Bar dataKey="Accepted" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Rejected" stackId="a" fill="#ff0066" />
                <Bar dataKey="Inprocess" stackId="a" fill="#8884d8" />
                
            </BarChart>
            
            <center><h5>Quarterly Report</h5></center>
            </div>
            

        </div>
        <div className='DashBoardContent mt-3'>
            <div className=''>
            <BarChart width={500} height={500} data={graphical_data} >
                <CartesianGrid strokeDasharray/>
                <XAxis dataKey="Year.year" />
                <YAxis />
                <Legend />
                <Bar dataKey="Accepted" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Rejected" stackId="a" fill="#ff0066" />
                <Bar dataKey="Inprocess" stackId="a" fill="#8884d8" />
                
            </BarChart>
            <center><h5>Yearly Report</h5></center>

            </div>
        </div>
    </>
  )
}

export default MonthlyApplicationChart;