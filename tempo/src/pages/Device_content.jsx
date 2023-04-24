import React from 'react';
// import tempiot from './assets/tempiot.jpg';.
import '../assets/style/App.css'
import { TiStopwatch } from 'react-icons/ti';
import { FiSettings } from "react-icons/fi";
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";


const Device_content = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const dropdown1 = () => {
        setIsOpen1(!isOpen1);
        // alert("ahi");
    };
    const [isOpen2, setIsOpen2] = useState(false);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
        // alert("ahi");
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);
        // alert("ahi");
    };
    const [isOpen4, setIsOpen4] = useState(false);
    const dropdown4 = () => {
        setIsOpen4(!isOpen4);
        // alert("ahi");
    };

    return (
        <div className='bar'>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add Device Detaials</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body model-inputs">
                            <div class="col-5">
                                <label for="input1">Input 1</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc">@</span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-5">
                                <label for="input1">Input 2</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc">@</span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>

                            <div class="col-5">
                                <label for="input1">Input 1</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc">@</span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-5">
                                <label for="input1">Input 2</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc">@</span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>

                            <div class="col-5">
                                <label for="input1">Input 2</label>
                                <div className="inputs-group">
                                    <span class="input-group-loc">@</span>
                                    <input type="text" class="form-control-loc" id="input1" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-loc inactive-loc" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn-loc active-loc">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='status-bar'>
                <div className="device_management">
                    <span className='module_tittle'>Device Management</span>
                    <div className='status-btns'>
                        <button className='btn-loc active-loc'>0 active</button>
                        <button className='btn-loc inactive-loc'>0 inactive</button>
                    </div>
                </div>
                <div className='filters'>
                    <div class="pagination">
                        <div className="focus-page">
                            1
                        </div>
                        <div className="upcomming-pages">
                            of 20 pages
                        </div>

                    </div>

                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown1}>Dropdown 1</button>
                        {isOpen1 && (
                            <div class="dropdown-menu">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown2}>Dropdown 2</button>
                        {isOpen2 && (
                            <div class="dropdown-menu">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown3}>Dropdown 1</button>
                        {isOpen3 && (
                            <div class="dropdown-menu">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown4}>Dropdown 1</button>
                        {isOpen4 && (
                            <div class="dropdown-menu">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        )}
                    </div>
                    <button className='btn btn-fill' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Device</button>

                </div>
                <div className='col-headings'>
                    <div className="col-head">Device Id</div>
                    <div className="col-head">Device Name</div>
                    <div className="col-head">Device Model</div>
                    <div className="col-head">Device installed on</div>
                    <div className="col-head">Device installed by</div>
                    <div className="col-head">Device status</div>
                    <div className="col-head">Device action</div>
                </div>
                <div className="datas">
                    <h1>No Device</h1>
                </div>
            </div>
        </div>
    );
};

export default Device_content;