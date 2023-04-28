import React from "react";
import { useState } from "react";
// import add_new_div from "../Functions/Add_new_div";
import {
    RiAddCircleLine
} from "react-icons/ri";

const Add_device = () => {
    const [divs, setDivs] = useState([]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        const newDivs = [...divs];
        newDivs.push(
            <div className="row_five padding-loc display-flex">
                <div className="inputbox">
                    <input type="text" />
                </div>
                <div className="inputbox">
                    <input type="text" />
                </div>
                <div className="inputbox">
                    <input type="checkbox" />
                </div>
                <div className="inputbox">
                    <input className="btn-loc add_button" type="button" value="Add" />
                </div>
            </div>
        );
        setDivs(newDivs);
    };
    return (
        <div className='Add_device'>
            <div className="new_device box-shadow">
                <button className="btn theme-btn">New Device</button>
            </div>
            <div className="add_device_container">
                <div className="new_device_content">
                    <div className="row_one">
                        <div className="adding_new_device uppercase">Add Device Detials </div>
                        <div className="client_id">
                            <label htmlFor="device_id">Client Id</label>
                            <input type="text" id="device_id" />
                        </div>
                    </div>
                    <div className="row_two padding-loc">
                        <div className="device_info uppercase light-grey">
                            device info
                        </div>
                        <div className="input-boxes display-flex">
                            <div className="inputbox input">
                                <label htmlFor="">Device name</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Device Model</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Device MAC address</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Frimeware version</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row_three padding-loc">
                        <div className="mqtt_protocol display-flex">
                            <div className="network_protocol light-grey uppercase">Network Protocol</div>
                            <div className="mqtt_type display-flex uppercase gap-loc-4">
                                <div className="radio_mqtt">
                                    <input type="radio" />
                                </div>
                                <div className="mqtt_txt">
                                    Mqtt
                                </div>
                            </div>
                        </div>
                        <div className="sub_row_three display-flex">
                            <div className="inputbox display-flex">
                                <label htmlFor="">Mqqt Clint name</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Host</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Username</label>
                                <input type="text" />
                            </div>
                            <div className="inputbox">
                                <label htmlFor="">Password</label>
                                <input type="text" />
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
                            <button className="btn-loc inactive-loc">cancel</button>
                            <button className="btn-loc active-loc">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add_device;