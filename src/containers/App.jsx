import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AppointmentList from './AppointmentList';
import Appointment from '../components/Appointment';
import Tutor from '../components/Tutor';
import TutorList from '../components/TutorList';
import User from '../components/User';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/appointments" component={AppointmentList} />
          <Route exact path="/appointments/new" component={Appointment} />
          <Route exact path="/tutors/" component={TutorList} />
          <Route exact path="/tutors/:id" component={Tutor} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
