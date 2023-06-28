import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function Linechart({ fromdate, todate, handlelive, globalfilter }) {

  //data handling state
  const [latestData, setLatestData] = useState([]);
  const [devicedata, setdevicedata] = useState([]);
  const [globaldata, setglobaldata] = useState("");
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
      fetchData(fromdate, todate)
    }
    if (handlelive) {
      fetchData(fromdate, todate, handlelive)
    }
    if (globalfilter) {
      setglobaldata(globalfilter)
    }
  }, [fromdate, todate, handlelive, globalfilter]);

  const fetchData = async (fromdate, todate, handlelive) => {
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
      if (fromdate !== "" && todate !== "") {
        latestData = data.filter(values => {
          const itemDate = values.Timestamp;
          if (fromdate <= itemDate && todate >= itemDate) {
            return data;
          }
        })
      } else if (handlelive === true && fromdate !== "" && todate === "") {
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
      if (globaldata !== 'ALL' && globaldata !== 'Output Model') {
        getChartData1(globaldata, latestData)
      } else {
        getChartData1(latestData)
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
              label: "Flow",
              data: latestData.map(data => data.Temperature),
              borderColor: "green",
              pointBackgroundColor: "white",
              borderWidth: 1,
            },
            {
              label: "Flow",
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
  };

  useEffect(() => {
    fetchData(fromdate, todate, handlelive);
    const interval = setInterval(() => {
      fetchData(fromdate, todate, handlelive);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


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
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePreviousSlide} disabled={currentPage === 0} className="btn btn-loc" style={{ border: "2px solid black" }}>
          Previous
        </button>
        <button
          onClick={handleNextSlide}
          disabled={currentPage === totalPages - 1}
          className="btn btn-loc" style={{ border: "2px solid black" }}
        >
          Next
        </button>
      </div>
    </div>
  )
}



export default Linechart;