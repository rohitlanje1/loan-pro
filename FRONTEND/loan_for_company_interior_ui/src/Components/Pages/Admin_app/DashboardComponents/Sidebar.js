// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Sidebar = () => {
//     return (
//         <>
//             <div className="sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
//                 <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
//                     <li className="nav-item mb-2 mt-3"><NavLink className="nav-link text-primary  " to="#">Login User|HOME</NavLink></li>
//                     <li className="nav-item mb-2 "><span> <NavLink  className="nav-link text-secondary ml-3 fas fa-user font-weight-bold" to="#"> Overview </NavLink></span></li>
//                     <li className="nav-item mb-2">
//                         <NavLink className="nav-link text-secondary far fa-file-word font-weight-bold ml-3" to="#submenu1" data-toggle="collapse" data-target="#submenu1"> Reports▾</NavLink>
//                         <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
//                         <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""><i className="fas fa-book-reader"></i> Annual Report </NavLink></li>
//                         <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""> <i className="fas fa-book-medical"></i> Quarterly Report </NavLink></li>
//                         <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""> <i className="fas fa-book-medical"></i> Monthly Report </NavLink></li>
//                         </ul>
//                     </li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary far fa-chart-bar font-weight-bold ml-3" to="/showdefault"><span classNameName="">defaulter Customers List</span></NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary fas fa-file-export font-weight-bold ml-3" to="#">Operational Head</NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary fas fa-tablet-alt font-weight-bold ml-3" to="#">Loan Sanctioning Officer</NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary fas fa-atom font-weight-bold ml-3" to="#">Loan Representative</NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary far fa-folder font-weight-bold ml-3" to="#">Others</NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#">Others</NavLink></li>
//                     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#">Others</NavLink></li>
//                 </ul>
//             </div>
//        </>
//     )
// }
 
// export default Sidebar
import {UsergroupAddOutlined,FormOutlined,MenuOutlined,AppstoreOutlined} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

  
  function Sidebar() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu float-start">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          
          selectedKeys={[selectedKeys]}
          
          items={[
            {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/dashboard",
              },
         
            {
              label: "Users",
              key: "/dashboard/users",
              icon: <UsergroupAddOutlined />,
            },
            {
              label: "Report",
              key: "/",
              icon: <FormOutlined/>,
            },
            {
              label: "Add Defaulters",
              key: "/defaulter",
              icon: <MenuOutlined />
             ,
            },

            {
                label: "Defaulters Details",
                key: "/showdefault",
                icon: <MenuOutlined />
               ,
              },
              {
                label: "Applications",
                key: "/dashboard/applications",
                icon: <FormOutlined/>
                ,
              },
            {
                label: "Operation Head",
                key: "/customers",
                icon: <MenuOutlined />
               ,
              },
              {
                label: "Loan Sanctioning Officer",
                key: "/customers",
                icon: <MenuOutlined />
               ,
              },
              {
                label: "Loan Representative",
                key: "/customers",
                icon:<MenuOutlined />
               ,
              },
          ]}
        ></Menu>
      </div>
    );
  }
  export default Sidebar;
  