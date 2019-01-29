import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
