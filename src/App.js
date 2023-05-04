import React from "react";
import './App.css';
import AppHeader from './Component/AppHeader/AppHeader';
import SideMenu from'./Component/SideMenu/SideMenu';
import PageContent from './Component/PageContent/PageContent';
import AppFooter from './Component/AppFooter/AppFooter';
import {Space} from "antd";

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <div className="bodySpace">
      <SideMenu/>
      <PageContent/>
     </div>
     <AppFooter/>
    </div>
  );
}

export default App;
