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


    // const
    const [alldata, setalldata] = useState([]);
    const [company_value, setcompany] = useState([]);
  
    const [activeCount, setactiveCount] = useState(0);
    const [inactiveCount, setinactiveCount] = useState(0);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const dropdownRef3 = useRef(null);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const dropdownRef4 = useRef(null);

    //functions to set the device status avtive and inactive
    const Editinactivedata = async (data) => {
        const site_status = "0";
        const body = { site_status };
        await fetch(`http://127.0.0.1:4000/sitedata/${data.r_no}`, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    const Editactivedata = async (data) => {

        const site_status = "1";
        const body = { site_status };
        await fetch(`http://127.0.0.1:4000/sitedata/${data.r_no}`, {
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


    // Fetch data from node js
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:4000/site');
            const response_company = await fetch('http://127.0.0.1:4000/site_company');
           
            const data_company = await response_company.json();
           
            const data = await response.json();
            const modifiedData = data.map((item) => {
                const date = new Date(item.site_created_on);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const formattedDate = `${day}-${month}-${year}`;
                return { ...item, site_created_on: formattedDate };
            });

            // Update active and inactive counts
            const activeCount = data.filter(item => item.site_status === 1).length;
            const inactiveCount = data.filter(item => item.site_status !== 1).length;

            setalldata(modifiedData);
            setactiveCount(activeCount);
            setinactiveCount(inactiveCount);
            setcompany(data_company);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);





    const [isless_than_10_active, setisless_than_10_active] = useState(false)
    const [isgreater_than_10_inactive, setisgreater_than_10_inactive] = useState(false)
    console.log(activeCount);
    useEffect(() => {
        if (activeCount < 10) {
            setisless_than_10_active(true)
            console.log("t");

        }
        else {
            setisless_than_10_active(false);
            console.log("hai");
        }
        if (inactiveCount < 10) {
            setisgreater_than_10_inactive(true)
        }
        else {
            setisgreater_than_10_inactive(false);
        }
    },[])


    const site_edit_page = async (data) => {
        // alert("hai");
        navigate(`/edit_site/${data.r_no}`);
    }


    // industry

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
                            <div className='btn-loc active-loc display-flex '> <div style={{ fontSize: "20px" }}>{setisless_than_10_active ? `0${activeCount}` : `${activeCount}`}&nbsp;</div>Active</div>
                            <div className='btn-loc inactive-loc display-flex'><div style={{ fontSize: "20px" }}>{isgreater_than_10_inactive ? `0${inactiveCount}` : `${inactiveCount}`}&nbsp;</div> Inactive</div>
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
                                            Industry Name
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
                                            {company_value.map((item, index) => (
                                                <div className='device_scroll'>
                                                    <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts"> {item.company_name}</div></div>
                                                        {index !== alldata.length - 1 && <hr className='hrs'></hr>}
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
                    {alldata.map((data, index) => (
                        <div className="datas">
                            <div className="col-head" >Site ID</div>
                            <div className="col-head" key={index}>{data.site_name}</div>
                            <div className="col-head">Industry</div>
                            <div className="col-head" key={index}>{data.site_created_on}</div>

                            <div className="col-head" key={index}>{data.new_site_admin_name}</div>

                            <div className="col-head display-flex">
                                <FontAwesomeIcon
                                    icon={faDiamond}
                                    style={{ color: data.site_status == 1 ? 'green' : 'red', paddingTop: '7px' }}
                                    size="xs"
                                />
                                <div className={`device_active`} style={{ color: data.site_status === 1 ? 'green' : 'red' }}>
                                    {data.site_status == 1 ? 'Active' : 'Inactive'}
                                </div>
                            </div>


                            <div className="col-head display-flex device_action_dropdown_parent">
                                <div className="sts_icon" onClick={() => handleIconClick(index)}>
                                    <Icon icon={ic_label_important} style={{ transform: rotatedIndex === index ? 'rotate(90deg)' : 'rotate(0)', color: rotatedIndex === index ? '#08c6cd' : 'lightgray', }} className='device_content_arrow' size={25} />
                                </div>
                                <div key={index}>{(rotatedIndex === index && site_active == 'Active') &&
                                    (<div className='device_action_dropdown'>
                                        <div className='display-flex device_action_dropdown1 dropdown_action'>
                                            <FontAwesomeIcon className='device_content_arrows' icon={faAnglesDown} size='lg' />
                                            <div className='device_content_dropdown display-flex'onClick={() => site_edit_page(data)}>Edit Detials</div>
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
                                            <div className='device_content_dropdown display-flex' data-bs-toggle="modal" data-bs-target="#device_status_action">Site Details</div>
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
            {/* Edit Device detials */}
            <div class="modal fade device_status_action" id="device_status_action" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="device_status_header">
                            <h5 class="modal-title" id="exampleModalLabel">SITE DETAILS
                            </h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="device_status_body">
                            <div className="dsa_row1">
                                <div className="dsa_1st_input">
                                    <label for="input1">Company Name</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                                <div className="dsa_1st_input">
                                    <label for="input1">Site Name</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                            </div>   
                            <div className="dsa_row2">
                                <div className="dsa_1st_input">
                                    <label for="input1">Site Admin Email</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                                <div className="dsa_1st_input">
                                    <label for="input1">Site location</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                            </div>
                            <div className="dsa_row3">
                                <div className="dsa_1st_input">
                                    <label for="input1">Site Address</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                                <div className="dsa_1st_input">
                                    <label for="input1">Site Admin Name</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                            </div>         
                        </div>
                        <div class="device_status_footer">
                            <button type="button" class="btn-loc active-loc dsa_save_btn">Save</button>
                            <button type="button" class="btn-loc inactive-loc" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Site_content;