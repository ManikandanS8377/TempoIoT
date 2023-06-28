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

     //functions to set the device status avtive and inactive
     const  Editinactivedata=async(data)=>{
        const site_status="0";
        const body={site_status};
        await fetch(`http://127.0.0.1:4000/sitedata/${data.r_no}`,{
            method:"PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    const Editactivedata=async(data)=>{

        const site_status="1";
        const body={site_status};
        await fetch(`http://127.0.0.1:4000/sitedata/${data.r_no}`,{
            method:"PUT",
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

    const [responseData_state,set_responseData_state] = useState([])
    // data fetching in site db 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const sites = await fetch('http://127.0.0.1:4000/site');
                const responseData = await sites.json();
                set_responseData_state(responseData)
                console.log(responseData);
            } catch (error) {
                // Error handling code removed
            }
        };

        fetchData();
    }, []);





    // industry
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


// company
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


    // admin dropdown
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
            const response = await fetch('http://127.0.0.1:4000/site');
            const data = await response.json();

            // Update active and inactive counts

            const activeCount = data.filter(item => item.site_status === 1).length;
            const inactiveCount = data.filter(item => item.device_status === 0).length;
            // const inactiveCount = data.filter(item => item.site_status !== 1).length;

            setactiveCount(activeCount);
            setinactiveCount(inactiveCount);

        } catch (error) {
            console.log(error);
        }
    }


    //rotate the arrow in the device action
    const [rotatedIndex, setRotatedIndex] = useState(null);
    const [site_active, setsite_active] = useState("");

    const handleIconClick = (index) => {
        const sts = document.getElementsByClassName('device_active')[index].innerHTML;
        if (sts === 'Active') {
            setsite_active('Active')
        }
        if (sts === 'Inactive') {
            setsite_active('Inactive')
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
                            <div className='btn-loc active-loc display-flex '> <div style={{ fontSize: "20px" }}>{activeCount}&nbsp;</div>Active</div>
                            <div className='btn-loc inactive-loc display-flex'><div style={{ fontSize: "20px" }}>{inactiveCount}&nbsp;</div> Inactive</div>
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
                                        <div className="dropdown_menu2 dashboard_dropdown-menu heights  dropdown-colors">
                                            {responseData_state.map((item,index) => (
                                            <div className='device_scroll' key={index}>
                                                <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts"> {item.company_name}</div></div>
                                                    {index !== item.length - 1 && <hr className='hrs'></hr>}
                                                </div>
                                            </div>
                                        ))}
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
                    {responseData_state.map((data, index) => (
                        <div className="datas">
                            <div className="col-head" >Site ID</div>
                            <div className="col-head" key={index}>{data.site_name}</div>
                            <div className="col-head">Industry</div>
                            <div className="col-head" key={index}>{data.site_created_on}</div>
                            <div className="col-head" key={index}>{data.new_site_admin_name}</div>

                            <div className="col-head display-flex">
                                <FontAwesomeIcon icon={faDiamond} style={{ color: data.site_status === 1 ? 'green' : 'red', paddingTop: '7px' }} size="xs" />
                                <div className={`device_active`} style={{ color: data.site_status === 1 ? 'green' : 'red' }}>{data.site_status === 1 ? 'Active' : 'Inactive'}</div>
                            </div>

                            <div className="col-head display-flex device_action_dropdown_parent">
                                <div className="sts_icon" onClick={() => handleIconClick(index)}>
                                    <Icon icon={ic_label_important} style={{ transform: rotatedIndex === index ? 'rotate(90deg)' : 'rotate(0)', color: rotatedIndex === index ? '#08c6cd' : 'lightgray', }} className='device_content_arrow' size={25} />
                                </div>
                                <div key={index}>{(rotatedIndex === index && site_active == 'Active') &&
                                    (<div className='device_action_dropdown'>
                                        <div className='display-flex device_action_dropdown1 dropdown_action'>
                                            <FontAwesomeIcon className='device_content_arrows' icon={faAnglesDown} size='lg' />
                                            <div className='device_content_dropdown display-flex' data-bs-toggle="modal" data-bs-target="#device_status_action">Edit Detials</div>
                                        </div>
                                        <div className='display-flex device_action_dropdown2 dropdown_action'>
                                            <FontAwesomeIcon icon={faAnglesDown} className='device_content_arrows' size='lg' />
                                            <div className='device_content_dropdown display-flex' onClick={() => { Editinactivedata(data) }}>Inactivate Device</div>
                                        </div>
                                    </div>)}
                                </div>
                                <div key={index}>{(rotatedIndex === index && site_active == 'Inactive') &&
                                    (<div className='device_action_dropdown'>
                                        <div className='display-flex device_action_dropdown1 dropdown_action'>
                                            <FontAwesomeIcon className='device_content_arrows' icon={faAnglesDown} size='lg' />
                                            <div className='device_content_dropdown display-flex' data-bs-toggle="modal" data-bs-target="#device_status_action">Device Details</div>
                                        </div>
                                        <div className='display-flex device_action_dropdown2 dropdown_action'>
                                            <FontAwesomeIcon icon={faAnglesDown} className='device_content_arrows' size='lg' />
                                            <div className='device_content_dropdown display-flex' onClick={() => { Editactivedata(data) }}>Activate Device</div>
                                        </div>
                                    </div>)}
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
        </div>
    );
};

export default Site_content;