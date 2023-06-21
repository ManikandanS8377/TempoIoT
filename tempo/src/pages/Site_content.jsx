import React from "react";
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

const Site_content = () => {
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
                        <span className='module_tittle '>Site Management</span>
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
                                    <div className="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors ">
                                        {alldata.map((data, index) => (
                                            <div className='device_scroll' key={index}>
                                                <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts"> {data.device_name}</div></div>
                                                    {index !== alldata.length - 1 && <hr className='hrs'></hr>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div class="dropdown-filter" ref={dropdownRef2}>
                                <button class="dropdown-toggle" onClick={dropdown2}>Industry</button>
                                {isOpen2 && (
                                    <div className="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors">
                                        <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 1</div></div>
                                            <hr className='hrs'></hr>
                                            <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 2</div></div>
                                            <hr className='hrs'></hr>
                                            <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 3</div></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div class="dropdown-filter" ref={dropdownRef3}>
                                <button class="dropdown-toggle" onClick={dropdown3}>Company Name</button>
                                {isOpen3 && (
                                    <div className="dropdown_menu2 dashboard_dropdown-menu  dropdown-colors">
                                        <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 1</div></div>
                                            <hr className='hrs'></hr>
                                            <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 2</div></div>
                                            <hr className='hrs'></hr>
                                            <div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts">Test 3</div></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                        </div>
                        <div className='filters2 display-flex'>
                            <button className='btn btn-fill'>Add Site</button>
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