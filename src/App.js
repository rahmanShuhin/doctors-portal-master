import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard";
import Appointment from "./Components/Appointment/Appointment";
import Doctors from "./Components/Doctors/Doctors";
import Patients from "./Components/Patients/Patients";
import { Data } from "./Components/Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodayAppointment from "./Components/TodayAppointment/TodayAppointment";
import Services from "./Components/Services_Section/Services";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Data>
        <Router>
          <Switch>
            <Route path="/appointment">
              <Appointment></Appointment>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/patients">
              <Patients></Patients>
            </Route>
            <Route path="/today">
              <TodayAppointment></TodayAppointment>
            </Route>
            <Route path="/">
              <Home></Home>
              <Services></Services>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </Data>
    </div>
  );
}

export default App;
