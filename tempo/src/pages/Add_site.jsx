import React from 'react';
import '../assets/style/App.css';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { person } from 'react-icons-kit/iconic/person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ic_room } from 'react-icons-kit/md/ic_room';
import { map } from 'react-icons-kit/fa/map';
import { ic_mail } from 'react-icons-kit/md/ic_mail';
import { ic_home_work } from 'react-icons-kit/md/ic_home_work';
import { ic_domain } from 'react-icons-kit/md/ic_domain';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




const Add_site = () => {
    const [admin_value, setadmin] = useState([]);
    // set var

    const [company_name, setcompanyname] = useState("");
    const [site_name, setsitename] = useState("");
    const [site_admin_email, setsiteadminemail] = useState("");
    const [site_location, setsitelocation] = useState("");
    const [site_address, setsiteaddress] = useState("");
    const [new_site_admin_name, setnewsiteadminname] = useState("");
    const [site_admin,setsite_admin]=useState("")


    //  error
    const [company_nameerror, setcompanynameerror] = useState("");
    const [site_nameerror, setsitenameerror] = useState("");
    const [site_admin_emailerror, setsiteadminemailerror] = useState("");
    const [site_locationerror, setsitelocationerror] = useState("");
    const [site_addresserror, setsiteaddresserror] = useState("");
    const [new_site_admin_nameerror, setnewsiteadminnameerror] = useState("");
    const [site_admin_nameerror, setsiteadminnameerror] = useState("");

    // data fetching in site db 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response_admin = await fetch('http://127.0.0.1:4000/site_admin');
                const data_admin = await response_admin.json();
                console.log(data_admin)
                setadmin(data_admin);
            } catch (error) {
                console.log(error)
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
        setsite_admin("");
        navigate('/Site');
    }

    function handlecompanyname(event) {
        const value = event.target.value;
        setcompanyname(value);
        const isValidcompany_name = /^[a-zA-Z]+$/.test(value);
        if (!isValidcompany_name) {
            setcompanynameerror("*Enter valid company name");
        } else {
            setcompanynameerror("");
        }
    }

    function handlesitename(event) {
        const value = event.target.value;
        setsitename(value);
        const isValidsite_name = /^[a-zA-Z0-9]+$/.test(value);
        if (!isValidsite_name) {
            setsitenameerror("*Enter valid site name");
        } else {
            setsitenameerror("");
        }
    }

    function handlesiteadminemail(event) {
        const value = event.target.value;
        setsiteadminemail(value);
        const isValidsite_admin_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValidsite_admin_email) {
            setsiteadminemailerror("*Enter valid email");
        } else {
            setsiteadminemailerror("");
        }
    }

    function handlesitelocation(event) {
        const value = event.target.value;
        setsitelocation(value);
        const isValidsite_location =  /^[a-zA-Z0-9\s\/\,\.\'-]+$/i.test(value);
        if (!isValidsite_location) {
            setsitelocationerror("*Enter valid location");
        } else {
            setsitelocationerror("");
        }
    }

    function handlesiteaddress(event) {
        const value = event.target.value;
        setsiteaddress(value);
        const isValidsite_address =  /^[a-zA-Z0-9\s\/\,\.\'-]+$/i.test(value);
        if (!isValidsite_address) {
            setsiteaddresserror("*Enter valid site address");
        } else {
            setsiteaddresserror("");
        }
    }
    

    function handlenewsiteadminname(event) {
        const value = event.target.value;
        setnewsiteadminname(value);
        const isValidnew_site_admin_name = /^[a-zA-Z]+$/.test(value);
        if (!isValidnew_site_admin_name) {
            setnewsiteadminnameerror("*Enter valid admin name");
        } else {
            setnewsiteadminnameerror("");
        }
    }
    function handlesiteadmin(event) {
        const value = event.target.value;
        setsite_admin(value);
        const isValidnew_site_admin_name = /^[0-9]+$/.test(value);
        if (!isValidnew_site_admin_name) {
            setsiteadminnameerror("*Enter valid new admin name");
        } else {
            setsiteadminnameerror("");
        }
    }


    //redirect to device content page
    const navigate = useNavigate();

    // validation
    const handleClick = async () => {

        const isValidcompany_name = /^[0-9]+$/.test(company_name)
        const isValidsite_name = /^[a-zA-Z0-9]+$/.test(site_name)
        const isValidsite_admin_email = /^[a-zA-Z0-9]+$/.test(site_admin_email)
        const isValidsite_location = /^[0-9a-zA-Z]{2}([-:_])[0-9a-zA-Z]{2}(\1[0-9a-zA-Z]{2}){4}$/.test(site_location)
        const isValidsite_address = /^[a-zA-Z0-9]+$/.test(site_address)
        const isValidnew_site_admin_name = /^[a-zA-Z0-9]+$/.test(new_site_admin_name)
        const isValidsite_admin = /^[0-9a-zA-Z./,:\\-]+$/.test(site_admin)
        if (!isValidcompany_name || !isValidsite_name || !isValidsite_admin_email || !isValidsite_location || !isValidsite_address || !isValidnew_site_admin_name || !isValidsite_admin) {
            alert("Enter the valid data ")
        }

        else{
            const body = {
                company_name,
                site_name,
                site_admin_email,
                site_location,
                site_address,
                new_site_admin_name,
            };
            fetch('http://127.0.0.1:4000/site', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            navigate('/Site');
        }
    }



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

    const handlesiteadminname=(data)=>{
        setsite_admin(data.new_site_admin_name)
        setnewsiteadminname(data.new_site_admin_name)
        setsiteadminemail(data.site_admin_email)
        setShowInput(true);
    }




    return (
        <div className='Add_device1 '>
            <div className="modal fade boot-modals" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content width_of_model">
                        <div className="modal-header-confirm">
                            <h5 className="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                        </div>
                        <div className="modal-main-confirm">
                            <h5 className="modal-title confirm-tittle">Are you sure you want Exit ?
                            </h5>
                        </div>
                        <div className="modal-footer-confirm">
                            <button type="button" className="btn-loc active-loc" data-bs-dismiss="modal" onClick={handleCancel} >YES</button>
                            <button type="button" className="btn-loc inactive-loc" data-bs-dismiss="modal">NO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page_top_box new_device box-shadow">
                <div className='module_tittle' style={{ textAlign: "start" }}>Site Management</div>
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
                            <div class="dsa_row_1 inputbox display-flex input">
                                <div class="dsa_1st_input">
                                    <label for="input1">Company Name</label>
                                    <div class="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={ic_home_work} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={company_name} onChange={handlecompanyname} id="company_name" />
                                        <div className="error-message"><span className={company_nameerror ? "error" : ""}>{company_nameerror}</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="dsa_2nd_input inputbox display-flex input">
                                <label for="input1">Site Name</label>
                                <div className="inputs-group display-flex">
                                    <span class="input-group-loc"><Icon icon={ic_domain} size={20} style={{ color: "lightgray" }} /></span>
                                    <input type="text" class="form-control-loc" value={site_name} onChange={handlesitename} id="site_name" />
                                    <div className="error-message"><span className={site_nameerror ? "error" : ""}>{site_nameerror}</span></div>
                                </div>
                            </div>
                            <div className="dsa_row_3 ">
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Site Location</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={ic_room} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={site_location} onChange={handlesitelocation} id="site_location" />
                                        <div className="error-message"><span className={site_locationerror ? "error" : ""}>{site_locationerror}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Site Address</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={site_address} onChange={handlesiteaddress} id="site_address" />
                                        <div className="error-message"><span className={site_addresserror ? "error" : ""}>{site_addresserror}</span></div>
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
                                <div>
                                    <div class="dsa_1st_input">
                                        <label for="input1">Site Admin Name</label>
                                        <div class="inputs-group relative-loc" onClick={dropdown4} >
                                            <span class="input-group-loc"><Icon icon={person} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" id="site_admin_name" value={site_admin} />
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
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
                                                {admin_value.map((data, index) => (
                                                    <div className='device_scroll' key={index}>
                                                        <div><div className='device_dropdown' onClick={()=>handlesiteadminname(data)}><div className="div_sts"> {data.new_site_admin_name}</div></div>
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
                                    <div class="dsa_row1">
                                        <div class="dsa_1st_input inputbox display-flex input">
                                            <label htmlFor="input1">New Site Admin Name</label>
                                            <div class="inputs-group display-flex">
                                                <span class="input-group-loc">
                                                    <Icon icon={person} size={20} style={{ color: "lightgray" }} />
                                                </span>
                                                <input type="text" class="form-control-loc" value={new_site_admin_name} onChange={handlenewsiteadminname} id="new_site_admin_name" />
                                                <div className="error-message"><span className={new_site_admin_nameerror ? "error" : ""}>{new_site_admin_nameerror}</span></div>
                                            </div>
                                        </div>
                                        <div className="dsa_2nd_input inputbox display-flex input">
                                            <label for="input1">Site Admin Email</label>
                                            <div className="inputs-group display-flex">
                                                <span class="input-group-loc"><Icon icon={ic_mail} size={20} style={{ color: "lightgray" }} /></span>
                                                <input type="text" class="form-control-loc" value={site_admin_email} onChange={handlesiteadminemail} id="site_admin_email" />
                                                <div className="error-message"><span className={site_admin_emailerror ? "error" : ""}>{site_admin_emailerror}</span></div>
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
                            <button className="btn-loc inactive-loc btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Add_site;