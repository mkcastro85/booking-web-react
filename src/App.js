import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import BookingList from './pages/booking/BookingList';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={BookingList} />
      </Router>
    );
  }
}

export default App;
