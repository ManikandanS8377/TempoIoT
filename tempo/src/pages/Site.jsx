import React from 'react';
import '../assets/style/App.css'
// import { Link } from 'react-router-dom';
// import {RxStopwatch} from "react-icons/ri";
import { TiStopwatch } from 'react-icons/ti';
import { FiSettings } from "react-icons/fi";
import Navbar from '../TopNavbar';
import Site_content from './Site_content';


function Site(){
    return (
        <div className='site-page'>
            {/* <Navbar /> */}
            <Site_content/>
        </div>
    );
};
export default Site;