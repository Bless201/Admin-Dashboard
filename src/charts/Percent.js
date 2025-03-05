// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const Percent = () => {
//     useEffect(() => {

//         const yValuesPercent = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
//         const barColorsPercent = [
//         "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "lightgrey"
//         ];

//         new Chart("Percent", {
//         type: "doughnut",
//         data: {
//             datasets: [{
//             backgroundColor: barColorsPercent,
//             data: yValuesPercent
//             }]
//         }
//         });
//     }, []);
// }

// export default Percent;


import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Percent = () => {
  const percentRef = useRef(null);
  const percentInstanceRef = useRef(null);

  useEffect(() => {
    const yValuesPercent = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const barColorsPercent = [
        "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "lightgrey"
   ];
    if (percentInstanceRef.current) {
      percentInstanceRef.current.destroy();
    }

    if (percentRef.current) {
      percentInstanceRef.current = new Chart(percentRef.current, {
        type: "doughnut",
        data: {
            datasets: [{
                backgroundColor: barColorsPercent,
                data: yValuesPercent
            }]
        }
      });
    }

    return () => {
      if (percentInstanceRef.current) {
        percentInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={percentRef} id="Percent" style={{ width: '70%', maxWidth: '400px', margin: 'auto' }}></canvas>;
};

export default Percent;
