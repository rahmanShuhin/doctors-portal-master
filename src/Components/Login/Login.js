import React from 'react';
import NavTop from "../NavTop/NavTop";
import { Link } from "react-router-dom";
import Group140 from "../../images/Group140.png";
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
const Login = () => {
  return (
    <Container>
      <Helmet>
        <title>Login | Doctors Portal</title>
        <meta name="description" content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."/>
        <meta name="keywords" content="online doctors book appointment"/>
      </Helmet>
      <NavTop></NavTop>
      <Row>
        <Col className="mx-md-auto my-md-auto text-center my-5" sm={6}>
          <Card className="p-md-5 p-2">
            <h3>Login</h3>
            <div className="form-box">
              <input type="text" />
              <input type="password" />
              <Link to="/dashboard"><button className="btn btn-main w-100">Login</button></Link>
            </div>
          </Card>
        </Col>
        <Col sm={6}>
          <img src={Group140} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;