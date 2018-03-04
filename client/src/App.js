import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./pages/project";


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Sample Blockchain Use Case</h2>
          <Router>
              <div>
                <Switch>
                <Route exact path="/" component={Tasks} />
                </Switch>
              </div>
          </Router>
      
      </div>
    );
  }
}

export default App;
