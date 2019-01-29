import React, { Component } from "react";
import {
  FormGroup,
  Container,
  Form,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Drinks from "../Drinks/Drinks";
import classes from "./Home.module.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: null,
      dropdownValue: "Drink",
      dropdownOpen: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  select = e => {
    const { innerText } = e.target;
    this.setState({ dropdownValue: innerText });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search, dropdownValue } = this.state;
    if (dropdownValue === "Drink") {
      axios
        .get(`https://9155b4f4.ngrok.io/api/drink/?name_query=${search}`)
        .then(res => {
          let data = res.data.data;
          console.log(data);
          this.setState({ data });
        });
    }
    if (dropdownValue === "Ingredient") {
      axios
        .get(
          `https://9155b4f4.ngrok.io/api/drink/?ingredient_name_query=${search}`
        )
        .then(res => {
          const data = res.data.data;
          this.setState({ data });
        });
    }
    if (dropdownValue === "Alcohol") {
      axios
        .get(`https://9155b4f4.ngrok.io/api/drink/?name_query=${search}`)
        .then(res => {
          const data = res.data.data;
          this.setState({ data });
        });
    }
  };

  render() {
    const { search, data } = this.state;
    return (
      <Container className="py-4">
        <div className={classes.Home_Wrapper}>
          <Form onSubmit={this.handleSubmit} className={classes.Home_Form}>
            <FormGroup>
              <Input
                type="text"
                name="search"
                placeholder="search for"
                value={search}
                className={classes.Dismiss_Border}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className={classes.Dismiss_Border}>
                  {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.select}>Drink</DropdownItem>
                  <DropdownItem onClick={this.select}>Alcohol</DropdownItem>
                  <DropdownItem onClick={this.select}>Ingredient</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Button className={classes.Dismiss_Border}>Search</Button>
            </FormGroup>
          </Form>
          {data ? <Drinks data={data} /> : null}
        </div>
      </Container>
    );
  }
}

export default Home;
