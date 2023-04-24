import React from 'react';
import '../assets/style/App.css'
// import { Link } from 'react-router-dom';
// import {RxStopwatch} from "react-icons/ri";
import { TiStopwatch } from 'react-icons/ti';
import { FiSettings } from "react-icons/fi";
import Navbar from '../TopNavbar';
import Device_content from './Device_content';


const Device = () => {
    return (
        <div className='device-page'>
            {/* <Navbar /> */}
            <Device_content/>
        </div>
    );
};
export default Device;




