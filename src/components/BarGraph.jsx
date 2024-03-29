import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import moment from 'moment';
import 'chartjs-adapter-moment';

const BarGraph = () => {
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
     
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data1);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const ipCounts = {};
      data.forEach((row) => {
        const timestamp = moment(row.timestamp).format('YYYY-MM-DD HH:mm:ss');
        const ip = row.ip;

        if (ipCounts[timestamp]) {
          ipCounts[timestamp].add(ip);
        } else {
          ipCounts[timestamp] = new Set([ip]);
        }
        console.log(ipCounts[timestamp]);
      });
      const labels = Object.keys(ipCounts);
      const counts = Object.values(ipCounts).map((set) => set.size);

      const ctx = document.getElementById('barGraphCanvas').getContext('2d');
      Chart.register(...registerables);
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Number of IP Addresses',
              data: counts,
              backgroundColor: 'rgba(50, 50, 125, 0.8)',
              
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Timestamp',
                color: 'black',
              },
              ticks: {
                color: 'black',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Number of IP Addresses',
                color: 'black',
              },
              ticks: {
                color: 'black',
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.2)',
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
      
    
        <canvas id="barGraphCanvas" />
    
  );
};

export default BarGraph;