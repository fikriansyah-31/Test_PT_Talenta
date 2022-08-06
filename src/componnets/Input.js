import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import {Bar} from 'react-chartjs-2'



function Input({ chartData }) {
    return <Bar data={chartData} />;
  }
  
  export default Input;