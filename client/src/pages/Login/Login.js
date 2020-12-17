import React, { useRef, useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(props);

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push("/");
      window.location.reload(false);
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
    // <div>
    //   <Card>
    //     <button type="button" class="close" aria-label="Close">
    //       <span aria-hidden="true">&times;</span>
    //     </button>
    //     <Card.Header className="text-center">Login</Card.Header>

    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account? <Link to="/signup">Sign Up</Link>
    //   </div>
    // </div>
  );
};

export default Login;
