import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/announcement.css';

const Announcement = () => {
  return (
    <div className="announcement">
      <section className="main" style={{width:"100%"}}>

        <div className="top" style={{backgroundColor: '#fff', marginLeft: '30px'}}>
          <h4>New Announcement</h4>
          <div className="row">
            <p className="p">04/8/2024</p>
            <div className="row-div">
              <div className="row-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum harum dolores</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum</p>
              </div>
              <div className="row-points">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <i className="fa fa-edit" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <p className="p">04/8/2024</p>
            <div className="row-div">
              <div className="row-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum harum dolores</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum</p>
              </div>
              <div className="row-points">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <i className="fa fa-edit" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <p className="p">04/8/2024</p>
            <div className="row-div">
              <div className="row-p">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum harum dolores</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur delectus id ab ipsum natus earum</p>
              </div>
              <div className="row-points">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
                <i className="fa fa-edit" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="right">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <a href="/some-valid-path">Previous announcement</a>
          </div>

          <h4>Create Announcement</h4>
          <div className="rows"></div>

          <div className="page" style={{top: '-77em'}}>
            <button id="yellow">Submit</button>
            <button>Cancel</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcement;