import React from "react";
import { Container, Table, Spinner, Modal } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import { DataContext } from "../Data";
import { useState } from "react";
import { useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Helmet } from "react-helmet";

const Prescription = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState([]);
  const [medi, setMedi] = useState([]);
  const [data, setData] = useContext(DataContext);
  const handleClose = () => setShow(false);
  const [userPres, setUserPres] = useState([]);
  useEffect(() => {
    const fake = data.filter((x) => {
      if (x.prescription === true) {
        return x;
      }
    });
    setUserPres(fake);
  }, [data]);
  const handleShow = (id) => {
    const fake = data.find((x) => x._id === id);
    setModal(fake);
    if (fake.prescription) {
      setMedi(fake.medicine);
    }
    setShow(true);
  };
  const updateMedi = (e) => {
    e.preventDefault();
    const form_data = document.getElementsByClassName("form-data");
    const newData = [...[], modal];
    const formData = {
      medicine: form_data[0].value,
      dose: form_data[1].value,
      days: form_data[2].value,
    };
    if (newData[0].prescription === true) {
      const final = [...newData[0].medicine, formData];
      //console.log(final);
      newData[0].medicine = final;
      setMedi(final);
      fetch("https://still-mesa-75708.herokuapp.com/updatePrescription", {
        method: "POST",
        body: JSON.stringify({
          id: newData[0]._id,
          medicine: final,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      const final = [formData];
      newData[0].medicine = final;
      setMedi(final);
      newData[0].prescription = true;
      fetch("https://still-mesa-75708.herokuapp.com/updatePrescription", {
        method: "POST",
        body: JSON.stringify({
          id: newData[0]._id,
          medicine: final,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    setModal(newData[0]);
    form_data[0].value = "";
    form_data[2].value = 0;
  };
  //console.log(userPres);
  return (
    
    <Container fluid>
      <Helmet>
        <title>Prescription  | Doctors Portal</title>
        <meta name="description" content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."/>
        <meta name="keywords" content="online doctors book appointment"/>
      </Helmet>
      <div className="main ml-6">
        <div className="d-md-block">
          <SideBar></SideBar>
        </div>
        <div className="title__hamburger">
          <h3 className="mt-3">Patients Added Prescription</h3>
          <Hamburger></Hamburger>
        </div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Contact</th>
              <th>Prescription</th>
            </tr>
          </thead>

          {userPres.length === 0 ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            userPres.map((x, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{x.firstname}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td>
                  <td>
                    {x.prescription ? (
                      <button
                        className="btn btn-dark w-100"
                        onClick={() => handleShow(x._id)}
                      >
                        View
                      </button>
                    ) : (
                      <button
                        className="btn text-center w-100"
                        onClick={() => handleShow(x._id)}
                      >
                        ADD <span className="text-success">+</span>{" "}
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" className="modal-box">
        <Modal.Header closeButton>
          <p>
            <b>
              <u>Patient Name:</u> {modal.firstname}
            </b>
          </p>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="medicine_input " onSubmit={updateMedi}>
              <input
                type="text"
                placeholder="Medicine Name"
                className="btn btn-light  rounded-0 form-data"
                required
              />
              <select
                name="dose"
                id="dose"
                className="btn btn-light  rounded-0 form-data"
                required
              >
                <option value="1-1-1">1-1-1</option>
                <option value="1-1-0">1-1-0</option>
                <option value="1-0-1">1-0-1</option>
                <option value="0-1-1">0-1-1</option>
                <option value="1-0-0">1-0-0</option>
                <option value="0-1-0">0-1-0</option>
                <option value="0-0-1">0-0-1</option>
              </select>
              <input
                type="number"
                name="day"
                id="day"
                placeholder="Day"
                className="btn btn btn-light rounded-0 form-data"
                required
              />
              <input
                type="submit"
                value="+"
                className="btn btn-dark rounded-0"
              />
            </form>
            <Table responsive>
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Dose</th>
                  <th>Days</th>
                </tr>
              </thead>

              {modal.prescription === true &&
                medi &&
                medi.map((x) => (
                  <tbody>
                    <tr>
                      <td>{x.medicine}</td>
                      <td>{x.dose}</td>
                      <td>{x.days}</td>
                      <td>x</td>
                    </tr>
                  </tbody>
                ))}
            </Table>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Prescription;
