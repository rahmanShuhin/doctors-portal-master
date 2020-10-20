import React, { useEffect, useState, useContext } from "react";
import SideBar from "../SideBar/SideBar";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import { DataContext } from "../Data";
import Hamburger from "../Hamburger/Hamburger";
import { Helmet } from "react-helmet";
const Patients = () => {
  const [data, setData] = useContext(DataContext);
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    if (data.length !== 0) {
      const uniq = [...new Set(data.map((x) => x.firstname))];
      setUser(uniq);
    }
  }, [data]);
  useEffect(() => {
    if (user.length !== 0) {
      const fake = user.map((x) => {
        const te = data.find((y) => y.firstname === x);
        return te;
      });
      setUserInfo(fake);
    }
  }, [user, data]);

  return (
    <Container fluid>
      <Helmet>
        <title>Patients List | Doctors Portal</title>
        <meta name="description" content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."/>
        <meta name="keywords" content="online doctors book appointment"/>
      </Helmet>
      <div className="main ml-6">
        <div className="d-md-block">
          <SideBar></SideBar>
        </div>
        <div className="title__hamburger">
          <h3 className="mt-3">Patients List</h3>
          <Hamburger></Hamburger>
        </div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>E-mail</th>
              <th>Contact</th>
            </tr>
          </thead>

          {userInfo.length === 0 ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            userInfo.map((x, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{x.firstname}</td>
                  <td>{x.age}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td>
                </tr>
              </tbody>
            ))
          )}
        </Table>
      </div>
    </Container>
  );
};

export default Patients;
