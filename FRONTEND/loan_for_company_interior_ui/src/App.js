
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Layout/Navbar"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Application, Bank, Business, Defaulter, Disbursment, Document,Enquiry,Family, Guarantor,Installment, Loan, User, Vendor} from "./Components/Pages"
import "./static/myStyle.css"
import Dashboard from "./Components/Pages/Admin_app/DashboardComponents/Dashboard"
import Emi from "./Components/Pages/Customer/Emi"
import DefaulterShow from "./Components/Pages/Admin_app/DashboardComponents/DefaulterShow"
import DefauletrsDelete from "./Components/Pages/Admin_app/DashboardComponents/DefauletrsDelete"
import { Login } from "./Components/Pages/UserAuth/Login"
import Banner from "./Components/Pages/Home/Banner"
import Header from "./Components/Pages/Home/Header"
import "../src/Components/Css/Main.css"
import AllApplications from "./Components/Pages/Admin_app/DashboardComponents/AllApplications"
import ShowUser from "./Components/Pages/Admin_app/DashboardComponents/ShowUser"
import UpdateUsers from "./Components/Pages/Admin_app/DashboardComponents/UpdateUsers"
import MonthlyApplicationChart from "./Components/Pages/Admin_app/DashboardComponents/MonthlyApplicationChart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            
            <Route path="/header" element={<Header/>}/>
            <Route path="/banner" element={<Banner/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/applications" element={<AllApplications/>}/>
            <Route path="/dashboard/users" element={<ShowUser/>}/>
            <Route path='/update/documents/:id/' element={<UpdateUsers/>}/>
            <Route path="/showdefault" element={<DefaulterShow/>}/>
            <Route path="/deletedefault/:userId" element={<DefauletrsDelete/>}/>




            <Route path="/emi" element={<Emi/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path="/defaulter" element={<Defaulter/>}/>
            <Route path="/application" element={<Application/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/family" element={<Family/>}/>
            <Route path="/guarantor" element={<Guarantor/>}/>
            <Route path="/enquiry" element={<Enquiry/>}/>
            <Route path="/disbursement" element={<Disbursment/>}/>
            <Route path="/installment" element={<Installment/>}/>
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path="/document" element={<Document/>}/>
            <Route path="/bank" element={<Bank/>}/>
            <Route path="/loan" element={<Loan/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='reports/' element={<MonthlyApplicationChart/>}/>


          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App