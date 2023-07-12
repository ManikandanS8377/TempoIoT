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
  const [lenghtstate, setlenghtstate] = useState();
  const [updateing_div, setupdateing_div] = useState("defaul value")
  const grapTotlaRes = useRef({});
  const graphsPerFrame = 4;
  const totalPages = Math.ceil(lenghtstate / graphsPerFrame);

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

  const [history_msg, sethistory_msg] = useState({})
  // useEffect(() => {
  //   const handleDataUpdate = (message) => {
  //     console.log(message);
  //     sethistory_msg(message);
  //   };
  // })



  useEffect(() => {
    const handleDataUpdate = async (message) => {
      console.log("message : ",message);
      grapTotlaRes.current = message;
      fetchData(fromdate, todate, handlelive, globalfilter, message, 0);
      // console.log(updateing_div);
      setlenghtstate(message.length)
      // console.log(message);
    };
    // console.log(history_msg);
    const inserted_message_fun = async (inserted_message) => {
      // const response_to_update = await fetch('http://127.0.0.1:4000/user');
      // const data1 = await response_to_update.json();
      // inserted_message
      // var message
      fetchData(fromdate, todate, handlelive, globalfilter, history_msg, inserted_message)
      // for (var i = 0; i < 2; i++) {
      //   // console.log(length);
      //   const mac_to_conform = "a0_a0_a0_a0_a0_a0"

      //   getChartData1(selectedOption2[i], message[mac_to_conform], i);
      //   // console.log("else", selectedOption2[i], message[1], i);

      // }
    }



    socket.on('message', (handleDataUpdate));
    socket.on('inserted_message', (inserted_message_fun))



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

  const fetchData = async (fromdate, todate, handlelive, globalfilter, message, inserted_message) => {
    // console.log(fromdate, todate, handlelive, globalfilter, message);
    // console.log(inserted_message);

    try {
      const response1 = await fetch('http://127.0.0.1:4000/user');
      const data1 = await response1.json();
      const length = data1.length;

      setdevicedata(data1)
      var latestData = [];

      // if (inserted_message) {
      //   const obj_key = Object.keys(inserted_message)[0];

      //   for (var i = 0; i < length; i++) {
      //     const mac_to_conform = data1[i].device_mac_address.replace(/[:\-]/g, "_")
      //     // console.log("latestdata : ",message);
      //     if (obj_key == mac_to_conform) {
      //       console.log("incomming data :", inserted_message);
      //       console.log("updating div : ",updateing_div);
      //       console.log(inserted_message[obj_key]);
      //       // setupdateing_div(inserted_message[obj_key])
      //       // getChartData1(selectedOption2[i], inserted_message[obj_key], i);
      //     }

      //   }
      // }




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
        // latestData = message.filter(values => {
        // values.map((value, index) => {
        //   console.log(value);
        //   const itemDate = value.Timestamp.split(" ")[0];
        //   if (itemDate === formatteddate){
        //     console.log("mm");
        //     return value;
        //   }
        //   console.log("values ---- ",values);
        // })
        // values.map((value, index) => {
        // if (itemDate === formatteddate) {
        //   console.log("ss");
        //   console.log(itemDate, formatteddate);
        //   return a;
        // }
        // return a;

        //   console.log(value);
        // })
        // if (itemDate === formatteddate) {
        //   return message;
        // }
        // })
      }
      // const mac_to_conform = data1[1].device_mac_address.replace(/[:\-]/g, "_")
      // console.log(mac_to_conform);

      // console.log("msg", message[mac_to_conform]);
      // setLatestData(message["a2_a2_a2_a2_a2_a2"]);



      if (globalfilter !== 'Output Model' && globalfilter !== null && globalfilterstate === true) {
        for (var i = 0; i < devicedata.length; i++) {
          // console.log("ggg");
          getChartData1(globalfilter, latestData, i);
        }
      }
      else {
        for (var i = 0; i < length; i++) {
          // console.log(length);
          const mac_to_conform = data1[i].device_mac_address.replace(/[:\-]/g, "_")
          // console.log("else", selectedOption2[i], message[1], i);
          console.log("grapTotlaRes",grapTotlaRes.current);
          if (inserted_message) {
            // console.log(message);
            let finalValue= grapTotlaRes.current; 
            console.log("grapTotlaRes",grapTotlaRes.current);
            console.log(inserted_message);
            // getChartData1(selectedOption2[i], message[mac_to_conform], i);

            const obj_key = Object.keys(inserted_message)[0];
    
            // for (var i = 0; i < length; i++) {
              // const mac_to_conform = data1[i].device_mac_address.replace(/[:\-]/g, "_")
              // console.log("latestdata : ",message);
              if (obj_key == mac_to_conform) {
                // console.log("mac_to_conform:", mac_to_conform);
                // console.log("updating div : ",updateing_div);
                console.log(inserted_message[obj_key]);
                  for (const key in finalValue) {
                   if(obj_key === key){
                    console.log("keys : ", obj_key , key);
                    finalValue[key] = inserted_message[obj_key]
                   }
                  }
                // setupdateing_div(inserted_message[obj_key])
                 getChartData1(selectedOption2[i], finalValue[obj_key], i);
              }
    
            // }
          }else{
            getChartData1(selectedOption2[i], message[mac_to_conform], i);

          }

        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData1 = (selectedOption2 = "ALL", latestData, index) => {
    // console.log(selectedOption2 = "ALL", latestData, index);
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
        // console.log(selectedOption2="ALL", latestData, index)
        updatedData[index] = {
          ...updatedData[index],
          labels: latestData.map(data => data.Timestamp.split(" ")[0]),
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

  // console.log(userData1[0]);
  // console.log(userData1[1]);
  // console.log(devicedata[1]?.device_mac_address);
  return (
    <div style={{ width: "100%" }}>
      <div className="grid-container">
        {displayedItems.map((item) => (
          <div key={item} className="grid-item" >
            <div className="graph-header display-flex" style={{ justifyContent: "center", alignItems: "center" }}>
              <label><b>{devicedata[item]?.device_mac_address || 'temperature assert'}</b></label>
              {devicedata[item]?.device_mac_address === "aa" && <div>ama</div>}
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
            {/* <div>{userData1[item]}</div> */}
            <div className="graph-size"><Line data={userData1[item]} options={options} />{item}</div>
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

