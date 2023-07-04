import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faCircle, faRightLong } from '@fortawesome/free-solid-svg-icons';



function Linechart({ fromdate, todate, handlelive, globalfilter,socket}) {
  //data handling state
  const [LatestData, setLatestData] = useState([]);
  const [devicedata, setdevicedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState(Array(100).fill('ALL'));
  const [isOpen2, setIsOpen2] = useState([]);
  
  let data=[];
  const graphsPerFrame = 4;
  const totalPages = Math.ceil(devicedata.length / graphsPerFrame);

  const initialData = Array(100).fill({
    labels: [],
    datasets: [
      {
        label: "Temperature - Assert 1",
        data: [],
      },
    ],
  });
  const [userData1, setUserData1] = useState(initialData);

  useEffect(()=>{
    socket.on('message', (message) => {
      fetchData(fromdate, todate, handlelive, globalfilter,message);
      // console.log(fromdate)
    });
    if (fromdate && todate) {
      fetchData(fromdate, todate, globalfilter)
      console.log("msg1")
    }
    if (handlelive) {
      fetchData(fromdate, todate, handlelive, globalfilter)
      console.log("msg2")
    }
  }, [fromdate, todate, handlelive, globalfilter])

  // useEffect(() => {
    
  // }, [fromdate, todate, handlelive, globalfilter]);


  
  
  const fetchData = async (fromdate, todate, handlelive, globalfilter,message) => {
    // console.log(fromdate, todate, handlelive, globalfilter,message);
    try {
      const response1 = await fetch('http://127.0.0.1:4000/user');
      const data1 = await response1.json();
      setdevicedata(data1)
      const today = new Date();
      const year = today.getFullYear();
      const Month = String(today.getMonth() + 1).padStart(2, '0');
      const dates = String(today.getDate()).padStart(2, '0');
      const formatteddate = `${year}-${Month}-${dates}`;
      
      var latestData;
      if (fromdate !== "" && todate !== "" && handlelive === false) {
        latestData = message.filter(values => {
          const itemDate = values.Timestamp;
          if (fromdate <= itemDate && todate >= itemDate) {
            return message;
          }
        })
      } else if (handlelive === true && fromdate !== "") {
        latestData = message.filter(values => {
          const itemDate = values.Timestamp;
          if (fromdate <= itemDate) {
            return message;
          }
        })
      }
      else {
        console.log(handlelive)
        latestData = message.filter(values => {
          const itemDate = values.Timestamp.split(" ")[0];
          if (itemDate === formatteddate) {
            console.log(formatteddate)
            return message;
          }
        })
      }
      setLatestData(latestData);
      // console.log(latestData);
      if (globalfilter !== 'Output Model' && globalfilter !== null ) {
        getChartData1(globalfilter, latestData)
      }
      // else if (handlelive === true && fromdate !== "") {
      //   for (var i = 0; i < devicedata.length; i++) {
      //     getChartData1(selectedOption2[i], latestData, i);
      //   }
      // }
      // else if (fromdate !== "" && todate !== "") {
      //   for (var i = 0; i < devicedata.length; i++) {
      //     getChartData1(selectedOption2[i], latestData, i);
      //   }
      // }
      else{
        for (var i = 0; i < devicedata.length; i++) {
          getChartData1(selectedOption2[i], latestData, i);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData1 = (selectedOption2, latestData, index) => {
    const fillvalue = latestData.map(data => data.Temperature > 25 ? true : false)
    const fillvalue1 = latestData.map(data => data.Pressure > 40 ? true : false)
    if (index >= 0) {
      setUserData1(prevState => {
        const updatedData = [...prevState];
        if (selectedOption2 === "Temperature") {
          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Line",
                data: latestData.map(() => 25),
                borderColor: "red",
                borderWidth: 1,
                pointRadius: 0,
                tension: 0,
                fill: fillvalue[fillvalue.length - 1],
                backgroundColor: "rgb(245, 211, 211,0.5)",
              },
              {
                label: "Temperature",
                data: latestData.map(data => data.Temperature),
                borderColor: "red",
                pointBackgroundColor: "white",
                borderWidth: 1,
              }
            ],
          };
        } else if (selectedOption2 === "Pressure") {
          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Line",
                data: latestData.map(() => 40),
                borderColor: "red",
                borderWidth: 1,
                pointRadius: 0,
                fill: fillvalue1[fillvalue1.length - 1],
                backgroundColor: "rgb(245, 211, 211,0.5)",
                tension: 0,
              },
              {
                label: "Pressure",
                data: latestData.map(data => data.Pressure),
                borderColor: "blue",
                pointBackgroundColor: "white",
                borderWidth: 1,
              }
            ],
          };
        } else if (selectedOption2 === "Flow") {
          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Line",
                data: latestData.map(() => 25),
                borderColor: "red",
                borderWidth: 1,
                pointRadius: 0,
                fill: fillvalue[fillvalue.length - 1],
                backgroundColor: "rgb(245, 211, 211,0.5)",
                tension: 0,
              },
              {
                label: "Flow",
                data: latestData.map(data => data.Temperature),
                borderColor: "green",
                pointBackgroundColor: "white",
                borderWidth: 1,
              }

            ],
          };
        } else {
          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Temperature",
                data: latestData.map(data => data.Temperature),
                borderColor: "red",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
              {
                label: "Pressure",
                data: latestData.map(data => data.Pressure),
                borderColor: "blue",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
              {
                label: "Line",
                data: latestData.map(() => 40),
                borderColor: "red",
                borderWidth: 1,
                pointRadius: 0,
                fill: false,
                tension: 0,
              }
            ],
          };
        }
        return updatedData;
      });
    }
    else {
      for (var i = 0; i < devicedata.length; i++) {
        setUserData1(prevState => {
          const updatedData = [...prevState];
          if (selectedOption2 === "Temperature") {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Line",
                  data: latestData.map(() => 25),
                  borderColor: "red",
                  borderWidth: 1,
                  pointRadius: 0,
                  tension: 0,
                  fill: fillvalue[fillvalue.length - 1],
                  backgroundColor: "rgb(245, 211, 211,0.5)",
                },
                {
                  label: "Temperature",
                  data: latestData.map(data => data.Temperature),
                  borderColor: "red",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                }
              ],
            };
          } else if (selectedOption2 === "Pressure") {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Line",
                  data: latestData.map(() => 40),
                  borderColor: "red",
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: fillvalue1[fillvalue1.length - 1],
                  backgroundColor: "rgb(245, 211, 211,0.5)",
                  tension: 0,
                },
                {
                  label: "Pressure",
                  data: latestData.map(data => data.Pressure),
                  borderColor: "blue",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                }
              ],
            };
          } else if (selectedOption2 === "Flow") {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Line",
                  data: latestData.map(() => 25),
                  borderColor: "red",
                  borderWidth: 1,
                  pointRadius: 0,
                  tension: 0,
                  fill: fillvalue[fillvalue.length - 1],
                  backgroundColor: "rgb(245, 211, 211,0.5)",
                },
                {
                  label: "Temperature",
                  data: latestData.map(data => data.Temperature),
                  borderColor: "green",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                }
              ],
            };
          } else {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Temperature",
                  data: latestData.map(data => data.Temperature),
                  borderColor: "red",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
                {
                  label: "Pressure",
                  data: latestData.map(data => data.Pressure),
                  borderColor: "blue",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
                {
                  label: "Line",
                  data: latestData.map(() => 40),
                  borderColor: "red",
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: false,
                  tension: 0,
                }
              ],
            };
          }
          return updatedData;
        });
      }
    }
  };

 


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


  const dropdown2 = (index) => {
    const updatedIsOpen2 = [...isOpen2];
    updatedIsOpen2[index] = !updatedIsOpen2[index];
    setIsOpen2(updatedIsOpen2);
  };

  const handleDropdown2 = (option, index) => {
    const updatedSelectedOption2 = [...selectedOption2];
    updatedSelectedOption2[index] = option;
    setSelectedOption2(updatedSelectedOption2);
    getChartData1(option, LatestData, index);
  };


  const handlePreviousSlide = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextSlide = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const slideStartIndex = currentPage * graphsPerFrame;
  let slideEndIndex = slideStartIndex + graphsPerFrame;
  if (currentPage === totalPages - 1) {
    slideEndIndex = devicedata.length;
  }
  const displayedItems = [...Array(slideEndIndex - slideStartIndex)].map(
    (_, index) => index + slideStartIndex
  );



  return (
    <div style={{ width: "100%" }}>
      <div className="grid-container">
        {displayedItems.map((item) => (
          <div key={item} className="grid-item">
            <div className="graph-header display-flex" style={{ justifyContent: "center", alignItems: "center" }}>
              <label>Temperature - Assert1</label>
              <div className="dropdown_container2">
                <button className=" btn-loc4" style={{ border: "1px solid black" }} onClick={() => dropdown2(item)} >
                  {selectedOption2[item]}
                </button>
                {isOpen2[item] && (
                  <div className="dropdown_menu3 dashboard_dropdown-menu dropdown-colors">
                    <a className="a-a" href="#Temperature" onClick={() => handleDropdown2('Temperature', item)}>Temperature</a>
                    <hr className='hrs'></hr>
                    <a className="a-a" href="#Pressure" onClick={() => handleDropdown2('Pressure', item)}>Pressure</a>
                    <hr className='hrs'></hr>
                    <a className="a-a" href="#Flow" onClick={() => handleDropdown2('Flow', item)}>Flow</a>
                    <hr className='hrs'></hr>
                    <a className="a-a" href="#All" onClick={() => handleDropdown2('All', item)}>All</a>
                  </div>
                )}
              </div>
            </div>
            <div className="graph-size"><Line data={userData1[item]} options={options} /></div>
          </div>
        ))}
      </div>
      <div className='dashboard_bottom display-flex'>
        <div className='export cursor-pointer'>
          <div className='exports' data-bs-toggle="modal" data-bs-target="#export_data">Export</div>
        </div>
        <div className='arrow display-flex'>
          <div className='arrows display-flex justify-align' onClick={currentPage !== 0 ? handlePreviousSlide : null} >
            <div className='leftcircle'>
              <FontAwesomeIcon icon={faCircle} className="circle-img1" />
            </div>
            <div className={`leftarrow ${currentPage !== 0 ? 'arrow_active' : 'arrow_inactive'}`}>
              <FontAwesomeIcon icon={faLeftLong} />
            </div>
          </div>
          <div className='arrows1 display-flex justify-align' onClick={currentPage !== totalPages - 1 ? handleNextSlide : null} >
            <div className='rightcircle'>
              <FontAwesomeIcon icon={faCircle} className="circle-img2" />
            </div>
            <div className={`rightarrow ${currentPage !== totalPages - 1 ? 'arrow_active' : 'arrow_inactive'}`}>
              <FontAwesomeIcon icon={faRightLong} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Linechart;

