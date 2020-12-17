import React from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";

const App = () => {
  return (
    <div className="w-100">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
