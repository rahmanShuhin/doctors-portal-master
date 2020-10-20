import React, { useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import Calendar from "react-calendar";
import { useContext } from "react";
import { DataContext } from "../Data";
import { useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Helmet } from "react-helmet";
const TodayAppointment = () => {
  const [data, setData] = useContext(DataContext);
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState([]);
  useEffect(() => {
    const mew = data.filter((x) => {
      if (x.day === date.toDateString()) {
        console.log(x.day);
        return x;
      }
    });
    setToday(mew);
  }, [date]);
  const onChange = (date) => {
    setDate(date);
  };
  const handleAction = (e, id) => {
    const newArr = data.map((x) => {
      if (x._id === id) {
        x.status = e.target.value;
        return x;
      } else {
        return x;
      }
    });
    setData(newArr);
    fetch("https://still-mesa-75708.herokuapp.com/updateStatus", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        value: e.target.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  console.log(today);
  return (
    <Container fluid className="dashboard">
      <Helmet>
        <title>Today's Appointment | Doctors Portal</title>
        <meta name="description" content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."/>
        <meta name="keywords" content="online doctors book appointment"/>
      </Helmet>
      <div className="ml-6 main">
        <div className="d-md-block">
          <SideBar></SideBar>
        </div>
        <div className="title__hamburger">
          <h2 className="mt-5">Today Appointment</h2>
          <Hamburger></Hamburger>
        </div>
        <Row className="mt-5">
          <Col md={5}>
            <Calendar
              onChange={onChange}
              value={date}
              className="w-100 border-0 shadow py-5"
            />
          </Col>
          <Col md={7}>
            <Card className="p-4 h-100">
              <div className="d-flex justify-content-between">
                <h5>Appointments</h5>
                <h6>{date.toDateString()}</h6>
              </div>
              <div>
                {today.length === 0 ? (
                  <h4 className="text-center">No Appointment Today</h4>
                ) : (
                  <div>
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Schedule</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {today.map((x) => (
                        <tbody>
                          <tr>
                            <td>{x.firstname}</td>
                            <td>{x.day}</td>
                            <td>
                              <select
                                id="status"
                                onChange={(e) => handleAction(e, x._id)}
                                selected
                                value={x.status}
                                style={{
                                  background:
                                    x.status === "Rejected"
                                      ? "tomato"
                                      : x.status === "Pending"
                                      ? "orange"
                                      : "green",
                                }}
                              >
                                <option value="Rejected" className="bg-light">
                                  Rejected
                                </option>
                                <option value="Pending" className="bg-light">
                                  pending
                                </option>
                                <option value="Approved" className="bg-light">
                                  Approved
                                </option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TodayAppointment;
