import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

const Dashboard = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  let handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Hero />

      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
    </>
  );
};

export default Dashboard;
