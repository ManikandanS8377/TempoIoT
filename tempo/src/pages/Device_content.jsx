import React from 'react';
// import tempiot from './assets/tempiot.jpg';.
import '../assets/style/App.css';
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState,useEffect } from "react";
import {json, useNavigate} from 'react-router-dom';


const Device_content = () => {
    const [alldata,setalldata]=useState([]);
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

    const navigate=useNavigate();
    const handleclick=()=>{
        navigate('/Add_device');
    }
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:4000/user')
            const data = await response.json();
            //modify the last updated date in a format
            const modifiedData = data.map((item) => {
                const date = new Date(item.last_updated_on);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
        
                const formattedDate = `${day}-${month}-${year}`;
                return { ...item, last_updated_on: formattedDate };
              });
        
            setalldata(modifiedData);
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => {
        clearInterval(interval);
        };
    }, []);
    
    

    
    return (
        <div className='bar'>
            <div className='status-bar'>
                <div className="device_management display-flex page_top_box box-shadow">
                    <span className='module_tittle '>Device Management</span>
                    <div className='status-btns display-flex'>
                        <button className='btn-loc active-loc'>0 Active</button>
                        <button className='btn-loc inactive-loc'>0 Inactive</button>
                    </div>
                </div>
                <div className='filters display-flex' >
                    <div class="pagination display-flex">
                        <div className="focus-page">
                            1
                        </div>
                        <div className="upcomming-pages">
                            of 20 pages
                        </div>

                    </div>
                    <div className='filters1 display-flex'>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown1}>Device Name</button>
                        {isOpen1 && (
                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a">Option 1</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 2</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown2}>Device Model</button>
                        {isOpen2 && (
                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a">Option 1</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 2</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown3}>Device Status</button>
                        {isOpen3 && (
                           <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a">Option 1</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 2</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="dropdown-toggle" onClick={dropdown4}>Device Installed On</button>
                        {isOpen4 && (
                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a">Option 1</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 2</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a">Option 3</a>
                            </div>
                        )}
                    </div>
                    </div>
                    <div className='filters2 display-flex'>
                        <button className='btn btn-fill' onClick={handleclick} >Add Device</button>
                    </div>
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
                {alldata.map((data,index)=>(
                    <div className="datas">
                        <div className="col-head" key={index}>{data.device_id}</div>
                        <div className="col-head" key={index}>{data.device_name}</div>
                        <div className="col-head" key={index}>{data.device_model}</div>
                        <div className="col-head" key={index}>{data.last_updated_on}</div>
                        <div className="col-head">ritchard</div>
                        <div className="col-head display-flex"><FontAwesomeIcon icon={faDiamond} style={{color: "green",paddingTop:"7px"}} size='xs'/><div  className='device_active'>Active</div></div>
                        <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                    </div>
                ))}
                <div className='device_bottom'>
                    <div className='device_export cursor-pointer'>
                        <div className='device_exports'>Export</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Device_content;