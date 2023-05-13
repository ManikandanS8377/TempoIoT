import React, { useState, useEffect } from 'react';
import Linechart from '../charts/Linechart';

const Analytics = () => {

    const [userData, setUserData] = useState({
      labels: [],
      datasets: [{
        label: "age",
        data: [],
      }]
    });

    const Datass = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/sendData');
            const data = await response.json();
            console.log(data);
            setUserData ({
              labels: data.map(data => data.name),
              datasets: [{
                label:"AGE",
                data: data.map(data => data.age),
              }]
            });
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        Datass();
        const interval = setInterval(Datass, 1000); // Fetch data every 1 seconds
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='page'>
            Analytics page
            <div>
            <Linechart chartData={userData} />
            </div>
        </div>
    );
};


export default Analytics;
