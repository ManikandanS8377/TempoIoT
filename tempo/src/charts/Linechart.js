import React,{useState} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

function Linechart({ chartData }) {

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
   
    return (
      <div className='graph'>
        <div className='graph_first'>
          <div className='first_box'>
              <div className='line_container'> 
                <div className="label_container">
                  <label>Temperature - Assert1</label>
                  <div className="dropdown_container1">
                  <button className=" dropdown_toggle1" onClick={dropdown1}>
                  Dropdown
                  </button>
                  {isOpen1 && (
                    <div className="dropdown_menu1">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                     <a href="#">Option 3</a>
                  </div>
                 )}
                </div>
              </div>
               <div className="graphs"><Line data={chartData} options={options}/></div>
                
              </div> 
              
          </div>
        <div className='second_box'>
          <div className='line_container'>
          <div className="label_container">
                  <label>Temperature - Assert2</label>
                  <div className="dropdown_container1">
                  <button className=" dropdown_toggle1" onClick={dropdown2}>
                  Dropdown
                  </button>
                  {isOpen2 && (
                    <div className="dropdown_menu1">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                     <a href="#">Option 3</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={chartData} options={options}/></div>
          </div> 
        </div>
      </div>
      <div className='graph_second'>
          <div className='third_box'>
            <div className='line_container'>
            <div className="label_container">
                  <label>Temperature - Assert1</label>
                  <div className="dropdown_container1">
                  <button className=" dropdown_toggle1" onClick={dropdown3}>
                  Dropdown
                  </button>
                  {isOpen3 && (
                    <div className="dropdown_menu1">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                     <a href="#">Option 3</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={chartData} options={options}/></div>
            </div> 
          </div>
          <div className='fourth_box'>
            <div className='line_container'>
            <div className="label_container">
                  <label>Temperature - Assert2</label>
                  <div className="dropdown_container1">
                  <button className=" dropdown_toggle1" onClick={dropdown4}>
                    Dropdown
                  </button>
                  {isOpen4 && (
                    <div className="dropdown_menu1">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                     <a href="#">Option 3</a>
                  </div>
                 )}
                </div>
              </div>
              <div className="graphs"><Line data={chartData} options={options}/></div>
            </div>
          </div>
          </div>       
      </div>
    
    )
  }
  
  
  
  export default Linechart;