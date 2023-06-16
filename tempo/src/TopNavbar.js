import React from 'react';
import tempiot from './assets/logo/tempiot.jpg';
import { FaShoppingBag } from "react-icons/fa";

const TopNavbar = () => {
    return (
        <nav className='top-nav flex-class align-center'>
            {/* Product Logo */}
            <div className='navbar_mar mar-left'>
                <img src={tempiot} alt="TempoIoT Logo" width="140" height="45" />
            </div>
            {/* Site Dropdown */}
            <div className='site-dropdown mar-right flex-class align-center justify-center cursor-pointer'>
                <p className='rm-pd-mr'>Select Site</p>
                <FaShoppingBag className='dropdown-arrow'/>
            </div>
        </nav>
    );
};

export default TopNavbar;