import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [isAuthorised, setIsAuthorised] = useState(true);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setIsAuthorised(!isAuthorised);
  };

  return (
    <div className='body'>
      <div className={`container ${isSignup ? 'signup' : ''}`}>
        <span></span>
        <span></span>
        
        {/* Форма для входа */}
        <form id="signinForm"  style={{ left: isSignup ? '-100%' : '0' }}>
          <h2>Login</h2>
          <div className="inputBox">
            <input type="text" id='username' name='username' placeholder="Username" />
          </div>
          <div className="inputBox">
            <input type="password" name='password' placeholder="Password" />
          </div>
          <div className="inputBox group">
            <a href="#">Forgot Password</a>
            <a href="#" onClick={toggleSignup}>Signup</a>
          </div>
          <div className="inputBox">
            <input type="submit" value="Sign in" />
          </div>
        </form>
  
        {/* Форма для регистрации */}
        <form id="signupForm" style={{ left: isSignup ? '0' : '100%' }}>
          <h2>Registration</h2>
          <div className="inputBox">
            <input type="text" name='username' placeholder="Username" required />
          </div>
          <div className="inputBox">
            <input type="email" name='email' placeholder="Email Address" required/>
          </div>
          <div className="inputBox">
            <input type="password" name='password' placeholder="Create Password" required/>
          </div>
          <div className="inputBox">
            <input type="text" name='firstName' placeholder="Firstname" required/>
          </div>
          <div className="inputBox">
            <input type="text" name='lastName' placeholder="Lastname" required/>
          </div>
          <div className="inputBox">
            <input type="submit" value="Register Account" />
          </div>
          <div className="inputBox group">
            <a href="#" onClick={toggleSignup}>
              Already Have an Account?  <b>Login</b>
              </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
