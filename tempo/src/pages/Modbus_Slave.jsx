import React from "react";
const Modbus_Slave = () => {
    return (
        <div className="row_with_count_status">
            <span className='module_tittle'>Modbus_Slave</span>
            <div className='status-btns display-flex'>
                <div className='btn-loc active-loc display-flex '> Active</div>
                <div className='btn-loc inactive-loc display-flex'>Inactive</div>
            </div>
        </div>
    )

}
export default Modbus_Slave;