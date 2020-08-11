import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="px-5 py-5">
        <Col sm={3} xs={6}>
          <p>Emergency Dental care</p>
          <p>Check Up</p>
          <p>Treatment ofPersonal Disease</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
        </Col>
        <Col sm={3} xs={6}>
          <h6 className="footer-h6">Services</h6>
          <p>Emergency Dental care</p>
          <p>Check Up</p>
          <p>Treatment ofPersonal Disease</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </Col>

        <Col sm={3} xs={6}>
          <h6 className="footer-h6">Oral Health</h6>
          <p>Emergency Dental care</p>
          <p>Check Up</p>
          <p>Treatment ofPersonal Disease</p>
          <p>Tooth Extraction</p>
          <p>Check Up</p>
          <p>Check Up</p>
          <p>Check Up</p>
        </Col>
        <Col sm={3} xs={6}>
          <h6 className="footer-h6">Our Address</h6>
          <p>New York -100100 Hudson yards</p>
          <p>Check Up</p>
          <p>Call Now</p>
          <button className="btn btn-main">+2093887</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
