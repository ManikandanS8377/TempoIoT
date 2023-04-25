import React from "react";
const Add_device = () => {
    return (
        <div className='Add_device'>
            <div className="new_device box-shadow">
                <button className="btn theme-btn">New Device</button>
            </div>
            <div className="new_device_content">
                <div className="row_one">
                    <div className="adding_new_device">Add Device Detials </div>
                    <div className="client_id">
                        <label htmlFor="device_id">Client Id</label>
                        <input type="text" id="device_id" />
                    </div>
                </div>
                <div className="row_two padding-loc">
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
                <div className="row_three padding-loc">
                    <div className="inputbox">
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
                <div className="row_four padding-loc display-flex">
                    <div className="device_data">Device Data</div>
                    <div className="icon">+</div>
                </div>
                <div className="row_five padding-loc display-flex">
                    <div className="inputbox">
                        <input type="text" />
                    </div>
                    <div className="inputbox">
                        <input type="text" />
                    </div>
                    <div className="inputbox">
                        <input type="text" />
                    </div>
                    <div className="inputbox">
                        <input type="text" />
                    </div>
                </div>
                <div className="operating_buttons display-flex padding-loc">
                    <div className="check_box padding-loc">
                        <input type="checkbox" className="check_box_input" />Enable services
                    </div>
                    <div className="save_cancel_btn display-flex">
                        <button className="btn-loc inactive-loc">cancel</button>
                        <button className="btn-loc active-loc">Save</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add_device;