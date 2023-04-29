import React from "react";
import { useState } from "react";
// import add_new_div from "../Functions/Add_new_div";
import { RiAddCircleLine } from "react-icons/ri";
const Add_device = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [divs, setDivs] = useState([]);

    //states to use their values and validate
    const [clientid, setclientid] = useState("")
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



    //function to set the value to state

    function handleclientid(event) {
        setclientid(event.target.value)
    }
    function handledevicename(event) {
        setdevicename(event.target.value)
    }
    function handledevicemodel(event) {
        setdevicemodel(event.target.value)
    }
    function handledevicemacaddress(event) {
        setdevicemacaddress(event.target.value)
    }
    function handlefirmwareversion(event) {
        setfirmwareversion(event.target.value)
    }
    function handleclientname(event) {
        setclientname(event.target.value)
    }
    function handlehost(event) {
        sethost(event.target.value)
    }
    function handleusername(event) {
        setusername(event.target.value)
    }
    function handlepassword(event) {
        setpassword(event.target.value)
    }
    function handleparameter(event) {
        setparameter(event.target.value)
    }
    function handledatatype(event) {
        setdatatype(event.target.value)
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
    }

    //function to validate
    const handleClick = async () => {

        //conditions to validate
        const isValidclientid = /^[0-9]+$/.test(clientid)
        const isValiddevicename = /^[a-zA-Z0-9]+$/.test(devicename)
        const isValiddevicemodel = /^[a-zA-Z0-9]+$/.test(devicemodel)
        const isValidmacaddress = /^[0-9a-fA-F]{2}([-:])[0-9a-fA-F]{2}(\1[0-9a-fA-F]{2}){4}$/.test(devicemacaddress)
        const isValidfirmwareversion = /^[a-zA-Z0-9]+$/.test(firmwareversion)
        const isValidclientname = /^[a-zA-Z0-9]+$/.test(clientname)
        const isValidhost = /^[a-zA-Z0-9]+$/.test(host)
        const isValidusername = /^[a-zA-Z0-9]+$/.test(username)
        const isValidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
        const isValidparameter = /^[0-9a-zA-Z]+$/.test(parameter)
        const isValiddatatype = /^[a-zA-Z]+$/.test(datatype)


        //check if valid or not
        if (!isValidclientid) {
            alert("Enter valid client id")
        }
        else if (!isValiddevicename) {
            alert("Enter valid devicename")
        }
        else if (!isValiddevicemodel) {
            alert("Enter valid device model")
        }
        else if (!isValidmacaddress) {
            alert("Enter valid macaddress")
        }
        else if (!isValidfirmwareversion) {
            alert("Enter valid firmware version")
        }
        else if (!isValidclientname) {
            alert("Enter valid clientname")
        }
        else if (!isValidhost) {
            alert("Enter valid host")
        }
        else if (!isValidusername) {
            alert("Enter valid username")
        }
        else if (!isValidpassword) {
            alert("Enter valid password..your password must contain upper,lower,number and special case")
        }
        else if (!isValidparameter) {
            alert("enter valid parameter")
        }
        else if (!isValiddatatype) {
            alert("enter valid datatype")
        }
        else {
            const body = { clientid, devicename, devicemodel, devicemacaddress, firmwareversion, clientname, host, username, password, parameter, datatype }
            await fetch('http://127.0.0.1:4000/user', {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })

        }
    }
    const Delete_button = () => {
        setIsVisible(!isVisible)
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        const newDivs = [...divs];
        newDivs.push(
            <div className="row_five padding-loc display-flex mb-loc-5">
                <div className="inputbox">
                    <label htmlFor="">Parameter</label>
                    <input type="text" onChange={handleparameter} />
                </div>
                <div className="inputbox">
                    <label htmlFor="">Datatype</label>
                    <input type="text" onChange={handledatatype} />
                </div>
                <div className="inputbox">
                    <label htmlFor="">Is Null</label>
                    <input type="checkbox" />
                </div>
                <div className="inputbox">
                    <input className="btn-loc add_button" type="button" value="Add" />
                </div>
            </div>

        );
        setDivs(newDivs);
    };
    const handleDelete = (index) => {
        const newDivs = [...divs];
        newDivs.splice(index, 1);
        setDivs(newDivs);
    };
    return (
        <div className='Add_device'>
            <div className="new_device box-shadow">
                <button className="btn-loc theme-btn new_device_btn">New Device</button>
            </div>
            <div className="add_device_container">
                <div className="new_device_content">
                    <div className="row_one">
                        <div className="adding_new_device uppercase">Add Device Detials </div>
                        <div className="client_id">
                            <label htmlFor="device_id">Client Id</label>
                            <input type="text" id="device_id" value={clientid} onChange={handleclientid} />
                        </div>
                    </div>
                    <div className="row_two padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                            device info
                        </div>
                        <div className="input-boxes display-flex">
                            <div className="inputbox input">
                                <label htmlFor="">Device Name (<span className="required_star">*</span>)</label>
                                <input type="text" value={devicename} onChange={handledevicename} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Device Model(<span className="required_star">*</span>)</label>
                                <input type="text" value={devicemodel} onChange={handledevicemodel} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Device MAC address(<span className="required_star">*</span>)</label>
                                <input type="text" value={devicemacaddress} onChange={handledevicemacaddress} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Firmware version(<span className="required_star">*</span>)</label>
                                <input type="text" value={firmwareversion} onChange={handlefirmwareversion} />
                            </div>
                        </div>
                    </div>
                    <div className="row_three padding-loc">
                        <div className="mqtt_protocol display-flex">
                            <div className="network_protocol light-grey uppercase mb-loc-5 mt-loc-3">Network Protocol</div>
                            <div className="mqtt_type display-flex uppercase gap-loc-4">
                                <div className="radio_mqtt">
                                    <input type="radio" className="radio_check" />
                                </div>
                                <div className="mqtt_txt">
                                    Mqtt
                                </div>
                            </div>
                        </div>
                        <div className="sub_row_three display-flex">
                            <div className="inputbox display-flex">
                                <label htmlFor="">Mqqt Client Name (<span className="required_star">*</span>)</label>
                                <input type="text" value={clientname} onChange={handleclientname} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Host(<span className="required_star">*</span>)</label>
                                <input type="text" value={host} onChange={handlehost} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Username(<span className="required_star">*</span>)</label>
                                <input type="text" value={username} onChange={handleusername} />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Password(<span className="required_star">*</span>)</label>
                                <input type="text" value={password} onChange={handlepassword} />
                            </div>
                        </div>
                    </div>
                    <div className="row_four padding-loc display-flex gap-2">
                        <div className="device_data light-grey uppercase">Device Data</div>
                        <div className="icon"><RiAddCircleLine className="Add-icon light-grey" onClick={handleButtonClick} /></div>
                    </div>

                    {divs}

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="check_boxses padding-loc">
                            <div className="check_box_div">
                                <input type="checkbox" className="check_box_input" />
                            </div>
                            <div className="Enable_services">Enable services</div>
                        </div>
                        <div className="save_cancel_btn display-flex">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={() => handleClick()}>Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger" onClick={handleCancel}>cancel</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add_device;