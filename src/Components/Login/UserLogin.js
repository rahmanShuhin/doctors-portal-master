import React, { useContext, useEffect } from "react";
import NavTop from "../NavTop/NavTop";
import { Link } from "react-router-dom";
import Group140 from "../../images/Group140.png";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { UserContext } from "../Context/Sign_In_Context";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
const UserLogin = () => {
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const arr = {
          name: result.user.displayName,
          email: result.user.email,
          logged: true,
        };
        history.push("/appointment");
        setUser(arr);
        console.log(arr);
      })
      .catch(function (error) {
        var errorMessage = error.message;

        alert(errorMessage);
      });
  };
  useEffect(() => {
    if (user) {
      history.push("/appointment");
    }
  }, [user]);
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push("/");
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <Container>
      <Helmet>
        <title>Login | Doctors Portal</title>
        <meta
          name="description"
          content="Now a days All things are based on Online. Find a good doctor is so  much hassle  now a days.
        Doctors portal is going to give you advantage that you don't need to go hospital physically.You can book and get the best treatment from now ."
        />
        <meta name="keywords" content="online doctors book appointment" />
      </Helmet>
      <NavTop></NavTop>
      <Row>
        <Col className="mx-md-auto my-md-auto text-center my-5" sm={6}>
          <Card className="p-md-5 p-2">
            <h3>Login</h3>
            {!user ? (
              <button className="btn btn-info" onClick={handleSignIn}>
                Sign In With Google
              </button>
            ) : (
              <button className="btn btn-info" onClick={handleSignOut}>
                Sign Out
              </button>
            )}
          </Card>
        </Col>
        <Col sm={6}>
          <img src={Group140} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
