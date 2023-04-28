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
            icon: <FaTh />,
            links: ['Dashboard']
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />,
            links: ['Mangement', 'Assert', 'Alert','Device','Site','User']
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />,
            links: ['Configuraation', 'Alert','Modbus Slave','Modbus Master']
        },
        {
            path: "/Device",
            name: "Comment",
            icon: <FaCommentAlt />,
            links: ['Upgradation', 'Frimware']
        },
        {
            path: "/Add_device",
            name: "Product",
            icon: <FaShoppingBag />,
            links: ['Log Mantainance', 'Event', 'Device Connection','Real Data']
        },
        // {
        //     path: "/comment",
        //     name: "Device",
        //     icon: <FaThList />,
        //     links: ['Link 1', 'Link 2', 'Link 3']
        // }, {
        //     path: "/product",
        //     name: "Add Devive",
        //     icon: <FaShoppingBag />,
        //     links: ['Link 1', 'Link 2', 'Link 3']
        // }
    ];

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
                                // setTimeout(() => {
                                //     dropdownContent.style.display = 'none';
                                //   }, 80);
                            }}
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="dropdown-content" style={{ display: 'none' }}>
                                {item.links.map((link, i) => (
                                    <a key={i} href="#">{link}</a>
                                ))}
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