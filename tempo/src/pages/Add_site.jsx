import React from 'react';
import '../assets/style/App.css';


//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { RiAddCircleLine } from "react-icons/ri";
import { faAnglesDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from "react";
import { json, useNavigate } from 'react-router-dom';
const Add_site = () => {

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

    //push input box to the page
    const handleButtonClick = () => {
        setShowInput(true);
    };
    const [showInput, setShowInput] = useState(false);



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
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>
                            </div>

                            <div className="dsa_2nd_input">
                                <label for="input1">Site Name</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>
                            <div className="dsa_2nd_input">
                                <label for="input1">Site Admin Email</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>

                            <div className="dsa_row_3">
                                <div className="dsa_3rd_input">
                                    <label for="input1">Site Location</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
                                    </div>
                                </div>

                                <div className="dsa_3rd_input">
                                    <label for="input1">Site Address</label>
                                    <div className="inputs-group">
                                        <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" id="input1" />
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
                                            <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" id="input1" />
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                // icon={isDropdownOpen4 ? faChevronDown : faChevronUp}
                                                class="dropdown-icon down_arrow"
                                            />
                                        </div>
                                    </div>
                                    {isOpen4 && (
                                        <div class="dropdown_menu2 dashboard_dropdown-menu  dropdown-colors">
                                            <div>
                                                <div class='device_dropdown'>
                                                    <div class="div_sts" onClick={handleButtonClick}>
                                                        Add New Admin
                                                    </div>

                                                </div>
                                                <hr className="hrs"></hr>
                                                <div className="device_dropdown">
                                                    <div className="div_sts">Manikandan S</div>
                                                </div>
                                                <hr className="hrs"></hr>
                                                <div className="device_dropdown">
                                                    <div className="div_sts">Naveen Kumar P</div>
                                                </div>
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
                                                    <Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} />
                                                </span>
                                                <input type="text" class="form-control-loc" id="input1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="save_cancel_btn display-flex site_button">
                            <button className="btn-loc active-loc btn btn-outline-success">Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    );
};
export default Add_site;