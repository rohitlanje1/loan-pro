import {UsergroupAddOutlined,FormOutlined,MenuOutlined,AppstoreOutlined} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

  
  function SideMenu() {
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
              key: "/reports",
              icon: <FormOutlined/>,
            },

            {
              label: "Applications",
              key: "/dashboard/applications",
              icon: <FormOutlined/>
              ,
            },
            {
              label: "Defaulters",
              key: "/defaulters",
              icon: <MenuOutlined />
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
  export default SideMenu;
  