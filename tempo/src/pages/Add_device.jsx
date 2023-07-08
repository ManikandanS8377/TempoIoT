import React from "react";
import { useState } from "react";
// import add_new_div from "../Functions/Add_new_div";
import { RiAddCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Add_device = () => {

    const [adddevice, setadddevice] = useState(false);
    const [divs, setDivs] = useState([]);
    const [inputCount, setInputCount] = useState(1);
    const [inputList, setInputList] = useState([]);
    //states to use their values and validate
    const [clientid, setclientid] = useState("");
    const [devicename, setdevicename] = useState("");
    const [devicemodel, setdevicemodel] = useState("");
    const [devicemacaddress, setdevicemacaddress] = useState("");
    const [firmwareversion, setfirmwareversion] = useState("");
    const [clientname, setclientname] = useState("");
    const [host, sethost] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [parameter, setparameter] = useState("");
    const [datatype, setdatatype] = useState("");
    const [topicname, settopicname] = useState("");

    //error
    const [clientidError, setclientidError] = useState("");
    const [devicenameerror, setdevicenameerror] = useState("");
    const [devicemodelerror, setdevicemodelerror] = useState("");
    const [devicemacaddresserror, setdevicemacaddresserror] = useState("");
    const [firmwareversionerror, setfirmwareversionerror] = useState("");
    const [clientnameerror, setclientnameerror] = useState("");
    const [hosterror, sethosterror] = useState("");
    const [usernameerror, setusernameerror] = useState("");
    const [passworderror, setpassworderror] = useState("");
    const [parametererror, setparametererror] = useState("");
    const [datatypeerror, setdatatypeerror] = useState("");
    const [topicnameerror, settopicnameerror] = useState("");

    //enable services checking state
    const [isChecked, setisChecked] = useState(true);
    const [checking, setchecking] = useState("true")

    let concatenatedValues = '';

    //redirect to device content page
    const navigate = useNavigate();

    //function to set the value to state

    function handleclientid(event) {
        const value = event.target.value;
        setclientid(value);

        const isValid = /^[0-9]+$/.test(value);
        if (!isValid) {
            setclientidError("*Enter valid client ID");
        } else {
            setclientidError("");
        }
    }
    
    function handledevicename(event) {
        const value = event.target.value
        setdevicename(value)
        const isValiddevicename = /^[a-zA-Z0-9]+$/.test(value)
        if (!isValiddevicename) {
            setdevicenameerror("*Enter valid device name")
        }
        else {
            setdevicenameerror("");
        }

    }
    function handledevicemodel(event) {
        const value = event.target.value;
        setdevicemodel(value)
        const isValiddevicemodel = /^[a-zA-Z0-9]+$/.test(value)
        if (!isValiddevicemodel) {
            setdevicemodelerror("*Enter Valid Model")
        }
        else {
            setdevicemodelerror("")
        }

    }
    function handledevicemacaddress(event) {
        const value = event.target.value;
        setdevicemacaddress(value);
        const isValidmacaddress = /^[0-9a-zA-Z]{2}([-:_])[0-9a-zA-Z]{2}(\1[0-9a-zA-Z]{2}){4}$/.test(value)
        if (!isValidmacaddress) {
            setdevicemacaddresserror("*Enter Valid MacAddress")
        } else {
            setdevicemacaddresserror("");
        }

    }
    function handlefirmwareversion(event) {
        const value = event.target.value;
        setfirmwareversion(value)
        const isValidfirmwareversion = /^[a-zA-Z0-9]+$/.test(value)
        if (!isValidfirmwareversion) {
            setfirmwareversionerror("*Enter valid firmware version")
        } else {
            setfirmwareversionerror("")
        }
    }
    function handleclientname(event) {
        const value = event.target.value;
        setclientname(value)
        const isValidclientname = /^[a-zA-Z0-9]+$/.test(value)
        if (!isValidclientname) {
            setclientnameerror("*Enter valid clientname")
        } else {
            setclientnameerror("")
        }

    }
    function handlehost(event) {
        const value = event.target.value;
        sethost(value)
        const isValidhost = /^[0-9a-zA-Z./,:\\-]+$/.test(value)
        if (!isValidhost) {
            sethosterror("*Enter valid host")
        } else {
            sethosterror("")
        }
    }
    function handleusername(event) {
        const value = event.target.value;
        setusername(value)
        const isValidusername = /^[a-zA-Z0-9]+$/.test(value)
        if (!isValidusername) {
            setusernameerror("*Enter valid username")
        } else {
            setusernameerror("")
        }


    }
    function handlepassword(event) {
        const value = event.target.value;
        setpassword(value)
        const isValidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(value);
        if (!isValidpassword) {
            setpassworderror("*Enter valid password")
        } else {
            setpassworderror("")
        }
    }
    function handletopicname(event) {
        const value = event.target.value;
        settopicname(value)
        const isValidtopicname = /^[0-9a-zA-Z]+$/.test(value)
        if (!isValidtopicname) {
            settopicnameerror("*Enter valid topicname")
        } else {
            settopicnameerror("")
        }
    }
    function handleparameter(event) {
        const value = event.target.value;
        setparameter(value)
        const isValidparameter = /^[0-9a-zA-Z]+$/.test(value)
        if (!isValidparameter) {
            setparametererror("*Enter valid parameter")
        } else {
            setparametererror("")
        }
    }
    function handledatatype(event) {
        const value = event.target.value;
        setdatatype(value)
        const isValiddatatype = /^[a-zA-Z]+$/.test(value)
        if (!isValiddatatype) {
            setdatatypeerror("*Enter valid datatype")
        } else {
            setdatatypeerror("")
        }

    }


    //on click cancel

    function handleCancel() {
        setclientid("");
        setdevicename("");
        setdevicemodel("");
        setdevicemacaddress("");
        setfirmwareversion("");
        setclientname("");
        sethost("");
        setusername("");
        setpassword("");
        settopicname("");
        setparameter("");
        setdatatype("");
        navigate('/Device');
    }

    //check is they enable services
    function handleChange() {
        setisChecked(!isChecked);
        if (isChecked) {
            setchecking("")
        }
        else {
            setchecking("true")
        }

    }

    //function to validate
    const handleClick = async () => {

        //conditions to validate
        const isValidclientid = /^[0-9]+$/.test(clientid)
        const isValiddevicename = /^[a-zA-Z0-9]+$/.test(devicename)
        const isValiddevicemodel = /^[a-zA-Z0-9]+$/.test(devicemodel)
        const isValidmacaddress = /^[0-9a-zA-Z]{2}([-:_])[0-9a-zA-Z]{2}(\1[0-9a-zA-Z]{2}){4}$/.test(devicemacaddress)
        const isValidfirmwareversion = /^[a-zA-Z0-9]+$/.test(firmwareversion)
        const isValidclientname = /^[a-zA-Z0-9]+$/.test(clientname)
        const isValidhost = /^[0-9a-zA-Z./,:\\-]+$/.test(host)
        const isValidusername = /^[a-zA-Z0-9]+$/.test(username)
        const isValidtopicname = /^[0-9a-zA-Z]+$/.test(topicname)
        const isValidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);


        //parameter and datatype adding
        const inputs = document.querySelectorAll('.example, .typee');
        const values = Array.from(inputs).map(input => input.value);
        const concatenatedValues = values.reduce((acc, curr, index) => {
            if (index % 2 === 0) {
                return `${acc}${curr}&`;
            } else if (index === values.length - 1) {
                return `${acc}${curr}`;
            } else {
                return `${acc}${curr}&&`;
            }
        }, '');


        //check if valid or not
        if (!isValidclientid || !isValiddevicename || !isValiddevicemodel || !isValidmacaddress || !isValidfirmwareversion || !isValidclientname || !isValidhost || !isValidusername || !isValidpassword || !isValidtopicname) {
            alert("not valid")
        }
        else {
            const body = { clientid, devicename, devicemodel, devicemacaddress, firmwareversion, clientname, host, username, password, topicname, concatenatedValues, checking }
            fetch('http://127.0.0.1:4000/user', {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            navigate('/Device');
        }
    }
    
    //push input box to the page
    const handleButtonClick = (e) => {
        e.preventDefault();
        const newDivs = [...divs];
        setInputCount(inputCount + 1);
        newDivs.push(
            <div className="row_five padding-loc display-flex mb-loc-5" key={newDivs.length}>
                <div className="inputbox display-flex">
                    <label htmlFor="">Parameter</label>
                    <input type="text" onChange={handleparameter} className="example" />
                    <div className="error-message"><span className={parametererror ? "error" : ""}>{parametererror}</span></div>
                </div>
                <div className="inputbox display-flex">
                    <label htmlFor="">Datatype</label>
                    <input type="text" onChange={handledatatype} className="example" />
                    <div className="error-message"><span className={datatypeerror ? "error" : ""}>{datatypeerror}</span></div>
                </div>
                <div className="inputbox display-flex">
                    <label htmlFor="">Is Null</label>
                    <input type="checkbox" />
                </div>
                <div className="inputbox display-flex">
                    <input className="btn-loc add_button btn btn-blue del_btn" type="button" value="Add" />
                </div>
                <div className="inputbox display-flex">
                    <input className="btn-loc add_button  btn btn-danger del_btn" type="button" value="Delete" onClick={() => handleDelete(newDivs.length - 1)} />
                </div>
            </div>
        );
        setDivs(newDivs);
    };

    const opennewdevice = () => {
        setadddevice(true);
    }


    const handleDelete = (index) => {
        const newDivs = [...divs];
        newDivs.splice(index, 1);
        setDivs(newDivs);
    };


    return (
        <div className='Add_device'>
            <div className="modal fade boot-modals" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content width_of_model">
                        <div className="modal-header-confirm">
                            <h5 className="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-main-confirm">
                            <h5 className="modal-title confirm-tittle">Are you sure you want Exit ?
                            </h5>
                        </div>
                        <div className="modal-footer-confirm">
                            <button type="button" className="btn-loc active-loc" data-bs-dismiss="modal" onClick={handleCancel}>YES</button>
                            <button type="button" className="btn-loc inactive-loc" data-bs-dismiss="modal">NO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page_top_box new_device box-shadow">
                <div className='module_tittle' style={{textAlign:"start"}}>Device Management</div>
            </div>

            <div className="add_device_container">
                <div className="new_device_content">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Add Device Detials </div>
                        <div className="client_id display-flex">
                            <label htmlFor="device_id">Client ID</label>
                            <input type="text" id="device_id" value={clientid} onChange={handleclientid} />
                            <div className="error-message"><span className={clientidError ? "error" : ""}>{clientidError}</span></div>
                        </div>
                    </div>
                    <div className="row_two display-flex padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                            device info
                        </div>
                        <div className="input-boxes display-flex">
                            <div className="inputbox display-flex input">
                                <label htmlFor="">Device Name (<span className="required_star">*</span>)</label>
                                <input type="text" value={devicename} onChange={handledevicename} />
                                <div className="error-message"><span className={devicenameerror ? "error" : ""}>{devicenameerror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Device Model(<span className="required_star">*</span>)</label>
                                <input type="text" value={devicemodel} onChange={handledevicemodel} />
                                <div className="error-message"><span className={devicemodelerror ? "error" : ""}>{devicemodelerror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Device MAC address(<span className="required_star">*</span>)</label>
                                <input type="text" value={devicemacaddress} onChange={handledevicemacaddress} />
                                <div className="error-message"><span className={devicemacaddresserror ? "error" : ""}>{devicemacaddresserror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Firmware Version(<span className="required_star">*</span>)</label>
                                <input type="text" value={firmwareversion} onChange={handlefirmwareversion} />
                                <div className="error-message"><span className={firmwareversionerror ? "error" : ""}>{firmwareversionerror}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row_three display-flex padding-loc">
                        <div className="mqtt_protocol display-flex">
                            <div className="network_protocol light-grey uppercase mb-loc-5 mt-loc-3">Network Protocol</div>
                            <div className="mqtt_type display-flex uppercase gap-loc-4">
                                <div className="radio_mqtt">
                                    <input type="radio" className="radio_check" defaultChecked />
                                </div>
                                <div className="mqtt_txt">
                                    Mqtt
                                </div>
                            </div>
                        </div>
                        <div className="sub_row_three display-flex">
                            <div className="inputbox display-flex">
                                <label htmlFor="">MQTT Client ID (<span className="required_star">*</span>)</label>
                                <input type="text" value={clientname} onChange={handleclientname} />
                                <div className="error-message"><span className={clientnameerror ? "error" : ""}>{clientnameerror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Host IP Address(<span className="required_star">*</span>)</label>
                                <input type="text" value={host} onChange={handlehost} />
                                <div className="error-message"><span className={hosterror ? "error" : ""}>{hosterror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Username(<span className="required_star">*</span>)</label>
                                <input type="text" value={username} onChange={handleusername} />
                                <div className="error-message"><span className={usernameerror ? "error" : ""}>{usernameerror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Password(<span className="required_star">*</span>)</label>
                                <input type="text" value={password} onChange={handlepassword} />
                                <div className="error-message"><span className={passworderror ? "error" : ""}>{passworderror}</span></div>
                            </div>
                            <div className="inputbox display-flex">
                                <label htmlFor="">Topic Name(<span className="required_star">*</span>)</label>
                                <input type="text" value={topicname} onChange={handletopicname} />
                                <div className="error-message"><span className={topicnameerror ? "error" : ""}>{topicnameerror}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row_four padding-loc display-flex gap-2">
                        <div className="device_data light-grey uppercase">Device Data</div>
                        <div className="icon"><RiAddCircleLine className="Add-icon light-grey" onClick={handleButtonClick} /></div>
                    </div>
                    <div className="row_five padding-loc display-flex mb-loc-5 ">
                        <div className="inputbox display-flex">
                            <label htmlFor="">Parameter</label>
                            <input type="text" onChange={handleparameter} className="example" />
                            <div className="error-message"><span className={parametererror ? "error" : ""}>{parametererror}</span></div>
                        </div>
                        <div className="inputbox display-flex">
                            <label htmlFor="">Datatype</label>
                            <input type="text" onChange={handledatatype} className="example" />
                            <div className="error-message"><span className={datatypeerror ? "error" : ""}>{datatypeerror}</span></div>
                        </div>
                        <div className="inputbox display-flex">
                            <label htmlFor="">Is Null</label>
                            <input type="checkbox" />
                        </div>
                        <div className="inputbox display-flex add_del_gap">
                            <input className="btn-loc add_button btn btn-blue del_btn" type="button" value="Add" />
                        </div>
                        <div className="inputbox display-flex add_del_gap">
                            <input className="btn-loc add_button  btn btn-danger del_btn" type="button" value="Delete" />
                        </div>
                    </div>
                    {divs}

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="check_boxses justify-align display-flex padding-loc">
                            <div className="check_box_div">
                                <input type="checkbox" checked={isChecked} onChange={handleChange} className="check_box_input" />
                            </div>
                            <div className="Enable_services display-flex justify-align">Enable services</div>
                        </div>
                        <div className="save_cancel_btn display-flex">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={() => handleClick()}>Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>

                        </div>
                    </div>

                </div>
            </div>


            {/* {rows} */}
        </div>
    );
};

export default Add_device;