

import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "#",
            name: "Dashboard",
            icon: <FaTh />,
            links: ['Dashboard']
        },
        {
            path: "#",
            name: "About",
            icon: <FaUserAlt />,
            links: ['Management', 'Assert Management', 'Alert Management', 'Device Management', 'Site Management', 'User Management']
        },
        {
            path: "#",
            name: "Analytics",
            icon: <FaRegChartBar />,
            links: ['Configuration', 'Alert', 'Modbus Slave', 'Modbus Master']
        },
        {
            path: "#",
            name: "Comment",
            icon: <FaCommentAlt />,
            links: ['Upgradation', 'Firmware']
        },
        {
            path: "#",
            name: "Product",
            icon: <FaShoppingBag />,
            links: ['Log Maintenance', 'Event', 'Device Connection', 'Real Data']
        },
    ];

    const getLinkUrl = (link, path) => {
        switch (link) {
            case 'Dashboard':
                return '/Dashboard';
            case 'Assert Management':
                return `/Assert_Management`;
            case 'Alert Management':
                return `/Alert_Management`;
            case 'Device Management':
                return `/Device`;   //`/Add_device`
            case 'Site Management':
                return `${path}/sites`;
            case 'User Management':
                return `${path}/users`;
            case 'Configuration':
                return '/analytics';
            case 'Alert':
                return '/#';
            case 'Modbus Slave':
                return '/#';
            case 'Modbus Master':
                return '/#';
            case 'Upgradation':
                return '#';
            case 'Firmware':
                return '/#';
            case 'Log Maintenance':
                return '/about';
            case 'Event':
                return '/#';
            case 'Device Connection':
                return '/#';
            case 'Real Data':
                return '/#';
            default:
                return "/";
        }
    };

    menuItem.forEach(item => {
        item.links = item.links.map(link => {
            return {
                text: link,
                url: getLinkUrl(link, item.path)
            };
        });
    });

    return (
        
            <div className="container-slidebar">
                <div className="sidebar">
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            className="link"
                            activeClassName="active"
                            onMouseEnter={() => {
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'block';
                            }}
                            onMouseLeave={() => {
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'none';
                            }}
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="dropdown-content" style={{ display: 'none' }}>
                                {item.links.map((link, i) => (
                                    <React.Fragment key={i}>
                                    <Link to={link.url}>{link.text}</Link>
                                    {i !== item.links.length - 1 && <hr className='dropdown-hr'/>} 
                                    </React.Fragment>
                                ))}
                                
                            </div>
                        </NavLink>
                    ))}
                </div>
                <main>{children}</main>
            </div>
        
    );
};

export default Sidebar;
