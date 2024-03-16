import React, { Component, useEffect, useState } from "react";
import UpdateBookPageTitle from "./update-book-main-pagetitle";
import UpdateUserMenu from "./update-user-menu";
//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "../HeaderManageAdmin";

export default function UpdateUserMain() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <UpdateBookPageTitle page ='Manage Users'/>
      <UpdateUserMenu/>
      
    </main>
  );
}
