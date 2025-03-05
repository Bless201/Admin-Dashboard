import React, { useEffect, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/dashboard.css';
import Chart from 'chart.js/auto';
import Sidebar from '../components/Sidebar';
import Image from '../image/logo.6ba0579820bd9bee66d8 (1).png'
import Header from '../components/Header';


const AdminDashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const yValues = [35, 70, 40, 24, 35];
    const barColors = [
      "rgb(185, 7, 185)",
      "blue",
      "#d3b012",
      "rgb(149, 212, 54)",
      "orangered"
    ];

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart("myChart", {
      type: "doughnut",
      data: {
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <section className="main" style={{width:"100%"}}>
       

        <div className="grid-group" style={{gridTemplateColumns: 'repeat(3, 335px)', gridTemplateRows: 'repeat(2, 1fr',}}>
          <div className="grid">
            <div className="grid-p">
              <p>Total Students</p>
              <p>50</p>
            </div>
            <div className="grid-points"><i className="fa fa-users" aria-hidden="true"></i></div>
          </div>

          <div className="grid">
            <div className="grid-p">
              <p>Total Tasks</p>
              <p>04</p>
            </div>
            <div className="grid-icon"><i className="fa fa-list-alt" aria-hidden="true"></i></div>
          </div>

          <div className="grid">
            <div className="grid-p">
              <p>Classes Held</p>
              <p>10</p>
            </div>
            <div className="grid-points"><i className="fa fa-window-restore" aria-hidden="true"></i></div>
          </div>

          <div className="grid">
            <div className="grid-p">
              <p>Student Attendance</p>
              <p>35</p>
            </div>
            <div className="grid-icon"><i className="fa fa-calendar-check-o" aria-hidden="true"></i></div>
          </div>

          <div className="grid">
            <div className="grid-p">
              <p>Students Points</p>
              <p>20179</p>
            </div>
            <div className="grid-points"><i className="fa fa-star" aria-hidden="true"></i></div>
          </div>

          <div className="grid">
            <div className="grid-p">
              <p>Classes Missed</p>
              <p>0</p>
            </div>
            <div className="grid-icon"><i className="fa fa-calendar-times-o" aria-hidden="true"></i></div>
          </div>
        </div>

        <div className="container">
          <div className="contain">
            <h4>DSP-300 Students Chart</h4>
            <div className="div-flex">
              <div className="flex">
                <div className="blue"></div>
                <p>Data Analysis</p>
              </div>

              <div className="flex">
                <div className="purple"></div>
                <p>Product Design</p>
              </div>

              <div className="flex">
                <div className="orange"></div>
                <p>Web Development</p>
              </div>

              <div className="flex">
                <div className="green"></div>
                <p>Graphics Design</p>
              </div>

              <div className="flex">
                <div className="gold"></div>
                <p>Cybersecurity</p>
              </div>
            </div>

            <canvas id="myChart" style={{ width: '100%', maxWidth: '240px', margin: 'auto' }}></canvas>
          </div>

          <div className="div-block">
            <div className="calendar">
              <div className="flex">
                <h4>February</h4>
                <div className="flex-1">
                  <h5>Add reminder </h5>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>

              <table id="myCalendar">
                <thead>
                  <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th className="border" style={{ borderTopLeftRadius: '7px', borderTopRightRadius: '7px', paddingTop: '10px' }}>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td>9</td>
                    <td>10</td>
                    <td className="border" style={{ borderBottomRightRadius: '7px', borderBottomLeftRadius: '7px', paddingBottom: '10px' }}>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr />

            <h4 className='class'>Upcoming Classes</h4>
            <div className="class-event">
              <div className="event">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <div className="event-p">
                  <h4>23-04-2024</h4>
                  <p>10:00am  <span>12:20pm</span></p>
                </div>
              </div>

              <div className="event">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <div className="event-p">
                  <h4>23-04-2024</h4>
                  <p>10:00am  <span>12:20pm</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;