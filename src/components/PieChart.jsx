import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

const PieChartComponent = () => {
  const [data, setData] = useState([]);
  const data1 = [
    {
     ip: '192.168.0.6',
     timestamp: '2023-05-01T10:00:02'
    },
    {
     ip: '192.168.0.5',
     timestamp: '2023-05-01T10:00:02'
    },
    {
     ip: '192.168.0.3',
     timestamp: '2023-05-01T10:00:01'
    },
    {
     ip: '192.168.1.6',
     timestamp: '2023-05-01T10:00:01'
    },
    {
     ip: '192.168.2.6',
     timestamp: '2023-05-01T10:00:01'
    },
    {
     ip: '192.168.0.7',
     timestamp: '2023-05-01T10:00:01'
    },
    {
     ip: '192.168.0.8',
     timestamp: '2023-05-01T10:00:03'
    },
    {
     ip: '192.168.0.9',
     timestamp: '2023-05-01T10:00:03'
    },
    {
     ip: '192.168.0.12',
     timestamp: '2023-05-01T10:00:04'
    },
    {
     ip: '192.168.3.6',
     timestamp: '2023-05-01T10:00:04'
    },
    {
     ip: '192.168.4.1',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.1.2',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.11.6',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.0.61',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.0.16',
     timestamp: '2023-05-01T10:00:01'
    },
    {
     ip: '192.168.67.6',
     timestamp: '2023-05-01T10:00:02'
    },
    {
     ip: '192.168.34.6',
     timestamp: '2023-05-01T10:00:03'
    },
    {
     ip: '192.168.0.10',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.0.67',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.0.34',
     timestamp: '2023-05-01T10:00:05'
    },
    {
     ip: '192.168.12.1',
     timestamp: '2023-05-01T10:00:04'
    },
]

  useEffect(() => {
    setData(data1);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const ipCounts = {};
      data.forEach((row) => {
        const ip = row.ip;

        if (ipCounts[ip]) {
          ipCounts[ip]++;
        } else {
          ipCounts[ip] = 1;
        }
      });

      const labels = Object.keys(ipCounts);
      const counts = Object.values(ipCounts);

      const ctx = document.getElementById('pieChartCanvas').getContext('2d');
      Chart.register(...registerables); // Register necessary chart controllers
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: counts,
              backgroundColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              color: 'white'
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">IP Distribution</h1>
      <div className="w-50">
        <canvas id="pieChartCanvas" />
      </div>
    </div>
  );
};

export default PieChartComponent;
