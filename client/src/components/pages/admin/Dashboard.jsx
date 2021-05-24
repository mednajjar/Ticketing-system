import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# Canceled tickets',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# Assigned tickets',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# Resolved tickets',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


const Dashboard = () => {
    
    return (
        <div className="container mt-5">
            <h1 className="text-center">Welcome To Dashboard</h1>
            <div className='header'>
            <h1 className='title'>Ticket details</h1>
            <div className='links'>
                <p>
                Technicien name
                </p>
            </div>
            </div>
            <Bar data={data} options={options} />
            
        </div>
    )
}

export default Dashboard
