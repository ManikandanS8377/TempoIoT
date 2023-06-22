import React, { useState } from 'react';
// import line chart
import Linechart from '../charts/Linechart';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faCircle, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isDropdownOpen1_dashboard, setIsDropdownOpen1_dashboard] = useState(false);
    const dropdown1 = () => {
        setIsOpen1(!isOpen1);
        setIsDropdownOpen1_dashboard(!isDropdownOpen1_dashboard);
    };

    const [isOpen2, setIsOpen2] = useState(false);
    const [isDropdownOpen2_dashboard, setIsDropdownOpen2_dashboard] = useState(false);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsDropdownOpen2_dashboard(!isDropdownOpen2_dashboard)
    };


    const [selectedOption1, setSelectedOption1] = useState('Device - Assert');
    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        // setIsOpen1(false);
    };
    const [selectedOption2, setselectedOption2] = useState('Output Model');
    const handleOptionClick2 = (option) => {
        setselectedOption2(option);
        // setIsOpen2(false);
    }

    //filters based on date
    const [fromdate, setfromdate] = useState("");
    const handlefrom = ((event) => {
        setfromdate(event.target.value)

    })

    const [todate, settodate] = useState("");
    const handleto = ((event) => {
        settodate(event.target.value)
    })

    const [handlelive, sethandlelive] = useState(false);
    const handleliveclick = ((fromdate) => {
        if (fromdate !== "") {
            sethandlelive(!handlelive)
        } else {
            sethandlelive(false)
        }
    })



    return (
        <div className='dashboard_page'>
            <div class="modal fade boot-modals" id="export_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">EXPORT DATA</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="col-5">
                            <label for="input1">Choose File Type</label>
                            <div className="inputs-group">
                                <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                <input type="text" class="form-control-loc" id="input1" />
                            </div>
                            <label for="input2">File Name</label>
                            <div className="inputs-group">
                                <span class="input-group-loc"><Icon icon={ic_label_important} size={20} style={{ color: "lightgray" }} /></span>
                                <input type="text" class="form-control-loc" id="input1" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-loc active-loc">Export</button>
                            <button type="button" class="btn-loc inactive-loc" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page'>
                <div className="dashboard_live page_top_box box-shadow">
                    <div className="dashboard_live_width">
                        <p className="dashboard_p display-flex">Dashboard Live</p>
                    </div>
                    <div className='dashboard_inputs display-flex'>


                        <div >
                            <button class="device_filters" onClick={dropdown1} >
                                <div className="device_name">
                                    {selectedOption1}
                                </div>
                                <div className="dropdown_icon">
                                    <FontAwesomeIcon
                                        icon={isDropdownOpen1_dashboard ? faChevronDown : faChevronUp}
                                        className="dropdown-icon"
                                    />
                                </div>
                            </button>
                            {isOpen1 && (
                                <div class="dashboard_dropdown-menu dropdown_menu dropdown-colors">
                                    <a className="a-a" ><input type='checkbox' className='checks' onClick={() => handleOptionClick1('ALL')}></input>ALL</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks' onClick={() => handleOptionClick1('Device 1-Assert 1')}></input>Device 1-Assert 1</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks' onClick={() => handleOptionClick1('Device 2-Assert 2')}></input>Device 2-Assert 2</a>
                                </div>
                            )}
                        </div>



                        <div>
                            <button class="device_filters" onClick={dropdown2}>
                                <div className="device_name">
                                    {selectedOption2}
                                </div>
                                <div className="dropdown_icon">
                                    <FontAwesomeIcon
                                        icon={isDropdownOpen2_dashboard ? faChevronDown : faChevronUp}
                                        className="dropdown-icon"
                                    />
                                </div>
                            </button>
                            {isOpen2 && (
                                <div class="dashboard_dropdown-menu dropdown_menu dropdown-colors">
                                    <a className='lists a-a' onClick={() => handleOptionClick2('Temperature')}>Temperature</a>
                                    <hr className='hrs ' ></hr>
                                    <a className='lists a-a' onClick={() => handleOptionClick2('pressure')}>pressure</a>
                                    <hr className='hrs ' ></hr>
                                    <a className='lists a-a' onClick={() => handleOptionClick2('Flow')}>Flow</a>
                                </div>
                            )}
                        </div>
                        <div class="dropdown-filter">
                            <fieldset>
                                <legend class="legend-top-form">From</legend>
                                <input type='date' class="dropdown-toggle device_filters" onChange={handlefrom}></input>
                            </fieldset>
                        </div>
                        <div class="dropdown-filter">
                            <fieldset>
                                <legend class="legend-top-to">To</legend>
                                <input type='date' class="dropdown-toggle device_filters" onChange={handleto}></input>
                            </fieldset>
                        </div>
                        <div className='dropdown-filter'>
                            <button className='btn-loc2 border-radius' style={{ fontSize: "20px", textAlign: "center" }} onClick={() => { handleliveclick(fromdate) }}>Live</button>
                        </div>
                        <div className='border_arrow display-flex justify-align'>
                            <div className='icon1 display-flex justify-align'>
                                <Icon icon={ic_label_important} className='riarrow1' size={35} style={{ transform: 'rotate(90deg)' }} />
                            </div>
                            <div className='icon2 display-flex justify-align'>
                                <Icon icon={ic_label_important} className='riarrow2' size={35} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lineChart_body">
                    <Linechart fromdate={fromdate} todate={todate} handlelive={handlelive} className="all_graph" />
                </div>
                <div className='dasboard_bottom display-flex'>
                    <div className='export cursor-pointer'>
                        <div className='exports' data-bs-toggle="modal" data-bs-target="#export_data">Export</div>
                    </div>
                    <div className='arrow display-flex'>
                        <div className='arrows display-flex justify-align'>
                            <div className='leftcircle'>
                                <FontAwesomeIcon icon={faCircle} className="circle-img1" />
                            </div>
                            <div className="leftarrow">
                                <FontAwesomeIcon icon={faLeftLong} className="arrow-img1" />
                            </div>
                        </div>
                        <div className='arrows1 display-flex justify-align'>
                            <div className='rightcircle'>
                                <FontAwesomeIcon icon={faCircle} className="circle-img2" />
                            </div>
                            <div className='rightarrow'>
                                <FontAwesomeIcon icon={faRightLong} className="arrow-img2" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;