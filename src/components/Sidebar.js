import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <section className="sidebar">
      <div className="flex">
        <i className="fa fa-id-badge" aria-hidden="true"></i>
        <p>Harvoxx</p>
        <p>Website development (Frontend)</p>
        <p id="p">DSP300-C3</p>
      </div>

      <div className="container">
        <div className="s-bar" onClick={() => navigate('/dashboard')}>
          <div><i className="fa fa-university" aria-hidden="true"></i></div>
          <p>Dashboard</p>
        </div>

        <div className="s-bar" onClick={() => navigate('/dashboard/attendance')}>
          <div><i className="fa fa-list-alt" aria-hidden="true"></i></div>
          <p>Attendance</p>
        </div>

        <div className="s-bar" onClick={() => navigate('/dashboard/students-task')}>
          <div><i className="fa fa-calendar" aria-hidden="true"></i></div>
          <p>Student Task</p>
        </div>

        <div className="s-bar" onClick={() => navigate('/dashboard/students')}>
          <div><i className="fa fa-users" aria-hidden="true"></i></div>
          <p>Students</p>
        </div>

        <div className="s-bar" onClick={() => navigate('/dashboard/announcement')}>
          <div><i className="fa fa-bullhorn" aria-hidden="true"></i></div>
          <p>Announcements</p>
        </div>
      </div>

      <div className="s-bar" onClick={() => navigate('/')}>
        <div><i className="fa fa-sign-out" aria-hidden="true"></i></div>
        <p>Log out</p>
      </div>
    </section>
  );
};

export default Sidebar;