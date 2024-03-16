import React, { Component, useEffect, useState } from "react";
import UpdateBorrowBookPageTitle from './update-borrowbook-pagetitle';
import UpdateBorrowBookTable from './update-borrowbook-table';


//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";

export default function ManageUsersMain() {

  return (
    <main id="main" className="main">
      <SideBar/>
      <Header/>
      <UpdateBorrowBookPageTitle page ='Update Borrowed Books'/>
      <UpdateBorrowBookTable/>
      
    </main>
  );
}
