import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function Linechart() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  
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
  
  const [selectedOption1, setSelectedOption1] = useState("ALL");
  const [selectedOption2, setSelectedOption2] = useState("ALL");
  const [selectedOption3, setSelectedOption3] = useState("ALL");
  const [selectedOption4, setSelectedOption4] = useState("ALL");
  
  
  
 
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


  const [latestData, setLatestData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/sendData");
      const data = await response.json();
      const latestData = data.slice(-6);
      setLatestData(latestData);
      getChartData1(selectedOption1,latestData)
      getChartData2(selectedOption2,latestData)
      getChartData3(selectedOption3,latestData)
      getChartData4(selectedOption4,latestData)
    } catch (error) {
      console.error(error);
    }
  };
 
  const getChartData1 =(selectedOption1,latestData) => {
      if (selectedOption1 === "Option 1") {
        setUserData1((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else if (selectedOption1 === "Option 2") {
        setUserData1((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      } else if (selectedOption1 === "Option 3") {
        setUserData1((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else {
        setUserData1((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
            {
              ...prevState.datasets[1],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      }
    }

    const getChartData2 =(selectedOption2,latestData) => {
      if (selectedOption2 === "Option 1") {
        setUserData2((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else if (selectedOption2 === "Option 2") {
        setUserData2((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      } else if (selectedOption2 === "Option 3") {
        setUserData2((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else {
        setUserData2((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
            {
              ...prevState.datasets[1],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      }
    }

    const getChartData3 =(selectedOption3,latestData) => {
      if (selectedOption3 === "Option 1") {
        setUserData3((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else if (selectedOption3 === "Option 2") {
        setUserData3((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      } else if (selectedOption3 === "Option 3") {
        setUserData3((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else {
        setUserData3((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
            {
              ...prevState.datasets[1],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      }
    }

    const getChartData4 =(selectedOption4,latestData) => {
      if (selectedOption4 === "Option 1") {
        setUserData4((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else if (selectedOption4 === "Option 2") {
        setUserData4((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      } else if (selectedOption4 === "Option 3") {
        setUserData4((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
          ],
        }));
      } else {
        setUserData4((prevState) => ({
          ...prevState,
          labels: latestData.map((data) => data.name),
          datasets: [
            {
              ...prevState.datasets[0],
              label: "Temperature - Assert1",
              data: latestData.map((data) => data.age),
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 6,
              pointBackgroundColor: "white",
            },
            {
              ...prevState.datasets[1],
              label: "Temperature - Assert12",
              data: [20, 30, 40, 10, 25, 33],
              borderColor: "red",
              borderWidth: 1,
              pointRadius: 6,
            },
          ],
        }));
      }
    }
   
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [selectedOption1,selectedOption2,selectedOption3,selectedOption4]);
  

   const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display:false,
      },
      
    },
    
    scales: {
      x: {
        beginAtZero: true,
        display:true
      },
      y: {
        beginAtZero: true,
        ticks:{
          stepSize:10
        }
      },
      
    },
    
  };
  const handleDropdown1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(!isOpen1);
    getChartData1(option,latestData);
    fetch(option);
  };
  const handleDropdown2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(!isOpen2);
    getChartData2(option,latestData);
  };
  
  const handleDropdown3 = (option) => {
    setSelectedOption3(option);
    setIsOpen3(!isOpen3);
    getChartData3(option,latestData);
  };
  
  const handleDropdown4 = (option) => {
    setSelectedOption4(option);
    setIsOpen4(!isOpen4);
    getChartData4(option,latestData);
  };
  
    return (
      <div className='graph'>
        <div className='graph_first display-flex'>
          <div className='first_box display-flex justify-align'>
              <div className='line_container'> 
                <div className="label_container display-flex justify-align">
                  <label>Temperature - Assert1</label>
                  <div className="dropdown_container1">
                  <button className=" dropdown_toggle1" onClick={dropdown1}>
                  {selectedOption1}
                  </button>
                  {isOpen1 && (
                    <div className="dropdown_menu1 dashboard_dropdown-menu dropdown-colors">
                      <a  className="a-a" onClick={()=>handleDropdown1('Option 1')}>Option 1</a>
                      <hr className='hrs ' ></hr>
                      <a  className="a-a" onClick={()=>handleDropdown1('Option 2')}>Option 2</a>
                      <hr className='hrs ' ></hr>
                      <a  className="a-a" onClick={()=>handleDropdown1('Option 3')}>Option 3</a>
                      <hr className='hrs ' ></hr>
                      <a  className="a-a" onClick={()=>handleDropdown1('ALL')}>ALL</a>
                  </div>
                 )}
                </div>
              </div>
               <div className="graphs"><Line data={userData1} options={options}/></div>
                
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
                      <a className="a-a" onClick={()=>handleDropdown2('Option 1')}>Option 1</a>
                      <hr className='hrs ' ></hr>
                      <a className="a-a" onClick={()=>handleDropdown2('Option 2')}>Option 2</a>
                      <hr className='hrs ' ></hr>
                     <a  className="a-a" onClick={()=>handleDropdown2('Option 3')}>Option 3</a>
                     <hr className='hrs ' ></hr>
                     <a  className="a-a" onClick={()=>handleDropdown2('ALL')}>ALL</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={userData2} options={options}/></div>
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
                      <a className="a-a" onClick={()=>handleDropdown3('Option 1')}>Option 1</a>
                      <hr className='hrs ' ></hr>
                      <a className="a-a" onClick={()=>handleDropdown3('Option 2')}>Option 2</a>
                      <hr className='hrs ' ></hr>
                      <a className="a-a" onClick={()=>handleDropdown3('Option 3')}>Option 3</a>
                      <hr className='hrs ' ></hr>
                      <a  className="a-a" onClick={()=>handleDropdown3('ALL')}>ALL</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={userData3} options={options}/></div>
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
                      <a className="a-a" onClick={()=>handleDropdown4('Option 1')}>Option 1</a>
                      <hr className='hrs ' ></hr>
                      <a className="a-a" onClick={()=>handleDropdown4('Option 2')}>Option 2</a>
                      <hr className='hrs ' ></hr>
                      <a className="a-a" onClick={()=>handleDropdown4('Option 3')}>Option 3</a>
                      <hr className='hrs ' ></hr>
                      <a  className="a-a" onClick={()=>handleDropdown4('ALL')}>ALL</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={userData4} options={options}/></div>
            </div>
          </div>
          </div>       
      </div>
    
    )
  }
  
  
  
  export default Linechart;








