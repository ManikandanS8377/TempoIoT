import React, { useState, useEffect, useRef } from "react";

//import Line chart
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

//import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faCircle, faRightLong } from '@fortawesome/free-solid-svg-icons';



function Linechart({ fromdate, todate, handlelive, globalfilter, socket, globalfilterstate, globalfilterupdate }) {
  //data handling state
  const [LatestData, setLatestData] = useState([]);
  const [devicedata, setdevicedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [isOpen2, setIsOpen2] = useState([]);
  const [lenghtstate,setlenghtstate]=useState();

  const graphsPerFrame = 4;
  const totalPages = Math.ceil(lenghtstate/ graphsPerFrame);

  //declare state for graph
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
    const handleDataUpdate = (message) => {
      fetchData(fromdate, todate, handlelive, globalfilter, message);
      setlenghtstate(message.length)
    };
    socket.on('message', (handleDataUpdate));

    if (fromdate && todate) {
      console.log(LatestData)
      fetchData(fromdate, todate);
    }

    if (handlelive) {
      fetchData(fromdate, todate, handlelive);
    }
    return () => {
      socket.off('message', handleDataUpdate);
    };
  }, [fromdate, todate, handlelive, socket, LatestData]);

  const today = new Date();
  const year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, '0');
  const dates = String(today.getDate()).padStart(2, '0');
  const formatteddate = `${year}-${Month}-${dates}`;

  const fetchData = async (fromdate, todate, handlelive, globalfilter, message) => {
    try {
      const response1 = await fetch('http://127.0.0.1:4000/user');
      const data1 = await response1.json();
      const length = data1.length;
      setdevicedata(data1)

      var latestData=[];
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
        message.filter(values => {
          latestData = values.map((value, index) => {
            const itemDate = value.Timestamp.split(" ")[0];
            if (itemDate === formatteddate) {
              console.log(itemDate, formatteddate);
              return value;
            }
          });
        })
        // latestData = message
        //   .flatMap(values => {
        //     return values.filter(value => {
        //       const itemDate = value.Timestamp.split(" ")[0];
        //       return itemDate === formatteddate;
        //     });
        //   });
      }
      console.log("msg",latestData);
      setLatestData(latestData);
      

      if (globalfilter !== 'Output Model' && globalfilter !== null && globalfilterstate === true) {
        for (var i = 0; i < devicedata.length; i++) {
          getChartData1(globalfilter, latestData, i);
        }
      }
      else {
        for (var i = 0; i < length; i++) {
          getChartData1(selectedOption2[i], latestData, i);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData1 = (selectedOption2, latestData, index) => {
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
              fill: true,
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
              data: latestData.map(() => 25),
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 0,
              fill: true,
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
              fill: true,
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
              label: "Line",
              data: latestData.map(() => 25),
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 0,
              fill: true,
              backgroundColor: "rgb(245, 211, 211,0.5)",
              tension: 0,
            },
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
            }
          ],
        };
      }
      return updatedData;
    });
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
    setSelectedOption2(prevSelectedOption2 => {
      const updatedSelectedOption2 = [...prevSelectedOption2];
      updatedSelectedOption2[index] = option;
      return updatedSelectedOption2;
    });
    const newState = false;
    globalfilterupdate(newState);
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
    slideEndIndex = lenghtstate;
  }
  const displayedItems = [...Array(slideEndIndex - slideStartIndex)].map(
    (_, index) => index + slideStartIndex
  );

  const individual_grap_selection = useRef(null);
  const individual_grap_empty_space = (event) => {
    if (!individual_grap_selection.current.contains(event.target)) {
    }
  }
  useEffect(() => {
    document.addEventListener('click', individual_grap_empty_space);
    return () => {
      document.removeEventListener('click', individual_grap_empty_space);
    };
  }, [])

  return (
    <div style={{ width: "100%" }}>
      <div className="grid-container">
        {displayedItems.map((item) => (
          <div key={item} className="grid-item" >
            <div className="graph-header display-flex" style={{ justifyContent: "center", alignItems: "center" }}>
            <label><b>{devicedata[item]?.device_name || 'temperature assert'}</b></label>
              <div className="dropdown_container2">
                <button className=" btn-loc4" style={{ border: "1px solid black" }} onClick={() => dropdown2(item)} >
                  {selectedOption2[item] || 'ALL'}
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

