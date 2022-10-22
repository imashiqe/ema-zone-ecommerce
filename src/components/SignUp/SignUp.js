import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    return (
        <div className='form-container'>
        <h4 className='form-title'> Sign Up</h4>
         <form >
             <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name='email' required />
             </div>

             <div className="form-control">
             <label htmlFor="password">Password</label>
               <input type="password" name='password' required />
             </div>
             <div className="form-control">
             <label htmlFor="confirm">Confirm Password</label>
               <input type="password" name='confirm' required />
             </div>

             <input className='btn-submit' type="submit" value="Login" />
         </form>
       <p className='create'>Already have an account? <Link to='/login'>Login</Link></p> 
      </div>
    );
};

export default SignUp;