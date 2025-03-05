import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './dashboard.style.css';
import '../../styles/responsive.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import AdminDashboard from '../AdminDashboard';
import Attendance from '../../components/Attendance';
import StudentsTask from '../../components/StudentsTask';
import Students from '../../components/Students';
import Announcement from '../../components/Announcement';
import STask from '../../components/STask';
import SubTask from '../../components/SubTask';

const Dashboard = () => {
  return (
    <div className='cont'>
      <div className='container-fluid'>
        <div className='sidebar-dt'>
          <Sidebar />
        </div>

        <div className='content-dt'>
          <Header />
          <div className='content-body'>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/students-task" element={<StudentsTask />} />
              <Route path="/students" element={<Students />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/s-task" element={<STask />} />
              <Route path="/sub-task" element={<SubTask />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;