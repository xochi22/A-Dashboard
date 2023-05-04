import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Customers from '../../Pages/Customers/Customers';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Inventory from '../../Pages/Inventory/Inventory';
import Orders from '../../Pages/Orders/Order';

function AppRoutes(){
    return(
        <div className='AppRoutes'>
            <Routes>
             <Route path='/' element={<Dashboard/>}/>
             <Route path='/Inventory' element={<Inventory/>}/>
             <Route path='/Orders' element={<Orders/>}/>
             <Route path='/Customers' element={<Customers/>}/>
            </Routes>

        </div>
    )
}

export default AppRoutes;