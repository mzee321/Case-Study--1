import React from 'react';
import './nav.css';
import NavAvatar from "./NavAvatar";
import NavMessage from "./NavMessage";
import NavNotice from "./NavNotice";

function Nav({ userData }) {
    console.log(userData);
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatar userData={userData} />
      </ul>
    </nav>
  );
}

export default Nav;
