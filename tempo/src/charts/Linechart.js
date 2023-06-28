import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function Linechart({ fromdate, todate ,handlelive}) {
  //dropdown state
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  //graph option select state
  const [selectedOption1, setSelectedOption1] = useState("ALL");
  const [selectedOption2, setSelectedOption2] = useState("ALL");
  const [selectedOption3, setSelectedOption3] = useState("ALL");
  const [selectedOption4, setSelectedOption4] = useState("ALL");
  //data handling state
  const [latestData, setLatestData] = useState([]);


  useEffect(() => {
    if (fromdate && todate) {
      fetchData(fromdate,todate)
    }
    if(handlelive){
      fetchData(fromdate,todate,handlelive)
    }
  }, [fromdate,todate,handlelive]);
  

  const dropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const dropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const dropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const dropdown4 = () => {
    setIsOpen4(!isOpen4);
  };


//states for graph
  const [userData1, setUserData1] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature - Assert 1",
        data: [],
      },
    ],
  });

  const [userData2, setUserData2] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature - Assert 1",
        data: [],
      },
    ],
  });
  const [userData3, setUserData3] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature - Assert 1",
        data: [],
      },
    ],
  });
  const [userData4, setUserData4] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature - Assert 1",
        data: [],
      },
    ],
  });



  const fetchData = async (fromdate,todate,handlelive) => {
    try {
      const response = await fetch("http://localhost:5000/api/sendData");
      const data = await response.json();
      const today = new Date();
      const year = today.getFullYear();
      const Month = String(today.getMonth() + 1).padStart(2, '0');
      const dates = today.getDate()
      const formatteddate = `${year}-${Month}-${dates}`;

      //filters based on data
      var latestData;
      if(fromdate!=="" && todate!==""){
         latestData=data.filter(values=>{
          console.log(values.Timestamp)
          const itemDate=values.Timestamp.split(" ")[0];
          if(fromdate<=itemDate && todate>=itemDate){
            return data;
          }
        })
      
      }else if(handlelive===true && fromdate!=="" && todate===""){
        latestData=data.filter(values=>{
          const itemDate=values.Timestamp.split(" ")[0];
          if(fromdate<=itemDate){
            return data;
          }
        })
        
      }
      else{
        latestData = data.filter(values => {
          const itemDate = values.Timestamp.split(" ")[0];
          if (itemDate === formatteddate) {
            return data;
          }
        })
      }
      setLatestData(latestData);
      getChartData1(selectedOption1, latestData)
      getChartData2(selectedOption2, latestData)
      getChartData3(selectedOption3, latestData)
      getChartData4(selectedOption4, latestData)
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData1 = (selectedOption1, latestData) => {
    if (selectedOption1 === "Temperature") {
      setUserData1(() => ({
        
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else if (selectedOption1 === "Pressure") {
      setUserData1((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    } else if (selectedOption1 === "Flow") {
      setUserData1((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else {
      setUserData1((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
          {
            ...prevState.datasets[1],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    }
  }

  const getChartData2 = (selectedOption2, latestData) => {
    if (selectedOption2 === "Temperature") {
      setUserData2((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else if (selectedOption2 === "Pressure") {
      setUserData2((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    } else if (selectedOption2 === "Flow") {
      setUserData2((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else {
      setUserData2((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
          {
            ...prevState.datasets[1],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    }
  }

  const getChartData3 = (selectedOption3, latestData) => {
    if (selectedOption3 === "Temperature") {
      setUserData3((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature.split(" ")[1]),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else if (selectedOption3 === "Pressure") {
      setUserData3((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    } else if (selectedOption3 === "Flow") {
      setUserData3((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else {
      setUserData3((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
          {
            ...prevState.datasets[1],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    }
  }

  const getChartData4 = (selectedOption4, latestData) => {
    if (selectedOption4 === "Temperature") {
      setUserData4((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else if (selectedOption4 === "Pressure") {
      setUserData4((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    } else if (selectedOption4 === "Flow") {
      setUserData4((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
        ],
      }));
    } else {
      setUserData4((prevState) => ({
        ...prevState,
        labels: latestData.map((data) => data.Timestamp.split(" ")[1]),
        datasets: [
          {
            ...prevState.datasets[0],
            label: "Temperature - Assert1",
            data: latestData.map((data) => data.Temperature),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 4,
            pointBackgroundColor: "white",
          },
          {
            ...prevState.datasets[1],
            label: "Temperature - Assert12",
            data: latestData.map((data) => data.Pressure),
            borderColor: "red",
            borderWidth: 1,
            pointRadius: 4,
          },
        ],
      }));
    }
  }

  useEffect(() => {
    fetchData(fromdate,todate,handlelive);
    const intervalId = setInterval(() => {
      fetchData(fromdate,todate,handlelive);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4,fromdate,todate,handlelive]);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },

    },

    scales: {
      x: {
        beginAtZero: true,
        display: true
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      },

    },

  };
  const handleDropdown1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(!isOpen1);
    getChartData1(option, latestData);
    fetch(option);
  };
  const handleDropdown2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(!isOpen2);
    getChartData2(option, latestData);
  };

  const handleDropdown3 = (option) => {
    setSelectedOption3(option);
    setIsOpen3(!isOpen3);
    getChartData3(option, latestData);
  };

  const handleDropdown4 = (option) => {
    setSelectedOption4(option);
    setIsOpen4(!isOpen4);
    getChartData4(option, latestData);
  };


  return (
    <div className='graph'>
      <div className='graph_first display-flex'>
        <div className='first_box display-flex justify-align'>
          <div className='line_container' >
            <div className="label_container display-flex justify-align">
              <label>Temperature - Assert1</label>
              <div className="dropdown_container1">
                <button className=" dropdown_toggle1" onClick={dropdown1}>
                  {selectedOption1}
                </button>
                {isOpen1 && (
                  <div className="dropdown_menu1 dashboard_dropdown-menu dropdown-colors" >
                    <a className="a-a" onClick={() => handleDropdown1('Temperature')}>Temperature</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown1('Pressure')}>Pressure</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown1('Flow')}>Flow</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown1('ALL')}>ALL</a>
                  </div>
                )}
              </div>
            </div>
            <div className="graphs" >
              <Line data={userData1} options={options} />
            </div>

          </div>

        </div>
        <div className='second_box display-flex justify-align'>
          <div className='line_container'>
            <div className="label_container display-flex justify-align">
              <label>Temperature - Assert2</label>
              <div className="dropdown_container1">
                <button className=" dropdown_toggle1" onClick={dropdown2}>
                  {selectedOption2}
                </button>
                {isOpen2 && (
                  <div className="dropdown_menu1 dashboard_dropdown-menu dropdown-colors">
                    <a className="a-a" onClick={() => handleDropdown2('Temperature')}>Temperature</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown2('Pressure')}>Pressure</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown2('Flow')}>Flow</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown2('ALL')}>ALL</a>
                  </div>
                )}
              </div>
            </div>
            <div className="graphs" ><Line data={userData2} options={options} /></div>
          </div>
        </div>
      </div>
      <div className='graph_second display-flex'>
        <div className='third_box display-flex justify-align'>
          <div className='line_container'>
            <div className="label_container display-flex justify-align">
              <label>Temperature - Assert1</label>
              <div className="dropdown_container1">
                <button className=" dropdown_toggle1" onClick={dropdown3}>
                  {selectedOption3}
                </button>
                {isOpen3 && (
                  <div className="dropdown_menu1 dashboard_dropdown-menu dropdown-colors">
                    <a className="a-a" onClick={() => handleDropdown3('Temperature')}>Temperature</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown3('Pressure')}>Pressure</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown3('Flow')}>Flow</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown3('ALL')}>ALL</a>
                  </div>
                )}
              </div>
            </div>
            <div className="graphs"><Line data={userData3} options={options} /></div>
          </div>
        </div>
        <div className='fourth_box display-flex justify-align'>
          <div className='line_container'>
            <div className="label_container display-flex justify-align">
              <label>Temperature - Assert2</label>
              <div className="dropdown_container1">
                <button className=" dropdown_toggle1" onClick={dropdown4}>
                  {selectedOption4}
                </button>
                {isOpen4 && (
                  <div className="dropdown_menu1 dashboard_dropdown-menu dropdown-colors">
                    <a className="a-a" onClick={() => handleDropdown4('Temperature')}>Temperature</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown4(' Pressure')}> Pressure</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown4('Flow')}> Flow</a>
                    <hr className='hrs ' ></hr>
                    <a className="a-a" onClick={() => handleDropdown4('ALL')}>ALL</a>
                  </div>
                )}
              </div>
            </div>
            <div className="graphs"><Line data={userData4} options={options} /></div>
          </div>
        </div>
      </div>
    </div>

  )
}



export default Linechart;