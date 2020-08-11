import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Jumbotron,
  Form,
  Button,
} from "react-bootstrap";
import "./Services.css";
import tooth from "../../images/tooth.png";
import tooth2 from "../../images/tooth2.png";
import tooth3 from "../../images/tooth3.png";
import child from "../../images/child.png";
import doctor from "../../images/doctor.png";
import doctor1 from "../../images/doctor1.png";
import Ellipse1 from "../../images/Ellipse1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      {/* service section */}
      <Container className="py-5" id="about">
        <div className="text-center">
          <h4>OUR SERVICES</h4>
          <h2 className="services-h2">Services We Provide</h2>
        </div>
        <Row className="my-5">
          <Col lg={4}>
            <Card className="my-md-3 my-3 my-md-0">
              <div className="py-5 text-center mx-2">
                <img src={tooth} alt="me" className="img-fluid" />
                <h6 className="my-4">Fluride Treatment</h6>
                <p className="gray-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="my-md-3 my-3 my-md-0">
              <div className="py-5 text-center mx-2">
                <img src={tooth2} alt="me" className="img-fluid" />
                <h6 className="my-4">Cavity Filling</h6>
                <p className="gray-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="my-md-3 my-3 my-md-0">
              <div className="py-5 text-center mx-2">
                <img src={tooth3} alt="me" className="img-fluid" />
                <h6 className="my-4">Teeth whitening</h6>
                <p className="gray-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="my-3 my-md-5 py-5">
          <Col md={5}>
            <img src={child} alt="child" className="img-fluid " />
          </Col>
          <Col md={7}>
            <h2 className="services-h2 mb-5">
              Exceptional Dental<br></br> Care, On Your Terms
            </h2>
            <p className="gray-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              dolor id! Molestiae odit ad illum itaque dicta saepe alias quam
              molestias, eaque dolor nemo laboriosam culpa quasi? Nesciunt, id
              ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ipsam repudiandae, harum assumenda ab suscipit inventore labore
              non, nobis voluptatum dolor neque ipsa deleniti ratione aliquid
              sint veniam recusandae rerum quod.
            </p>
            <button className="btn btn-main mt-5">Learn More</button>
          </Col>
        </Row>
      </Container>
      {/* doctor appointment */}
      <Container fluid>
        <Row className=" doctor_appoint my-0 my-md-5">
          <Col md={5} className="d-none d-md-block">
            <img src={doctor} alt="doctor" className=" img-doctor" />
          </Col>
          <Col sm={12} md={7}>
            <div className="my-5 pr-md-5">
              <h6>Appointment</h6>
              <h3>Make an appointment Today</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                voluptatum a? Architecto sunt, aspernatur accusantium similique
                a facilis voluptates nemo illum nihil id
              </p>
              <button className="btn btn-main">Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* client review section */}
      <Container className="my-5 py-5 ">
        <Row>
          <Col sm={10}>
            <h5>TESTIMONIAL</h5>
            <h2 className="services-h2">What's Our Patients Says</h2>
          </Col>
          <Col sm={2}>
            <FontAwesomeIcon icon={faQuoteLeft} className="fa-5x fa-quote" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                odio dignissimos, a laboriosam veritatis dolores debitis
                pariatur repudiandae, est eum fugiat excepturi facilis atque
                natus, commodi quasi impedit ducimus iste.
              </p>
              <div className="d-flex mt-5">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>California</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                odio dignissimos, a laboriosam veritatis dolores debitis
                pariatur repudiandae, est eum fugiat excepturi facilis atque
                natus, commodi quasi impedit ducimus iste.
              </p>
              <div className="d-flex mt-5">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>California</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                odio dignissimos, a laboriosam veritatis dolores debitis
                pariatur repudiandae, est eum fugiat excepturi facilis atque
                natus, commodi quasi impedit ducimus iste.
              </p>
              <div className="d-flex mt-5">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>California</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* blog section */}
      <Container className="py-5" id="blog">
        <div className="text-center">
          <h5>OUR BLOG</h5>
          <h2 className="services-h2">From Our Blog News</h2>
        </div>
        <Row className="my-5">
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <div className="d-flex">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>29 July 2020</p>
                </div>
              </div>
              <div className="mt-3">
                <h6>The tooth cancer is taking a challenge</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  odio dignissimos, a laboriosam veritatis dolores debitis
                </p>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <div className="d-flex">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>29 July 2020</p>
                </div>
              </div>
              <div className="mt-3">
                <h6>The tooth cancer is taking a challenge</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  odio dignissimos, a laboriosam veritatis dolores debitis
                </p>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="py-4 px-3 my-3 my-md-0">
              <div className="d-flex">
                <img src={Ellipse1} alt="" />
                <div className="ml-3">
                  <h6>Winson Herry</h6>
                  <p>29 July 2020</p>
                </div>
              </div>
              <div className="mt-3">
                <h6>The tooth cancer is taking a challenge</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  odio dignissimos, a laboriosam veritatis dolores debitis
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <h4 className="text-center mb-5">Our Doctors</h4>
        <Row>
          <Col sm={4} className="text-center">
            <img src={doctor1} alt="" className="img-fluid" />
            <div className="mt-3">
              <h5>Dr.Caudi</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} className="fa-1x" />
                +99 0853657
              </p>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            <img src={doctor1} alt="" className="img-fluid" />
            <div className="mt-3">
              <h5>Dr.Caudi</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} className="fa-1x" />
                +99 0853657
              </p>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            <img src={doctor1} alt="" className="img-fluid" />
            <div className="mt-3">
              <h5>Dr.Caudi</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} className="fa-1x" />
                +99 0853657
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="contact-section" id="contact">
        <Jumbotron className="px-md-5 mx-md-5 jumbotron">
          <div className="text-center my-5">
            <h4>CONTACT US</h4>
            <h2>Always Connect With Us</h2>
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="subject" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Message" />
            </Form.Group>
            <Button type="submit" className="btn btn-main w-100 ml-auto">
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Services;
