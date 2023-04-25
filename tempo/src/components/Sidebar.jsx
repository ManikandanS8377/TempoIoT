import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/Device",
            name: "Device",
            icon: <FaThList />
        },{
            path : "/Add_device",
            name : "Add Devive",
            icon : <FaShoppingBag/>
        }
    ];

    menuItem.map((item, index) => {
        let dropdownContent;
        if (item.name === 'dashboard') {
            dropdownContent = (
                <div className="dropdown-content" style={{ display: 'none' }}>
                    <a href="#">Link 1</a>
                </div>
            );
        } else {
            dropdownContent = (
                <div className="dropdown-content" style={{ display: 'none' }}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            );
        }
    });

    return (
        <div className="container-slidebar">
            <div className="sidebar">
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            className="link"
                            activeClassName="active"
                            onMouseEnter={() => { // add mouse enter event handler
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'block';
                            }}
                            onMouseLeave={() => { // add mouse leave event handler
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'none';
                            }}
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="dropdown-content" style={{ display: 'none' }}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </NavLink>
                    ))
                }
            </div>


            <main>{children}</main>
        </div>
    );
};

export default Sidebar;