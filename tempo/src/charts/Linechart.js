import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faCircle, faRightLong } from '@fortawesome/free-solid-svg-icons';


function Linechart({ fromdate, todate, handlelive, globalfilter }) {
  //data handling state
  const [latestData, setLatestData] = useState([]);
  const [devicedata, setdevicedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState(Array(100).fill('ALL'));
  const [isOpen2, setIsOpen2] = useState([]);


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


  useEffect(() => {
    if (fromdate && todate) {
      fetchData(fromdate, todate, globalfilter)
    }
    if (handlelive) {
      fetchData(fromdate, todate, handlelive, globalfilter)
    }
  }, [fromdate, todate, handlelive, globalfilter]);

  const fetchData = async (fromdate, todate, handlelive, globalfilter) => {
    try {
      const response1 = await fetch('http://127.0.0.1:4000/user');
      const data1 = await response1.json();
      setdevicedata(data1)
      const response = await fetch(`http://localhost:5000/api/sendData`);
      const data = await response.json();
      const today = new Date();
      const year = today.getFullYear();
      const Month = String(today.getMonth() + 1).padStart(2, '0');
      const dates = today.getDate()
      const formatteddate = `${year}-${Month}-${dates}`;

      //filters based on data
      var latestData;
      if (fromdate !== "" && todate !== "" && handlelive === false) {
        latestData = data.filter(values => {
          const itemDate = values.Timestamp;
          if (fromdate <= itemDate && todate >= itemDate) {
            return data;
          }
        })
      } else if (handlelive === true && fromdate !== "") {
        latestData = data.filter(values => {
          const itemDate = values.Timestamp;
          if (fromdate <= itemDate) {
            return data;
          }
        })
      }
      else {
        latestData = data.filter(values => {
          const itemDate = values.Timestamp.split(" ")[0];
          if (itemDate === formatteddate) {
            return data;
          }
        })
      }
      setLatestData(latestData);
      if (globalfilter !== 'Output Model' && globalfilter !== null) {
        getChartData1(globalfilter, latestData)
      }
      else {
        if (handlelive === true && fromdate !== "" && todate === "") {
          getChartData1(selectedOption2, latestData)
        }
        if (fromdate !== "" && todate !== "") {
          getChartData1(selectedOption2, latestData)
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData1 = (selectedOption2, latestData, index) => {
    if (index >= 0) {
      setUserData1(prevState => {
        const updatedData = [...prevState];
        if (selectedOption2 === "Temperature") {
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
            ],
          };
        } else if (selectedOption2 === "Pressure") {
          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Pressure",
                data: latestData.map(data => data.Pressure),
                borderColor: "blue",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
            ],
          };
        } else if (selectedOption2 === "Flow") {

          updatedData[index] = {
            ...updatedData[index],
            labels: latestData.map(data => data.Timestamp.split(" ")[1]),
            datasets: [
              {
                label: "Flow",
                data: latestData.map(data => data.Temperature),
                borderColor: "green",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
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
                borderColor: "yellow",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
              {
                label: "Pressure",
                data: latestData.map(data => data.Pressure),
                borderColor: "green",
                pointBackgroundColor: "white",
                borderWidth: 1,
              },
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
                  label: "Temperature",
                  data: latestData.map(data => data.Temperature),
                  borderColor: "red",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
              ],
            };
          } else if (selectedOption2 === "Pressure") {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Pressure",
                  data: latestData.map(data => data.Pressure),
                  borderColor: "blue",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
              ],
            };
          } else if (selectedOption2 === "Flow") {
            updatedData[i] = {
              ...updatedData[i],
              labels: latestData.map(data => data.Timestamp.split(" ")[1]),
              datasets: [
                {
                  label: "Flow",
                  data: latestData.map(data => data.Temperature),
                  borderColor: "green",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
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
                  borderColor: "green",
                  pointBackgroundColor: "white",
                  borderWidth: 1,
                },
              ],
            };
          }
          return updatedData;
        });
      }
    }
  };

  useEffect(() => {
    fetchData(fromdate, todate, handlelive, globalfilter);
    // const interval = setInterval(() => {
    //   fetchData(fromdate, todate, handlelive, globalfilter);
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, [globalfilter, handlelive, fromdate, todate]);


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
    getChartData1(option, latestData, index);
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
    <div>
      <div className="grid-container">
        {displayedItems.map((item) => (
          <div key={item} className="grid-item">
            <div className="graph-header display-flex" style={{ justifyContent: "center", alignItems: "center" }}>
              <label>Temperature - Assert1</label>
              <div className="dropdown_container2">
                <button className="dropdown_toggle2 btn btn-loc" style={{ border: "1px solid black" }} onClick={() => dropdown2(item)} >
                  {selectedOption2[item]}
                </button>
                {isOpen2[item] && (
                  <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
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
            <Line data={userData1[item]} options={options} />
          </div>
        ))}
      </div>
      <div className='arrow display-flex'>
        <div className='arrows display-flex justify-align'  onClick={handlePreviousSlide} disabled={currentPage === 0}  >
          <div className='leftcircle'>
            <FontAwesomeIcon icon={faCircle} className="circle-img1" />
          </div>
          <div className="leftarrow">
            <FontAwesomeIcon icon={faLeftLong} className="arrow-img1" />
          </div>
        </div>
        <div className='arrows1 display-flex justify-align' onClick={handleNextSlide} disabled={currentPage === totalPages - 1} >
          <div className='rightcircle'>
            <FontAwesomeIcon icon={faCircle} className="circle-img2" />
          </div>
          <div className='rightarrow'>
            <FontAwesomeIcon icon={faRightLong} className="arrow-img2" />
          </div>
        </div>
      </div>
    </div>
  )
}



export default Linechart;



{/* <button 
        onClick={handlePreviousSlide}
         disabled={currentPage === 0} 
         className="btn btn-loc" style={{ border: "2px solid black" }}>
          Previous
        </button>
        <button
          onClick={handleNextSlide}
          disabled={currentPage === totalPages - 1}
          className="btn btn-loc" style={{ border: "2px solid black" }}
        >
          Next
        </button> */}