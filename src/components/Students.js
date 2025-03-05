import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/students.css';
import { Link } from 'react-router-dom';

const Students = () => {
  return (
    <div className="students">
      <section className="main" style={{width:"100%"}}>
        
        <div className="top">
          <div className="grid-group" style={{gridTemplateColumns: 'repeat(3, 325px)'}}>
            <div className="grid">
              <div className="grid-p">
                <p>Total Students</p>
                <p>50</p>
              </div>
              <div className="grid-points"><i className="fa fa-users" aria-hidden="true"></i></div>
            </div>

            <div className="grid">
              <div className="grid-p">
                <p>Total Male</p>
                <p>23</p>
              </div>
              <div className="grid-points"><i className="fa fa-male" aria-hidden="true"></i></div>
            </div>

            <div className="grid">
              <div className="grid-p">
                <p>Total Female</p>
                <p>23</p>
              </div>
              <div className="grid-points"><i className="fa fa-female" aria-hidden="true"></i></div>
            </div>
          </div>

          <div className="table">
            <div className="t-header">
              <h4>S.NO</h4>
              <h4>Name</h4>
              <h4>Admission No</h4>
              <h4>Phone No</h4>
              <h4>Stack</h4>
              <h4>Points</h4>
            </div>

            <div className="t-table">
              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>1</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0000</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>500</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>2</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0001</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>450</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>3</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0000</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>300</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>4</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0001</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>500</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>5</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0000</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>700</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>6</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0001</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>600</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>7</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0000</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>500</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>8</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0001</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>650</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>9</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0000</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>400</p>
                </Link>
              </div>

              <div>
                <Link to="/dashboard/sub-task" className="flex">
                  <p>10</p>
                  <p>Jonny Doey</p>
                  <p>Hax/Dsp300-c3/0001</p>
                  <p>081563902816</p>
                  <p>Web Development</p>
                  <p>300</p>
                </Link>
              </div>
            </div>

            <div className="page" >
              <p>Number per page
                <select>
                  <option>20</option>
                </select>
              </p>

              <div className="div">
                <p>Prev</p>
                <div className="s-div">1</div>
                <p>Next</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;