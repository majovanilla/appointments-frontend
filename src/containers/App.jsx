import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AppointmentList from '../components/AppointmentList';
import Appointment from '../components/Appointment';
import Tutor from '../components/Tutor';
import TutorList from '../components/TutorList';
import User from '../components/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
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
