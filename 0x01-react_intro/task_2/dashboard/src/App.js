import React from 'react';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Add label and input for email */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Add label and input for password */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* Add a button element */}
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
