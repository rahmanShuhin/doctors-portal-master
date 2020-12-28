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
import NotFound from "./Components/NotFound/NotFound";
import Prescription from "./Components/Prescription/Prescription";
import { DoctorRoute, PrivateRoute } from "./Components/useAuth";
import UserLogin from "./Components/Login/UserLogin";
function App() {
  return (
    <div className="App">
      <Data>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/user-login">
              <UserLogin></UserLogin>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <DoctorRoute path="/dashboard">
              <DashBoard></DashBoard>
            </DoctorRoute>
            <DoctorRoute path="/patients">
              <Patients></Patients>
            </DoctorRoute>
            <DoctorRoute path="/today">
              <TodayAppointment></TodayAppointment>
            </DoctorRoute>
            <DoctorRoute path="/prescription">
              <Prescription></Prescription>
            </DoctorRoute>
            <Route path="/setting">
              <NotFound></NotFound>
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
