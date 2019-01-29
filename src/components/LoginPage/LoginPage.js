import React, { Component } from "react";
import {
  FormGroup,
  Container,
  Form,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./LoginPage.module.css";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };
    if (username && password) {
      axios
        .post(`https://9155b4f4.ngrok.io/api/jwt/access_token/`, user)
        .then(res => {
          let { access_token } = res.data;
          if (access_token === undefined) {
            localStorage.setItem("user", access_token);
            this.props.history.push("/");
          }
        });
    }
  };

  render() {
    return (
      <Container fluid={true} className={classes.LoginPage}>
        <Row className="row h-100 justify-content-center align-items-center">
          <Col className={classes.LoginPage_Wrapper}>
            <h3 className={classes.Title}>Login</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  name="username"
                  label="Username"
                  type="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className={classes.Buttons}>
                <Button>Login</Button>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(LoginPage);
