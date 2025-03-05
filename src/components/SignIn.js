// filepath: /C:/Users/user/Desktop/REACT/admin-dashboard/src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
// import Dashboard from '../../src/pages/Dashboard'
import '../styles/site.css';
import Image from  '../image/logo.6ba0579820bd9bee66d8 (1).png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailCheck = /^([A-Za-z0-9_.-])+@([A-Za-z0-9_.-])+\.([A-Za-z]{2,4})$/;

    if (!email.match(emailCheck)) {
      setEmailError('Valid email is required');
    } else {
      setEmailError('');
    }

    if (password.length <= 5) {
      setPasswordError('Password must be at least 5 characters');
    } else if (password.length >= 20) {
      setPasswordError('Password cannot be more than 20 characters');
    } else if (password === 'password') {
      setPasswordError('Password cannot be password');
    } else {
      setPasswordError('');
    }

    if (!emailError && !passwordError) {
      // Perform sign-in logic here;
      // On successful sign-in, navigate to the admin dashboard
      navigate('/dashboard');
    };
  };

  console.log('SignIn component rendered');

  return (
    <section className="login"  style={{width: "100%"}}>
      <div className="left">
        <img src={Image} alt='' style={{width: "20%"}}/>
      </div>
      <div className="right">
        <h4>Welcome Back!</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span id="email_error" style={{ color: 'red' }}>{emailError}</span>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span id="password_error" style={{ color: 'red' }}>{passwordError}</span>
            <p className="forget"><a href="/signin">Forget Password?</a></p>
          </div>
          <div className="contain">
            <input type="checkbox" />
            <div className="green">
              <h5>Remember me</h5>
            </div>
          </div>
          <button type="submit" className="big-green" id="submit">Login</button>
          <p className="p">Don't have an account? <span><a href="./coder.html">Sign up</a></span></p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.min.css';
// import '../styles/site.css';
// import Image from '../image/logo.6ba0579820bd9bee66d8 (1).png';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailCheck = /^([A-Za-z0-9_.-])+@([A-Za-z0-9_.-])+\.([A-Za-z]{2,4})$/;

//     if (!email.match(emailCheck)) {
//       setEmailError('Valid email is required');
//     } else {
//       setEmailError('');
//     }

//     if (password.length <= 5) {
//       setPasswordError('Password must be at least 5 characters');
//     } else if (password.length >= 20) {
//       setPasswordError('Password cannot be more than 20 characters');
//     } else if (password === 'password') {
//       setPasswordError('Password cannot be password');
//     } else {
//       setPasswordError('');
//     }

//     if (!emailError && !passwordError && email.match(emailCheck) && password.length > 5 && password.length < 20 && password !== 'password') {
//       // Perform sign-in logic here;
//       // On successful sign-in, navigate to the admin dashboard
//       navigate('/admin-dashboard');
//     }
//   };

//   return (
//     <section className="login" style={{ width: "100%" }}>
//       <div className="left">
//         <img src={Image} alt='' style={{ width: "20%" }} />
//       </div>
//       <div className="right">
//         <h4>Welcome Back!</h4>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span id="email_error" style={{ color: 'red' }}>{emailError}</span>
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span id="password_error" style={{ color: 'red' }}>{passwordError}</span>
//             <p className="forget"><a href="/signin">Forget Password?</a></p>
//           </div>
//           <div className="contain">
//             <input type="checkbox" />
//             <div className="green">
//               <h5>Remember me</h5>
//             </div>
//           </div>
//           <button type="submit" className="big-green" id="submit">Login</button>
//           <p className="p">Don't have an account? <span><a href="./coder.html">Sign up</a></span></p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default SignIn;