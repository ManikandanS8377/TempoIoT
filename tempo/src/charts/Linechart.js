import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

function Linechart({ chartData }) {

   const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display:true,
      },
      
    },
    
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
      
    },
    
  };
   
    return (
      <div className='graph'>
        <div className='graph_first'>
          <div className='first_box'>
              <div className='line_container'>
              <Line data={chartData} options={options} />
              </div> 
          </div>
        <div className='second_box'>
          <div className='line_container'>
              <Line data={chartData} options={options} />
          </div> 
        </div>
      </div>
      <div className='graph_second'>
          <div className='third_box'>
            <div className='line_container'>
              <Line data={chartData} options={options}/>
            </div> 
          </div>
          <div className='fourth_box'>
            <div className='line_container'>
              <Line data={chartData}  options={options}/>
            </div>
          </div>
          </div>       
      </div>
    
    )
  }
  
  
  
  export default Linechart;