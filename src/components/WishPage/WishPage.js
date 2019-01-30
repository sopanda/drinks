import React, { Component } from "react";
import Drinks from "../Drinks/Drinks";
import { Container } from "reactstrap";
import classes from "./WishPage.module.css";
import axios from "../../axios-url";

class WishPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`/api/drink/?wish_list=1`).then(res => {
      const data = res.data.data;
      this.setState({ data });
    });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <h3 className={classes.Title}>Wish list:</h3>
        {data !== null && data.length !== 0 ? (
          <Drinks data={data} parentUpdate={this.getData} />
        ) : (
          <p>You don't have any dreams</p>
        )}
      </Container>
    );
  }
}

export default WishPage;
