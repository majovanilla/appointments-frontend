/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AppointmentList from './AppointmentList';
import Appointment from './Appointment';
import Tutor from '../components/Tutor';
import TutorList from '../components/TutorList';
import User from '../components/User';
import Catch404 from '../components/Catch404';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/appointments" component={AppointmentList} />
          <Route exact path="/appointments/new" component={Appointment} />
          <Route exact path="/tutors" component={TutorList} />
          <Route exact path="/tutors/:id" component={Tutor} />
          <Route exact path="/users/:id" component={User} />
          <Route component={Catch404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
