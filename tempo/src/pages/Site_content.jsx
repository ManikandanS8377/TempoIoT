import React from 'react';
import '../assets/style/App.css';


//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from "react";
import { json, useNavigate } from 'react-router-dom';

const Site_content = () => {
    const [alldata, setalldata] = useState([]);
    const [isOpen1, setIsOpen1] = useState(false);
    const dropdownRef1 = useRef(null);

    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const dropdown1 = () => {
        setIsOpen1(!isOpen1);
        setIsDropdownOpen1(!isDropdownOpen1);
    };
    const empty_space_down1 = (event) => {
        if (!dropdownRef1.current.contains(event.target)) {
            setIsOpen1(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', empty_space_down1);
        return () => {
            document.removeEventListener('click', empty_space_down1);
        };
    }, []);

    const [isOpen2, setIsOpen2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsDropdownOpen2(!isDropdownOpen2);

    };
    const empty_space_down2 = (event) => {
        if (!dropdownRef2.current.contains(event.target)) {
            setIsOpen2(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', empty_space_down2);
        return () => {
            document.removeEventListener('click', empty_space_down2);
        };
    }, []);


    const [isOpen3, setIsOpen3] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const dropdownRef3 = useRef(null);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);
        setIsDropdownOpen3(!isDropdownOpen3)

    };
    const empty_space_down3 = (event) => {
        if (!dropdownRef3.current.contains(event.target)) {
            setIsOpen3(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', empty_space_down3);
        return () => {
            document.removeEventListener('click', empty_space_down3);
        };
    }, []);

    const [isOpen4, setIsOpen4] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const dropdownRef4 = useRef(null);
    const dropdown4 = () => {
        setIsOpen4(!isOpen4);
        setIsDropdownOpen4(!isDropdownOpen4)

    };
    const empty_space_down4 = (event) => {
        if (!dropdownRef4.current.contains(event.target)) {
            setIsOpen4(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', empty_space_down4);
        return () => {
            document.removeEventListener('click', empty_space_down4);
        };
    }, []);




    const [activeCount, setactiveCount] = useState(0);
    const [inactiveCount, setinactiveCount] = useState(0);

    // Fetch data from node js
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:4000/user');
            const data = await response.json();

            // Modify the last updated date in a format
            const modifiedData = data.map((item) => {
                const date = new Date(item.last_updated_on);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const formattedDate = `${day}-${month}-${year}`;
                return { ...item, last_updated_on: formattedDate };
            });

            // Update active and inactive counts
            const activeCount = data.filter(item => item.device_status === 1).length;
            // const inactiveCount = data.filter(item => item.device_status === 0).length;
            const inactiveCount = data.filter(item => item.device_status !== 1).length;

            setactiveCount(activeCount);
            setinactiveCount(inactiveCount);

            setalldata(modifiedData);
        } catch (error) {
            console.log(error);
        }
    }

    const Editinactivedata = async (data) => {
        alert("inactivated")
        const devicestatus = "0";
        const body = { devicestatus };
        await fetch(`http://127.0.0.1:4000/user/${data.r_no}`, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    const Editactivedata = async (data) => {
        alert("activated")
        const devicestatus = "1";
        const body = { devicestatus };
        await fetch(`http://127.0.0.1:4000/user/${data.r_no}`, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    }
    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    //rotate the arrow in the device action
    const [rotatedIndex, setRotatedIndex] = useState(null);
    const [device_active, setdevice_active] = useState("");

    const handleIconClick = (index) => {
        const sts = document.getElementsByClassName('device_active')[index].innerHTML;
        if (sts === 'Active') {
            setdevice_active('Active')
        }
        if (sts === 'Inactive') {
            setdevice_active('Inactive')
        }
        if (rotatedIndex === index) {
            setRotatedIndex(null);
        } else {
            setRotatedIndex(index);
        }
    };



    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('1');

    const handleDivClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };
    //push input box to the page
    const handleButtonClick = () => {
        setShowInput(true);
    };
    const [showInput, setShowInput] = useState(false);


  //Navigate to Add Site Page
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/Add_site');
    }





    return (
        <div className='bar'>
            <div className='status-bar'>
                <div className="device_mangement_main_content">

                    <div className="device_management display-flex page_top_box box-shadow">
                        <span className='module_tittle '>Site Management</span>
                        <div className='status-btns display-flex'>
                            <div className='btn-loc active-loc display-flex '> <div style={{ fontSize: "20px" }}></div>Active</div>
                            <div className='btn-loc inactive-loc display-flex'><div style={{ fontSize: "20px" }}></div> Inactive</div>
                        </div>
                    </div>
                    <div className='filters display-flex' >
                        <div class="pagination display-flex" onClick={handleDivClick}>
                            <div className="focus-page">
                                <input

                                    type="number"
                                    value={text}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    autoFocus
                                    className='editable_input_box'
                                />

                            </div>
                            <div className="upcomming-pages">
                                of 20 pages
                            </div>
                        </div>
                        <div className='move_head' style={{ marginRight: '35%' }}>
                            <div className='filters1 display-flex'>
                               
                                <div class="dropdown-filter" ref={dropdownRef2}>
                                    <div class="device_filters" onClick={dropdown2}>
                                        <div className="device_name">
                                           Industry
                                        </div>
                                        <div className="dropdown_icon">
                                            <FontAwesomeIcon
                                                icon={isDropdownOpen2 ? faChevronDown : faChevronUp}
                                                className="dropdown-icon"
                                            />
                                        </div>
                                    </div>
                                    {isOpen2 && (
                                        <div className="dropdown_menu2 dashboard_dropdown-menu  dropdown-colors">
                                            <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">All</div></div>
                                                <hr className='hrs'></hr>
                                                <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Active</div></div>
                                                <hr className='hrs'></hr>
                                                <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">InActive</div></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div class="dropdown-filter" ref={dropdownRef3}>
                                    <div class="device_filters" onClick={dropdown3}>
                                        <div className="device_name">
                                            Company Name
                                        </div>
                                        <div className="dropdown_icon">
                                            <FontAwesomeIcon
                                                icon={isDropdownOpen3 ? faChevronDown : faChevronUp}
                                                className="dropdown-icon"
                                            />
                                        </div>
                                    </div>
                                    {isOpen3 && (
                                        <div className="dropdown_menu2 dashboard_dropdown-menu  dropdown-colors">
                                            <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">All</div></div>
                                                <hr className='hrs'></hr>
                                                <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Active</div></div>
                                                <hr className='hrs'></hr>
                                                <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">InActive</div></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        <div className='filters2 display-flex'>
                            <button className='btn btn-fill' onClick={handleclick} >Add Site</button>
                        </div>
                    </div>
                    <div className='col-headings'>
                        <div className="col-head">SITE ID</div>
                        <div className="col-head">SITE NAME</div>
                        <div className="col-head">INDUSTRY</div>
                        <div className="col-head">SITE CREATED ON</div>
                        <div className="col-head">SITE ADMIN</div>
                        <div className="col-head">SITE STATUS</div>
                        <div className="col-head">ACTION</div>
                    </div>
                </div>
                <div className='device_bottom'>
                    <div className='device_export cursor-pointer'>
                        <div className='device_exports'>Export</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Site_content;