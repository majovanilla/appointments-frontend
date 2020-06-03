import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import Appointments from '../components/Appointments';
import Tutor from '../components/Tutor';
import User from '../components/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/tutors/:id" component={Tutor} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
