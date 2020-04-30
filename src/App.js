import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/main.scss'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
