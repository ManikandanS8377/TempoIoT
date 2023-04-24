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
        }
    ]

    return (
        <div className="container-slidebar">
            <div className="sidebar">
                {
                    menuItem.map((item) => (
                        <NavLink to={item.path} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div class="dropdown-content">
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