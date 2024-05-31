import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            
          />
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            
          />
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            
          />
          <button >Register</button>
          <p>error msg</p>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </form>
    </div>
  )
}

export default Register
