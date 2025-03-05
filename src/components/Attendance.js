import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/attendance.css';
import Charty from '../charts/Charty';
import Percent from '../charts/Percent';

const Attendance = () => {
  
  return (
    <div className="attendance">
      <section className="main" style={{width:"100%"}}>

        <div className="flex">
          <div className="left">
            <div className="grid-group">
              <div className="grid">
                <div className="grid-p">
                  <p>Total Students</p>
                  <p>50</p>
                </div>
                <div className="grid-points"><i className="fa fa-users" aria-hidden="true"></i></div>
              </div>

              <div className="grid">
                <div className="grid-p">
                  <p>Total Staffs</p>
                  <p>10</p>
                </div>
                <div className="grid-points"><i className="fa fa-users" aria-hidden="true"></i></div>
              </div>
            </div>

            <div className="table">
              <table id="myTable">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Date</th>
                    <th>Number of<br /> Attendance</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>04-02-2024</td>
                    <td>45</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Individual</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>04-02-2024</td>
                    <td>48</td>
                    <td>1pm-04:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Group</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>04-02-2024</td>
                    <td>49</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>04-02-2024</td>
                    <td>42</td>
                    <td>1pm-04:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Individual</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>04-02-2024</td>
                    <td>49</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>04-02-2024</td>
                    <td>48</td>
                    <td>1pm-04:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Group</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>04-02-2024</td>
                    <td>45</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Individual</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>04-02-2024</td>
                    <td>49</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>04-02-2024</td>
                    <td>48</td>
                    <td>1pm-04:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Group</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>04-02-2024</td>
                    <td>49</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>04-02-2024</td>
                    <td>45</td>
                    <td>9am-12:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Individual</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>04-02-2024</td>
                    <td>48</td>
                    <td>1pm-04:30pm</td>
                    <td>3hrs 30mins</td>
                    <td>Group</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right">
            <div className="calendar">
              <h4>May 2023</h4>
              <table id="myCalendar">
                <thead>
                  <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td style={{backgroundColor: 'blue', color: '#fff'}}>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td className="grey">1</td>
                    <td className="grey">2</td>
                    <td className="grey">3</td>
                    <td className="grey">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="graph">
              <h4>Attendance graph representation</h4>
              <canvas id="Charty" style={{ width: '0', maxWidth: '200px' }}></canvas>
              <Charty />
            </div>
            

            <div className="percentage">
              <h4>Attendance percentage</h4>
              <canvas id="Percent" style={{  maxWidth: '200px'}}></canvas>
              <Percent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attendance;