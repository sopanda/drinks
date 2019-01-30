import React, { Component } from "react";
import Drinks from "../Drinks/Drinks";
import { Container } from "reactstrap";
import classes from "./TastedPage.module.css";
import axios from "../../axios-url";

class TastedPage extends Component {
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
    axios.get(`api/drink/?tasted_list=1`).then(res => {
      const data = res.data.data;
      this.setState({ data });
    });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <h3 className={classes.Title}>Tasted drinks:</h3>
        {data !== null && data.length !== 0 ? (
          <Drinks data={data} parentUpdate={this.getData} />
        ) : (
          <p>You don't taste anything yet</p>
        )}
      </Container>
    );
  }
}

export default TastedPage;
