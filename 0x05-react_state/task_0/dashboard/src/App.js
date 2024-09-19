import React from 'react';
import logo from './holberton-logo.jpg'; // Make sure the path to the logo is correct
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        <Header />
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <Login />
        <Notifications />
        <CourseList />

      </body>
      <Footer />
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;