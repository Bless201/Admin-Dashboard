import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/sub-task.css';

const SubTask = () => {
  return (
    <div className="sub-task">
      <section className="main" style={{width:"100%"}}>
        <div className="top">
          <div className="grid-group">
            <div className="grid">
              <div className="grid-p">
                <p>Submitted Task</p>
                <p>02</p>
              </div>
              <div className="grid-points"><i className="fa fa-list-alt" aria-hidden="true"></i></div>
            </div>

            <div className="grid">
              <div className="grid-p">
                <p>Classes Attended</p>
                <p>15</p>
              </div>
              <div className="grid-points"><i className="fa fa-users" aria-hidden="true"></i></div>
            </div>
          </div>

          <div className="flex">
            <div className="left">
              <button>Name</button>
              <button>Stack</button>
              <button>Admission Number</button>
              <button>Phone Number</button>
              <button>Points</button>
            </div>

            <div className="right" style={{display: 'block', width: '100%'}}>
              <div><input placeholder="Frankly Kim" /></div>
              <div><input placeholder="Web Development" /></div>
              <div><input placeholder="HAX/DSP300-C3/0000" /></div>
              <div><input placeholder="08154627826" /></div>
              <div><input placeholder="300" /></div>
            </div>
          </div>

          <div className="page">
            <button id="yellow">Suspend Student</ button>
            <button>Grade Student</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubTask;