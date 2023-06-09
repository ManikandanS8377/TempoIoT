import React, { useState } from 'react';

//import react icons
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            name: "Dashboard",
            icon: <FaTh />,
            links: ['Dashboard'],
            // head:['Dashboard']
        },
        {
            name: "About",
            icon: <FaUserAlt />,
            head: ['Management'],
            links: ['Assert Management', 'Alert Management', 'Device Management', 'Site Management', 'User Management']
        },
        {
            name: "Analytics",
            icon: <FaRegChartBar />,
            head: ['Configuration'],
            links: ['Alert', 'Modbus Slave', 'Modbus Master']
        },
        {
            name: "Comment",
            icon: <FaCommentAlt />,
            head: ['Upgradation'],
            links: ['Firmware']
        },
        {
            name: "Product",
            icon: <FaShoppingBag />,
            head: ['Log Maintenance'],
            links: ['Event', 'Device Connection', 'Real Data']
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
                return `/site`;
            case 'User Management':
                return `/Users`; //${path}/users
            case 'Configuration':
                return '/analytics';
            case 'Alert':
                return '/Alert';
            case 'Modbus Slave':
                return '/Modbus_Slave';
            case 'Modbus Master':
                return '/Modbus_Master';
            case 'Upgradation':
                return '#';
            case 'Firmware':
                return '/#';
            case 'Log Maintenance':
                return '/about';
            case 'Event':
                return '/Event';
            case 'Device Connection':
                return '/Device_Connection';
            case 'Real Data':
                return '/Real_Data';
            default:
                return "/";
        }
    };

    menuItem.forEach((item, index) => {
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
                <div className='all_icon'>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            className="link"
                            onMouseEnter={() => {
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'block';
                            }}
                            onMouseLeave={() => {
                                const dropdownContent = document.getElementsByClassName('dropdown-content')[index];
                                dropdownContent.style.display = 'none';
                            }}
                        >
                            <div className='individual_icon'>
                                <div className="icon">{item.icon}</div>
                            </div>

                            <div className="dropdown-content" style={{ display: 'none' }}>
                                <div className='sidebar_head'>{item.head}</div>
                                {item.links.map((link, i) => (
                                    <React.Fragment key={i}>
                                        <Link to={link.url}>{link.text}</Link>
                                        {i !== item.links.length - 1 && <hr className='dropdown-hr' />}
                                    </React.Fragment>
                                ))}

                            </div>
                        </NavLink>
                    ))}
                </div>
                <div>
                    <FontAwesomeIcon className='profile_pic' icon={faCircleUser} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#797a7c", }} />
                </div>
            </div>
            <main>{children}</main>
        </div>

    );
};

export default Sidebar;
