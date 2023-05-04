import React from 'react';
import{Menu} from 'antd';
import {AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import './SideMenu.css';

function SideMenu(){

  const navigate = useNavigate();
    return(
        <div className='SideMenu'>
          <Menu
          className='SideMenuVertical'
          mode='vertical'

          onClick={(item) => {
            navigate(item.key);

          }}
          
          items={[

           {
            label: "Dashboard",
            icon: <AppstoreOutlined/>,
            key:'/',
           },

           {
            label: "Inventory",
            icon: <ShopOutlined/>,
            key:'/Inventory',
           },

           {
            label: "Orders",
            icon: <ShoppingCartOutlined/>,
            key:'/Orders',
           },

           {
            label: "Customers",
            icon: <UserOutlined/>,
            key:'/Customers',
           }

          ]}
          ></Menu>
        </div>
    )
}
export default SideMenu;