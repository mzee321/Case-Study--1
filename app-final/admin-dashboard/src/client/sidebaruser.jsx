import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';
import Header from './headeruser';  

function SideBars({ userData }) {
    const navigate = useNavigate(); // Get navigate function from useNavigate

    useEffect(() => {
        // Your useEffect logic here if needed
    }, []); // Add dependencies if necessary

    const handleBorrowBookClick = () => {
        // Handle click event for borrowing a book
        // Navigate programmatically to the borrow-book route
        navigate('/borrow-book');
    };

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard-main">
                        <i className="bi bi-grid"></i>
                        <span>Book Directory</span>
                    </Link>
                </li>

        <Link
            to={`/borrow-book?userData=${encodeURIComponent(JSON.stringify(userData))}`}
            className="nav-link collapsed"
        >
        <i className="bi bi-menu-button-wide"></i>
        <span>Borrow a Book<Header userData={userData} /></span>
        </Link> 

                <li className="nav-heading">Pages</li>
                {navList.map(nav => (
                    <NavItem key={nav.Id} nav={nav} />
                ))}

            </ul>
        </aside>
    );
}

export default SideBars;
