import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
     // Validation for username and password
     if (formData.username.trim() === '') {
      alert('Username is required! spaces not allowed');
      return;
    }
    
    if (formData.password.trim() === '') {
      alert('Password is required! spaces not allowed');
      return;
    }

    // Password length validation (at least 6 characters)
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    alert('Employee added successfully');

    setUser(formData.username);
    setPass(formData.password);
    setIsSubmitted(true);

    // Reset the form
    setFormData({ username: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container">
        <h1>Log in Form</h1>
        <form onSubmit={handlesubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>

        {/* Conditionally render the result */}
        {isSubmitted && (
          <div className="result">
            <h2>Username: {user}</h2>
            <h2>Password: {pass}</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;