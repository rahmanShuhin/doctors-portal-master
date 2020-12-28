import React, { useState } from "react";
import NavTop from "../NavTop/NavTop";
import {
  Row,
  Col,
  Card,
  Container,
  Modal,
  Button,
  Spinner,
} from "react-bootstrap";
import { schedule } from "./Schedule";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Mask_Group_1 from "../../images/Mask_Group_1.png";
import { useForm } from "react-hook-form";
import "./Appointment.css";
import { Helmet } from "react-helmet";
const Appointment = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(false);
  const [spin, setSpin] = useState(false);
  const onSubmit = (data) => {
    setSpin(true);
    data.prescription = false;
    data.status = "Pending";
    fetch("https://still-mesa-75708.herokuapp.com/addAppointment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          setSpin(false);
          console.log(data.err);
          setErr({
            message: data.err,
          });
        } else {
          setSuccess(true);
          setErr(null);
          setSpin(false);
        }
      });
  };
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [appoint, setAppoint] = useState("");
  const handleClose = () => {
    setShow(false);
    setSuccess(false);
  };
  const handleShow = (x) => {
    setShow(true);
    setAppoint(x);
  };
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="appointment">
      <Helmet>
        <title>Appointment | Doctors Portal</title>
        <meta
          name="description"
          content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."
        />
        <meta name="keywords" content="online doctors book appointment" />
      </Helmet>
      <Container className="px-5">
        <NavTop></NavTop>
        <Row className="py-5">
          <Col md={6}>
            <Calendar
              onChange={onChange}
              value={date}
              minDate={new Date()}
              className="border-0 shadow"
            />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <img src={Mask_Group_1} alt="mask" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="text-center mt-5">
          Available Appointments on {date.toDateString().slice(4, 15)}
        </h2>
        <Row className="my-5 pb-5">
          {schedule.map((x) => (
            <Col sm={6} md={4} className="p-3 ">
              <Card className="d-flex flex-column align-items-center py-3">
                <h5>{x.title}</h5>
                <h6>{x.time}</h6>
                <p>10 spaces Available</p>
                <button className="btn btn-main" onClick={() => handleShow(x)}>
                  Book Appointment
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Modal show={show} onHide={handleClose} className="border-0" centered>
          {success ? (
            <Modal.Body closeButton>
              <p className="text-center text-success">
                Thanks ! Your Appointment is Confirm on {date.toDateString()}
              </p>
              <p className="text-center text-success">{appoint.title}</p>
            </Modal.Body>
          ) : (
            <div>
              <Modal.Header closeButton>
                <Modal.Title className="ml-auto text-primary">
                  {appoint.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="form-box">
                  <input
                    name="firstname"
                    ref={register({ required: true })}
                    placeholder="Enter Your Name"
                  />
                  {errors.firstname && (
                    <small style={{ color: "red" }}>
                      Your name is required.
                    </small>
                  )}
                  <input
                    name="email"
                    ref={register({ required: true })}
                    placeholder="Enter Your E-mail"
                  />
                  {errors.email && (
                    <small style={{ color: "red" }}>
                      Your Email is required.
                    </small>
                  )}
                  <input
                    name="phone"
                    ref={register({ required: true })}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <small style={{ color: "red" }}>
                      Your Phone Number is Required
                    </small>
                  )}
                  <input
                    name="age"
                    ref={register({ pattern: /\d+/ }, { required: true })}
                    placeholder="Enter Your Age"
                  />
                  {errors.age && (
                    <small style={{ color: "red" }}>
                      Please Enter Your Age
                    </small>
                  )}
                  <input
                    name="time"
                    ref={register({ required: true })}
                    value={appoint.time}
                  />
                  <input
                    name="day"
                    ref={register({ required: true })}
                    value={date.toDateString()}
                  />
                  <input
                    name="catag"
                    ref={register({ required: true })}
                    value={appoint.title}
                  />
                  {spin ? (
                    <button className="btn appoint-btn" disabled>
                      <Spinner animation="border" role="status">
                        <small>50%</small>
                      </Spinner>
                    </button>
                  ) : (
                    <input
                      type="submit"
                      className="appoint-btn"
                      value="Book Appointment"
                    />
                  )}
                </form>
                {err && (
                  <small className="text-center mx-md-5 text-danger">
                    {err.message}
                  </small>
                )}
              </Modal.Body>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default Appointment;
