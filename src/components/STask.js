import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/s-task.css';
import { Link, useNavigate } from 'react-router-dom';

const STask = () => {
  const navigate = useNavigate();

  return (
    <div className="s-task">
    
      <section className="main" style={{width:"100%", marginRight: '60%'}}>

        <div className="top"  style={{backgroundColor: '#fff', marginLeft: '30px'}} >
          <div className="top-div">
            <div className="left">
              <div className="div">
                <h4>Title</h4>
                <div><input /></div>
              </div>

              <div className="div">
                <h4>Assigned To</h4>
                <div><input /></div>
              </div>

              <div className="div">
                <h4>Created By</h4>
                <div><input /></div>
              </div>

              <div className="div" id="div-block">
                <h4>Description</h4>
                <div><input /></div>
              </div>
            </div>

            <div className="right" style={{display: 'block',position:'relative',
              left: '0em'}}>
              <div className="div">
                <h4>Task Status</h4>
                <div><input /></div>
              </div>

              <div className="div" >
                <h4>Task Type</h4>
                <div><input /></div>
              </div>

              <div className="div">
                <h4>Group</h4>
                <div><input /></div>
              </div>

              <div className="div" id='div-flex' >
                <h4>Start Date</h4>
                <div ><input /><i className="fa fa-list-alt" aria-hidden="true"></i></div>
              </div>

              <div className="div" >
                <h4>End Date</h4>
                <div ><input /><i className="fa fa-list-alt" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>

          <div className="document">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <Link to="/upload">Upload Document</Link>
          </div>

          <div className="page-btn">
            <button id="yellow" onClick={() => navigate('/upload')}>Submit</button>
            <button>Cancel</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default STask;