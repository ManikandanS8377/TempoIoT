import React from "react";
import { useState } from "react";
// import add_new_div from "../Functions/Add_new_div";
import { RiAddCircleLine } from "react-icons/ri";
const Add_device = () => {
    const [divs, setDivs] = useState([]);

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

    //enable services checking state
    const [isChecked, setisChecked] = useState(true);
    const [checking, setchecking] = useState("true")



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
    function handletopicname(event) {
        settopicname(event.target.value)
    }
    function handleparameter(event) {
        setparameter(event.target.value)
    }
    function handledatatype(event) {
        setdatatype(event.target.value)
    }


    //on click cancel

    function handleCancel() {
        const result = window.confirm("Are you sure you want to delete this item?");
        if (result) {
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
        }

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
        const isValidmacaddress = /^[0-9a-fA-F]{2}([-:])[0-9a-fA-F]{2}(\1[0-9a-fA-F]{2}){4}$/.test(devicemacaddress)
        const isValidfirmwareversion = /^[a-zA-Z0-9]+$/.test(firmwareversion)
        const isValidclientname = /^[a-zA-Z0-9]+$/.test(clientname)
        const isValidhost = /^[a-zA-Z0-9]+$/.test(host)
        const isValidusername = /^[a-zA-Z0-9]+$/.test(username)
        const isValidtopicname = /^[0-9a-zA-Z]+$/.test(topicname)
        const isValidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
        const isValidparameter = /^[0-9a-zA-Z]+$/.test(parameter)
        const isValiddatatype = /^[a-zA-Z]+$/.test(datatype)


        //check if valid or not
        if (!isValidclientid) {
            alert("Enter Valid Client ID")
        }
        else if (!isValiddevicename) {
            alert("Enter Valid DeviceName")
        }
        else if (!isValiddevicemodel) {
            alert("Enter Valid Device Model")
        }
        else if (!isValidmacaddress) {
            alert("Enter Valid MAC Address")
        }
        else if (!isValidfirmwareversion) {
            alert("Enter Valid Firmware Version")
        }
        else if (!isValidclientname) {
            alert("Enter Valid ClientID")
        }
        else if (!isValidhost) {
            alert("Enter Valid Host")
        }
        else if (!isValidusername) {
            alert("Enter valid Username")
        }
        else if (!isValidpassword) {
            alert("Enter Valid Password..your password must contain upper,lower,number and special case")
        }
        else if (!isValidtopicname) {
            alert("Enter Valid Topic Name ")
        }
        else if (!isValidparameter) {
            alert("Enter Valid Parameter")
        }
        else if (!isValiddatatype) {
            alert("Enter Valid Datatype")
        }
        else {
            const body = { clientid, devicename, devicemodel, devicemacaddress, firmwareversion, clientname, host, username, password, topicname, parameter, datatype, checking }
            await fetch('http://127.0.0.1:4000/user', {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })
        }
    }


    //push input box to the page
    const handleButtonClick = (e) => {
        e.preventDefault();
        const newDivs = divs.concat(
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
                    <input className="btn-loc add_button btn btn-blue del_btn" type="button" value="Add" />
                </div>
                <div className="inputbox">
                    <input className="btn-loc add_button btn btn-danger del_btn" type="button" value="Delete" onClick={() => handleDelete(newDivs.length)} />
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
                        <div className="adding_new_device uppercase bold">Add Device Detials </div>
                        <div className="client_id">
                            <label htmlFor="device_id">Client ID</label>
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
                                <label htmlFor="">Firmware Version(<span className="required_star">*</span>)</label>
                                <input type="text" value={firmwareversion} onChange={handlefirmwareversion} />
                            </div>
                        </div>
                    </div>
                    <div className="row_three padding-loc">
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
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Host IP Address(<span className="required_star">*</span>)</label>
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
                            <div className="inputbox">
                                <label htmlFor="">Topic Name(<span className="required_star">*</span>)</label>
                                <input type="text" value={topicname} onChange={handletopicname} />
                            </div>
                        </div>
                    </div>
                    <div className="row_four padding-loc display-flex gap-2">
                        <div className="device_data light-grey uppercase">Device Data</div>
                        <div className="icon"><RiAddCircleLine className="Add-icon light-grey" onClick={handleButtonClick} /></div>
                    </div>
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
                        <div className="inputbox add_del_gap">
                            <input className="btn-loc add_button btn btn-blue del_btn" type="button" value="Add" />
                        </div>
                        <div className="inputbox add_del_gap">
                            <input className="btn-loc add_button  btn btn-danger del_btn" type="button" value="Delete" />
                        </div>
                    </div>
                    {divs}

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="check_boxses padding-loc">
                            <div className="check_box_div">
                                <input type="checkbox" checked={isChecked} onChange={handleChange} className="check_box_input" />
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
            {/* {rows} */}
        </div>
    );
};

export default Add_device;