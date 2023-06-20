import React from 'react';
import '../assets/style/App.css';

//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from "react";
import { json, useNavigate } from 'react-router-dom';


const Device_content = () => {
    const [alldata, setalldata] = useState([]);
    const [isOpen1, setIsOpen1] = useState(false);
    const dropdownRef1 = useRef(null);
    const dropdown1 = () => {
        setIsOpen1(!isOpen1);
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
    const dropdownRef2 = useRef(null);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
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
    const dropdownRef3 = useRef(null);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);

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
    const dropdownRef4 = useRef(null);
    const dropdown4 = () => {
        setIsOpen4(!isOpen4);
    };
    const empty_space_down4 = (event) => {
        if (!dropdownRef4.current.contains(event.target)) {
            setIsOpen4(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", empty_space_down4);
        return () => {
            document.removeEventListener("click", empty_space_down4);
        }
    }, [])

    //Navigate to Add Device Page
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/Add_device');
    }


    //Fetch data from node js
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:4000/user')
            const data = await response.json();
            //modify the last updated date in a format
            const modifiedData = data.map((item) => {
                const date = new Date(item.last_updated_on);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();

                const formattedDate = `${day}-${month}-${year}`;
                return { ...item, last_updated_on: formattedDate };
            });

            setalldata(modifiedData);
        } catch (error) {
            console.log(error);
        }
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
    const handleIconClick = (index) => {
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




    return (
        <div className='bar'>
            <div className='status-bar'>
                <div className="device_mangement_main_content">
                    <div className="device_management display-flex page_top_box box-shadow">
                        <span className='module_tittle '>Device Management</span>
                        <div className='status-btns display-flex'>
                            <div className='btn-loc active-loc display-flex'><div style={{fontSize:"20px",marginTop:"-5px"}}>0 </div>Active</div>
                            <div className='btn-loc inactive-loc display-flex'><div style={{fontSize:"20px",marginTop:"-5px"}}>0</div> Inactive</div>
                        </div>
                    </div>
                    <div className='filters display-flex' >
                        <div class="pagination display-flex" onClick={handleDivClick}>
                            <div className="focus-page">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        autoFocus
                                        className='editable_input_box'
                                    />
                                ) : (
                                    <div>{text}</div>
                                )}
                            </div>
                            <div className="upcomming-pages">
                                of 20 pages
                            </div>

                        </div>
                        <div className='filters1 display-flex'>
                            <div class="dropdown-filter" ref={dropdownRef1}>
                                <button class="dropdown-toggle" onClick={dropdown1}>Device Name</button>
                                {isOpen1 && (

                                    <div className="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors">
                                        {alldata.map((data, index) => (
                                            <div className='device_scroll'><div className='device_dropdown'>{data.device_name}</div>
                                                {index !== alldata.length - 1 && <hr className='hrs'></hr>}
                                            </div>
                                        ))}
                                    </div>

                                )}
                            </div>
                            <div class="dropdown-filter" ref={dropdownRef2}>
                                <button class="dropdown-toggle" onClick={dropdown2}>Device Model</button>
                                {isOpen2 && (
                                    <div className="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors">
                                        {alldata.map((data, index) => (
                                            <div><div className='device_dropdown'>{data.device_model}</div>
                                                {index !== alldata.length - 1 && <hr className='hrs'></hr>}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div class="dropdown-filter" ref={dropdownRef3}>
                                <button class="dropdown-toggle" onClick={dropdown3}>Device Status</button>
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
                            <div class="dropdown-filter" ref={dropdownRef4}>
                                <button class="dropdown-toggle" onClick={dropdown4}>Device Installed On</button>
                                {isOpen4 && (
                                    <div className="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors">
                                        {alldata.map((data, index) => (
                                            <div><div className='device_dropdown'>{data.last_updated_on}</div>
                                                {index !== alldata.length - 1 && <hr className='hrs'></hr>}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='filters2 display-flex'>
                            <button className='btn btn-fill' onClick={handleclick} >Add Device</button>
                        </div>
                    </div>
                    <div className='col-headings'>
                        <div className="col-head">Device Id</div>
                        <div className="col-head">Device Name</div>
                        <div className="col-head">Device Model</div>
                        <div className="col-head">Device installed on</div>
                        <div className="col-head">Device installed by</div>
                        <div className="col-head">Device status</div>
                        <div className="col-head">Device action</div>
                    </div>
                    {alldata.map((data, index) => (
                        <div className="datas">
                            <div className="col-head" key={index}>{data.device_id}</div>
                            <div className="col-head" key={index}>{data.device_name}</div>
                            <div className="col-head" key={index}>{data.device_model}</div>
                            <div className="col-head" key={index}>{data.last_updated_on}</div>
                            <div className="col-head">ritchard</div>
                            <div className="col-head display-flex">
                                <FontAwesomeIcon icon={faDiamond} style={{ color: "green", paddingTop: "7px" }} size='xs' />
                                <div className='device_active'>Active</div>
                            </div>
                            <div className="col-head display-flex">
                                <Icon icon={ic_label_important} onClick={() => handleIconClick(index)} style={{ transform: rotatedIndex === index ? 'rotate(90deg)' : 'rotate(0)', color: rotatedIndex === index ? '#08c6cd' : 'lightgray', }} className='device_content_arrow' size={30} />
                                <div key={index}>{rotatedIndex === index &&
                                    <div className='device_action_dropdown'>
                                        <div className='display-flex device_action_dropdown1'>
                                            <FontAwesomeIcon className='device_content_arrows' icon={faAnglesDown} size='lg' />
                                            <div className='device_content_dropdown display-flex'>Device Details</div>
                                        </div>
                                        <div className='display-flex device_action_dropdown2'>
                                            <FontAwesomeIcon icon={faAnglesDown} className='device_content_arrows' size='lg' />
                                            <div className='device_content_dropdown display-flex'>Activate Device</div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='device_bottom'>
                    <div className='device_export cursor-pointer'>
                        <div className='device_exports'>Export</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Device_content;