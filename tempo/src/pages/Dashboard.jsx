import React, { useState, useEffect } from 'react';
import Linechart from '../charts/Linechart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faCircle, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';


const Dashboard = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const dropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [userData, setUserData] = useState({
        labels: [],
        datasets: [{
            label: "Temperature  - Assert 1",
            data: [],
        }]
    });

    const [selectedOption1, setSelectedOption1] = useState('Device - Assert');
    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsOpen1(false);
    };
    const [selectedOption2,setselectedOption2]=useState('Output Model');
    const handleOptionClick2=(option)=>{
        setselectedOption2(option);
        setIsOpen2(false);
    }

    const Datass = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/sendData');
            const data = await response.json();
            const latestData = data.slice(-6);
            setUserData({
                labels: latestData.map(data => data.name),
                datasets: [{
                    label: "Temperature  - Assert1",
                    data: latestData.map(data => data.age),
                    backgroundColor: 'lightpink',
                    borderColor: 'blue',
                    borderWidth: 1,
                    pointRadius: 6,
                    fill: true,
                    pointBackgroundColor: 'white'
                }]
            });
        } catch (error) {
            console.error(error);
        }

    }



    useEffect(() => {
        Datass();
        const interval = setInterval(Datass, 1000); //refresh data in 1s
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='page'>
            <div className="dashboard_live box-shadow">
                <div className="dashboard_live_width">
                    <p className="dashboard_p">Dashboard Live</p>
                </div>
                <div className='dashboard_inputs'>
                        <div >
                            <button class="dropdown-toggle dashboard_live_filter" onClick={dropdown1}>{selectedOption1}</button>
                            {isOpen1 && (
                                <div class="dashboard_dropdown-menu">
                                    <a className='#' onClick={() => handleOptionClick1('ALL')}><input type='checkbox' className='checks'></input>ALL</a>
                                    <hr className='hrs'></hr>
                                    <a className='#' onClick={() => handleOptionClick1('Device 1-Assert 1')}><input type='checkbox' className='checks'></input>Device 1-Assert 1</a>
                                    <hr className='hrs'></hr>
                                    <a className='#' onClick={() => handleOptionClick1('Device 2-Assert 2')}><input type='checkbox' className='checks'></input>Device 2-Assert 2</a>
                                </div>
                            )}
                        </div>

                        <div>
                            <button class="dropdown-toggle  dashboard_live_filter" onClick={dropdown2}>{selectedOption2}</button>
                            {isOpen2 && (
                                <div class="dashboard_dropdown-menu">
                                    <a className='lists' onClick={() => handleOptionClick2('Temperature')}>Temperature</a>
                                    <hr className='hrs' ></hr>
                                    <a className='lists' onClick={() => handleOptionClick2('pressure')}>pressure</a>
                                    <hr className='hrs'></hr>
                                    <a className='lists' onClick={() => handleOptionClick2('Flow')}>Flow</a>
                                </div>
                            )}
                        </div>
                    <div class="dropdown-filter">
                        <fieldset>
                            <legend class="legend-top">From</legend>
                            <input type='date' class="dropdown-toggle dashboard_live_filter" ></input>
                        </fieldset>
                        
                    </div>
                    <div class="dropdown-filter">
                        <fieldset>
                            <legend class="legend-top">To</legend>
                            <input type='date' class="dropdown-toggle dashboard_live_filter" ></input>
                        </fieldset>
                        
                    </div>
                    <div className='border_arrow'>
                        <div className='icon1'>
                            <Icon icon={ic_label_important} className='riarrow1' size={35} style={{ transform: 'rotate(90deg)' }}/>
                        </div>
                        <div className='icon2'>
                            <Icon icon={ic_label_important} className='riarrow2' size={35} />
                        </div>
                    </div>

                </div>
            </div>
            <Linechart chartData={userData}/>
                <div className='dasboard_bottom'>
                    <div className='export'>
                        <div className='exports'>Export</div>
                    </div>
                    <div className='arrow'>
                        <div className='arrows'>
                            <div className='leftcircle'>
                                <FontAwesomeIcon icon={faCircle} className="circle-img1" />
                            </div>
                            <div className="leftarrow">
                                <FontAwesomeIcon icon={faLeftLong} className="arrow-img1" />
                            </div>
                        </div>
                        <div className='arrows1'>
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
    );
};

export default Dashboard;