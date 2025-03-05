// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const Charty = () => {
//   useEffect(() => {
//     const xValues = ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9"];
//     const yValues = [44, 40, 24, 44, 24, 17, 30, 15, 36];
//     const barColors = "grey";

//     new Chart("Charty", {
//       type: "bar",
//       data: {
//         labels: xValues,
//         datasets: [{
//           backgroundColor: barColors,
//           data: yValues
//         }]
//       },
//       options: {
//         legend: { display: false },
//         scales: {
//           y: {
//             beginAtZero: true,
//             stacked: true
//           }
//         }
//       }
//     });
//   }, []);
// }

// export default Charty

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Charty = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
        const xValues = ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9"];
        const yValues = [44, 40, 24, 44, 24, 17, 30, 15, 36];
        const barColors = "grey";


    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
     chartInstanceRef.current = new Chart(chartRef.current, {
       type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: { display: false },
            scales: {
              y: {
                beginAtZero: true,
                stacked: true
              }
            }
          }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} id="Charty" style={{ width: '90%', maxWidth: '500px', margin: 'auto' }}></canvas>;
};

export default Charty;