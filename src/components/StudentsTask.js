// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import '../styles/students-task.css';
// import STask from './STask';
// // import { useNavigate } from 'react-router-dom';

// const StudentsTask = () => {
//   // const navigate = useNavigate();

//   return (
//     <div className="students-task">
      
//       <section className="main" style={{width:"100%"}}>
        
//         <div className="table">
//           <div className="t-header">
//             <h4>S.NO</h4>
//             <h4>Stack</h4>
//             <h4>Task</h4>
//             <h4>Due date</h4>
//             <h4>Admission No</h4>
//             <h4>Status</h4>
//           </div>
//           <div className="t-table">
//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>1</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </a>
//             </div>
//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>2</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>3</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>4</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>5</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>6</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>7</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>8</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>9</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </a>
//             </div>

//             <div>
//               <a href="s-task.html" className="flex">
//                 <p>10</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </a>
//             </div>
            
//           </div>
//           <div className="page" style={{ display: 'flex',justifyContent: 'space-between'}}>
//             <p>Number per page
//               <select>
//                 <option>20</option>
//               </select>
//             </p>
//             <div className="div">
//               <p>Prev</p>
//               <div className="s-div">1</div>
//               <p>Next</p>
//             </div>
//           </div>
//           <div className="page" style={{ display: 'flex',justifyContent: 'space-between'}}>
//             <button>Send a message</button>
//             <button>Create a task</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StudentsTask;

// import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import '../styles/students-task.css';
// import { Link } from 'react-router-dom';

// const StudentsTask = () => {
//   return (
//     <div className="students-task">
//       <section className="main" style={{ width: "100%" }}>
//         <div className="table">
//           <div className="t-header">
//             <h4>S.NO</h4>
//             <h4>Stack</h4>
//             <h4>Task</h4>
//             <h4>Due date</h4>
//             <h4>Admission No</h4>
//             <h4>Status</h4>
//           </div>
//           <div className="t-table">
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>1</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>2</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>3</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>4</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>5</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>6</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>7</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>8</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/dashboard/s-task" className="flex">
//                 <p>9</p>
//                 <p>Web Development</p>
//                 <p>Individual</p>
//                 <p>3rd Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0000</p>
//                 <p>Submitted</p>
//               </Link>
//             </div>
//             <div>
//               <Link to="/s-task" className="flex">
//                 <p>10</p>
//                 <p>Web Development</p>
//                 <p>Group</p>
//                 <p>5th Feb, 2024</p>
//                 <p>Hax/Dsp300-c3/0001</p>
//                 <p>Pending</p>
//               </Link>
//             </div>
//           </div>
//           <div className="page" style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <p>Number per page
//               <select>
//                 <option>20</option>
//               </select>
//             </p>
//             <div className="div">
//               <p>Prev</p>
//               <div className="s-div">1</div>
//               <p>Next</p>
//             </div>
//           </div>
//           <div className="page" style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <button>Send a message</button>
//             <button>Create a task</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StudentsTask;


import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/students-task.css';
import { Link } from 'react-router-dom';

const StudentsTask = () => {
  return (
    <div className="students-task">
      <section className="main" style={{ width: "100%" }}>
        <div className="table">
          <div className="t-header">
            <h4>S.NO</h4>
            <h4>Stack</h4>
            <h4>Task</h4>
            <h4>Due date</h4>
            <h4>Admission No</h4>
            <h4>Status</h4>
          </div>
          <div className="t-table">
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>1</p>
                <p>Web Development</p>
                <p>Individual</p>
                <p>3rd Feb, 2024</p>
                <p>Hax/Dsp300-c3/0000</p>
                <p>Submitted</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>2</p>
                <p>Web Development</p>
                <p>Group</p>
                <p>5th Feb, 2024</p>
                <p>Hax/Dsp300-c3/0001</p>
                <p>Pending</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>3</p>
                <p>Web Development</p>
                <p>Individual</p>
                <p>3rd Feb, 2024</p>
                <p>Hax/Dsp300-c3/0000</p>
                <p>Submitted</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>4</p>
                <p>Web Development</p>
                <p>Group</p>
                <p>5th Feb, 2024</p>
                <p>Hax/Dsp300-c3/0001</p>
                <p>Pending</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>5</p>
                <p>Web Development</p>
                <p>Individual</p>
                <p>3rd Feb, 2024</p>
                <p>Hax/Dsp300-c3/0000</p>
                <p>Submitted</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>6</p>
                <p>Web Development</p>
                <p>Group</p>
                <p>5th Feb, 2024</p>
                <p>Hax/Dsp300-c3/0001</p>
                <p>Pending</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>7</p>
                <p>Web Development</p>
                <p>Individual</p>
                <p>3rd Feb, 2024</p>
                <p>Hax/Dsp300-c3/0000</p>
                <p>Submitted</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>8</p>
                <p>Web Development</p>
                <p>Group</p>
                <p>5th Feb, 2024</p>
                <p>Hax/Dsp300-c3/0001</p>
                <p>Pending</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>9</p>
                <p>Web Development</p>
                <p>Individual</p>
                <p>3rd Feb, 2024</p>
                <p>Hax/Dsp300-c3/0000</p>
                <p>Submitted</p>
              </Link>
            </div>
            <div>
              <Link to="/dashboard/s-task" className="flex">
                <p>10</p>
                <p>Web Development</p>
                <p>Group</p>
                <p>5th Feb, 2024</p>
                <p>Hax/Dsp300-c3/0001</p>
                <p>Pending</p>
              </Link>
            </div>
          </div>
          <div className="page" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <div className="page" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button>Send a message</button>
            <button>Create a task</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsTask;