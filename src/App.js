import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import WishPage from "./components/WishPage/WishPage";
import TastedPage from "./components/TastedPage/TastedPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Layout>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/wish" component={WishPage} />
            <PrivateRoute exact path="/tasted" component={TastedPage} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
