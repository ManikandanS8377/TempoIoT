import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

function Linechart({ chartData }) {
    return (
      <div style={{ width: "1000px", height: "800px" }}>
        <Line data={chartData} />
      </div>
    )
  }
  
  
  
  export default Linechart;