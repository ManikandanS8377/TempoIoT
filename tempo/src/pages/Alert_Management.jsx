import React,{useState} from "react";
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';

const Alert_Management=()=>{

    const [isOpen1,setisOpen1]=useState(false);
    const [isOpen2,setisOpen2]=useState(false);
    const [isOpen3,setisOpen3]=useState(false);

    const dropdown1=()=>{
        setisOpen1(!isOpen1);
    }
    const dropdown2=()=>{
        setisOpen2(!isOpen2);
    }
    const dropdown3=()=>{
        setisOpen3(!isOpen3)
    }
    return(
        <div>
            <div className="Assert">
                <div className="device_management display-flex page_top_box box-shadow">
                    <span className='module_tittle '>Alert Management</span>
                    <div className="display-flex">
                        <div className='status-btns1 display-flex'>
                            <button className='btn-loc1 active-loc1'>10 Total Alert</button>
                        </div>
                        <div className='status-btns1 display-flex'>
                            <button className='btn-loc1 active-loc'>02 Action Taken</button>
                        </div>
                        <div className='status-btns1 display-flex'>
                            <button className='btn-loc1 inactive-loc'>03 Action Needed</button>
                        </div>
                    </div>
                    
                </div>
                <div className='assert_filters display-flex' >
                    <div class="pagination display-flex">
                        <div className="focus-page">
                            1
                        </div>
                        <div className="upcomming-pages">
                            of 20 pages
                        </div>

                    </div>
                    {/* <div className="display-flex">
                         <button class="dropdown-toggle fonts" onClick={dropdown1}>Device Model</button>
                         {isOpen1 && (
                                <div class="dashboard_dropdown-menu dropdown_menu dropdown-colors">
                                    <a className="a-a"><input type='checkbox' className='checks'></input>ALL</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>Device 1-Assert 1</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a"><input type='checkbox' className='checks'></input>Device 2-Assert 2</a>
                                </div>
                            )}
                    </div>
                    <div className="display-flex">
                         <button class="dropdown-toggle fonts " onClick={dropdown2}>Alert Category</button>
                         {isOpen2 && (
                                <div class="dashboard_dropdown-menu dropdown_menu dropdown-colors">
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>ALL</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>Critical</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>Caution</a>
                                </div>
                            )}
                    </div>
                    <div className="display-flex">
                         <button class="dropdown-toggle fonts " onClick={dropdown3}>Alert Types</button>
                         {isOpen3 && (
                                <div class="dashboard_dropdown-menu dropdown_menu dropdown-colors">
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>ALL</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a"><input type='checkbox' className='checks'></input>Pressure</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>Flow</a>
                                    <hr className='hrs'></hr>
                                    <a className="a-a" ><input type='checkbox' className='checks'></input>Temperature</a>
                                </div>
                            )}
                    </div> */}
                    <div className=' display-flex'>
                    <div class="dropdown-filter">
                        <button class="device_filters" onClick={dropdown1}>Dropdown 1</button>
                        {isOpen1 && (
                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Option 1</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Option 2</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Option 3</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="device_filters" onClick={dropdown2}>Dropdown 2</button>
                        {isOpen2 && (
                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>All</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Critical</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Caution</a>
                            </div>
                        )}
                    </div>
                    <div class="dropdown-filter">
                        <button class="device_filters" onClick={dropdown3}>Dropdown 1</button>
                        {isOpen3 && (
                           <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>ALL</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Pressure</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Flow</a>
                                <hr className='hrs ' ></hr>
                                <a href="#" className="a-a"><input type='checkbox' className='checks'></input>Temparature</a>
                          </div>
                        )}
                    </div>
                    </div>
                    <div className="display-flex alert_date">
                        <div class="dropdown-filter">
                            <fieldset>
                                <legend class="alert-legend-top">From</legend>
                                <input type='date' class="device_filters dashboard_live_filter1" ></input>
                            </fieldset>
                        </div>
                        <div class="dropdown-filter">
                        <fieldset>
                            <legend class="alert-legend-top">To</legend>
                            <input type='date' class="device_filters dashboard_live_filter1" ></input>
                        </fieldset>  
                    </div>
                    </div>
                </div>
                <div className='col-headings'>
                    <div className="col-head">ALERT ID</div>
                    <div className="col-head">DEVICE NAME</div>
                    <div className="col-head">DEVICE ID</div>
                    <div className="col-head">VALUE</div>
                    <div className="col-head">ALERT TYPE</div>
                    <div className="col-head">TIMESTAMP</div>
                    <div className="col-head">ALERT CATEGORY</div>
                    <div className="col-head">NOTES</div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">Temparature</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><button className="alert-page-button">caution</button></div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">Pressure</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><button className="alert-page-button">caution</button></div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">Flow</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><button className="alert-page-button">caution</button></div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
            </div>
        </div>
    )
}


export default Alert_Management;