import React from "react";
const Device_Connection = () => {
    return (
        <>
            <div className="row_with_count_status">
                <span className="module_tittle">Device_Connection</span>
            </div>
            <div className="row_with_filters">
                <div class="pagination display-flex">
                    <div className="focus-page">
                        <input
                            // ref={inputRef}
                            type="number"
                            value={1}
                            // onChange={handleInputChange}
                            // onBlur={handleInputBlur}
                            autoFocus
                            className='editable_input_box'
                        />

                    </div>
                    <div className="upcomming-pages">
                        of 20 pages
                    </div>
                </div>


                {/* edit the filters */}
                <div className="dropdown-filter">
                    <div className="device_filters">
                        <div>name</div>
                        <div>^</div>
                    </div>
                </div>
                <div className="dropdown-filter">
                    <div className="device_filters">
                        <div>name</div>
                        <div>^</div>
                    </div>
                </div>

            </div>
            <div className="row_with_column_headings">
                <div className="col-head">ur heading</div>
            </div>
        </>
    )

}
export default Device_Connection;