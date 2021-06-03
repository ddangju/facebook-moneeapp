import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/feed/Feed";
import Login from "./pages/login/Login";

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/feed" component={Feed} />
        </Router>
      </>
    );
  }
}

export default Routes;
