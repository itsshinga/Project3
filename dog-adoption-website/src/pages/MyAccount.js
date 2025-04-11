import React, { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { Card, Form, Button } from "react-bootstrap";
import "./MyAccount.css"; 
function MyAccount() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const responseFacebook = (response) => {
    console.log("Facebook response:", response);
    setData(response);
    setPicture(response.picture?.data?.url || "");
    setLogin(!!response.accessToken);
  };

  const handleManualLogin = (event) => {
    event.preventDefault();
    if (name && email) {
      const formUserData = { name, email, picture: { data: { url: "" } } };
      setData(formUserData);
      setLogin(true);
    } else {
      alert("Please fill in both your name and email.");
    }
  };

  function LoginForm() {
    return (
      <Form onSubmit={handleManualLogin} className="border mt-3 mb-5 p-3 bg-white">
        <Form.Group className="m-2" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-2" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="my-3 manual-login-btn">
          Login
        </Button>
      </Form>
    );
  }

  function Home({ fbpic, fbdata }) {
    return (
      <div className="text-center">
        {fbpic && fbpic.length > 0 && (
          <img
            src={fbpic}
            alt={fbdata.name}
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
        )}
        <h3 className="d-inline text-success mx-2">
          {fbdata.name ? `Welcome back ${fbdata.name}!` : "Welcome!"}
        </h3>
        <p className="my-5">Log out?</p>
        <Button variant="secondary" onClick={() => setLogin(false)}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="container">
      <Card style={{ width: "800px" }} className="mx-auto mt-5">
        <Card.Header className="pb-4">
          <h1>{login ? "My Account" : "Sign In"}</h1>
        </Card.Header>
        <Card.Body>
          <div>
            {!login ? (
              <>
                <h3>Please log in using one of the following methods:</h3>
                {/* Login Form */}
                <LoginForm />
                {/* Button */}
                <FacebookLogin
                  appId="24187399777515126" 
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                  className="my-facebook-btn" 
                  textButton="Login with Facebook"
                />
              </>
            ) : (
              <Home fbpic={picture} fbdata={data} />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyAccount;
