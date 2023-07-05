import React from 'react';
import '../assets/style/App.css';

//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { person } from 'react-icons-kit/iconic/person'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ic_room } from 'react-icons-kit/md/ic_room'
import { map } from 'react-icons-kit/fa/map'
import { ic_mail } from 'react-icons-kit/md/ic_mail'
import { ic_home_work } from 'react-icons-kit/md/ic_home_work'
import { ic_domain } from 'react-icons-kit/md/ic_domain'
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { RiAddCircleLine } from "react-icons/ri";
import { faAnglesDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from "react";
import { json, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Edit_site = () => {
    const [responseData_state, set_responseData_state] = useState([])



    // set var

    const [company_name, setcompanyname] = useState("");
    const [site_name, setsitename] = useState("");
    const [site_admin_email, setsiteadminemail] = useState("");
    const [site_location, setsitelocation] = useState("");
    const [site_address, setsiteaddress] = useState("");
    const [new_site_admin_name, setnewsiteadminname] = useState("");
    const { r_no } = useParams();

    //  error

    const [company_nameerror, setcompanynameerror] = useState("");
    const [site_nameerror, setsitenameerror] = useState("");
    const [site_admin_emailerror, setsiteadminemailerror] = useState("");
    const [site_locationerror, setsitelocationerror] = useState("");
    const [site_addresserror, setsiteaddresserror] = useState("");
    const [new_site_admin_nameerror, setnewsiteadminnameerror] = useState("");

    //enable services checking state
    const [isChecked, setisChecked] = useState(true);
    const [checking, setchecking] = useState("true");
    // const [all_data, setall_data] = useState();
    useEffect(() => {
        const site_edit_data = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:4000/edit_site_detials/${r_no}`);
                const data = await response.json();
                console.log(data);
                // setall_data(data);
                all_data_fun(data);
            } catch (error) {
                console.error(error);
            }
        };
        site_edit_data();
    }, [r_no]);

    const all_data_fun = (data) => {
        if (data && data.length > 0) {
            const item = data[0];
            setcompanyname(item.company_name);
            setsitename(item.site_name);
            setsiteadminemail(item.site_admin_email);
            setsiteaddress(item.site_address);
        }
    };

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


    //push input box to the page
    const handleButtonClick = () => {
        setShowInput(true);
    };
    const [showInput, setShowInput] = useState(false);


    // cancel script

    function handleCancel() {
        setcompanyname("");
        setsitename("");
        setsiteadminemail("");
        setsitelocation("");
        setsiteaddress("");
        setnewsiteadminname("");
    }


    function handlecompanyname(event) {
        const value = event.target.value;
        setcompanyname(value);
    }

    function handlesitename(event) {
        const value = event.target.value;
        setsitename(value);
    }

    function handlesiteadminemail(event) {
        const value = event.target.value;
        setsiteadminemail(value);
    }

    function handlesitelocation(event) {
        const value = event.target.value;
        setsitelocation(value);
    }

    function handlesiteaddress(event) {
        const value = event.target.value;
        setsiteaddress(value);

    }

    function handlenewsiteadminname(event) {
        const value = event.target.value;
        setnewsiteadminname(value);
    }
    //redirect to device content page
    const navigate = useNavigate();

    // validation


    const handleClick = async () => {
        try {
            navigate('/Site');
            const queryParams = new URLSearchParams({
                company_name,
                site_name,
                site_admin_email,
                site_location,
                site_address,
                new_site_admin_name,
            });
    
            const url = `http://127.0.0.1:4000/edit_site_detail?${queryParams}`;
    
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            console.error(error);
        }
    };
    





    const [isOpen4, setIsOpen4] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const dropdownRef4 = useRef(null);
    const dropdown4 = () => {
        setIsOpen4(!isOpen4);
        setIsDropdownOpen4(!isDropdownOpen4)

    };
    const empty_space_down4 = (event) => {

    };

    useEffect(() => {
        document.addEventListener('click', empty_space_down4);
        return () => {
            document.removeEventListener('click', empty_space_down4);
        };
    }, []);





    return (

        <div className='Add_device1 '>

            <div className="page_top_box new_device box-shadow">
                {/* <button className="btn-loc theme-btn new_device_btn" >New Device</button> */}
            </div>

            <div className="add_device_container1">
                <div className="new_device_content">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Add Site Detials </div>
                    </div>
                    <div className="row_two display-flex padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                            site info
                        </div>
                        <div className="input-boxes display-flex">
                            <div class="dsa_row_1">
                                <div class="dsa_1st_input">
                                    <label for="input1">Company Name</label>
                                    <div class="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_home_work} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={company_name} onChange={handlecompanyname} id="company_name" />
                                    </div>
                                </div>
                            </div>

                            <div className="dsa_2nd_input">
                                <label for="input1">Site Name</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc"><Icon icon={ic_domain} size={20} style={{ color: "lightgray" }} /></span>
                                    <input type="text" class="form-control-loc" value={site_name} onChange={handlesitename} id="site_name" />
                                </div>
                            </div>
                            <div className="dsa_2nd_input">
                                <label htmlFor="input1">Site Admin Email</label>
                                <div className="inputs-group">
                                    <span className="input-group-loc">
                                        <Icon icon={ic_mail} size={20} style={{ color: "lightgray" }} />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control-loc"
                                        value={site_admin_email}
                                        onChange={handlesiteadminemail}
                                        id="site_admin_email"
                                        readOnly
                                    />
                                </div>
                            </div>


                            <div className="dsa_row_3">
                                <div className="dsa_3rd_input">
                                    <label for="input1">Site Location</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_room} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={site_location} onChange={handlesitelocation} id="site_location" />
                                    </div>
                                </div>

                                <div className="dsa_3rd_input">
                                    <label for="input1">Site Address</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={site_address} onChange={handlesiteaddress} id="site_address" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row_three display-flex padding-loc">
                        <div className="mqtt_protocol display-flex">
                            <div className="network_protocol light-grey uppercase mb-loc-5 mt-loc-3">Site Admin info</div>

                        </div>
                        <div className="sub_row_three display-flex">

                            <div class="dropdown-filter">
                                <div onClick={dropdown4}>
                                    <div class="dsa_1st_input">
                                        <label for="input1">Site Admin Name</label>
                                        <div class="inputs-group relative-loc">
                                            <span class="input-group-loc"><Icon icon={person} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" id="site_admin_name" />
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                // icon={isDropdownOpen4 ? faChevronDown : faChevronUp}
                                                class="dropdown-icon down_arrow"
                                            />
                                        </div>
                                    </div>
                                    {isOpen4 && (
                                        <div class="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors">
                                            <div className='device_scroll'>
                                                <div class='device_dropdown'>
                                                    <div class="div_sts" onClick={handleButtonClick}>
                                                        Add New Admin
                                                    </div>
                                                </div>
                                                <hr className="hrs"></hr>
                                                {responseData_state.map((data, index) => (
                                                    <div className='device_scroll' key={index}>
                                                        <div><div className='device_dropdown'><input className='device_sts_checkbox' type="checkbox" /><div className="div_sts"> {data.new_site_admin_name}</div></div>
                                                            {index !== data.length - 1 && <hr className='hrs'></hr>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                            <div className='dsa_row_3'>
                                {showInput && (
                                    <div class="dsa_row4">
                                        <div class="dsa_1st_input">
                                            <label htmlFor="input1">New Site Admin Name</label>
                                            <div class="inputs-group">
                                                <span class="input-group-loc">
                                                    {/* Assuming you have imported the Icon component */}
                                                    <Icon icon={person} size={20} style={{ color: "lightgray" }} />
                                                </span>
                                                <input type="text" class="form-control-loc" value={new_site_admin_name} onChange={handlenewsiteadminname} id="new_site_admin_name" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="save_cancel_btn display-flex site_button">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={() => handleClick()}>Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger"onClick={() => handleCancel()} data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Edit_site; 