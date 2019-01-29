import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Layout>
            <PrivateRoute path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
