import React from "react";
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';

const Assert_Management=()=>{
    return(
        <div>
            <div className="Assert">
                <div className="device_management display-flex page_top_box box-shadow">
                    <span className='module_tittle '>Assert Management</span>
                    <div className='status-btns1 display-flex'>
                        <button className='btn-loc active-loc1'>10 Total</button>
                    </div>
                </div>
                <div className='assert_filters display-flex'>
                    <div class="pagination display-flex">
                        <div className="focus-page">
                            1
                        </div>
                        <div className="upcomming-pages">
                            of 20 pages
                        </div>

                    </div>
                    <div className="display-flex">
                         <button class="device_filters fonts ">Assert Category</button>
                    </div>
                </div>
                <div className='col-headings'>
                    <div className="col-head">Alert Id</div>
                    <div className="col-head">Assert Name</div>
                    <div className="col-head">Assert Tracking ID</div>
                    <div className="col-head">Device ID</div>
                    <div className="col-head">Assert Category</div>
                    <div className="col-head">Updated By</div>
                    <div className="col-head">Action</div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">ritchard</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">ritchard</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
                <div className="datas">
                    <div className="col-head">1</div>
                    <div className="col-head">mqtt</div>
                    <div className="col-head">12344</div>
                    <div className="col-head">10-10-10</div>
                    <div className="col-head">ritchard</div>
                    <div className="col-head">Active</div>
                    <div className="col-head"><Icon icon={ic_label_important} className='riarrow2' size={30} /></div>
                </div>
            </div>
        </div>
    )
}

export default Assert_Management;