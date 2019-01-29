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
import classes from "./RegisterPage.module.css";
import { withRouter } from "react-router-dom";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };
    if (username && password) {
      axios.post(`https://9155b4f4.ngrok.io/api/user/`, user).then(res => {
        console.log(res);
        this.props.history.push("/login");
      });
    }
  };

  render() {
    return (
      <Container fluid={true} className={classes.RegisterPage}>
        <Row className="h-100 justify-content-center align-items-center">
          <Col className={classes.RegisterPage_Wrapper}>
            <h3 className={classes.Title}>Registration</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  name="username"
                  placeholder="email"
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
                <Button>Register</Button>
                <Link to="/login">
                  <Button>Back</Button>
                </Link>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(RegisterPage);
