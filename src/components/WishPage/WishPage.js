import React, { Component } from "react";
import Drinks from "../Drinks/Drinks";
import { Container, Row, Col } from "reactstrap";
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
    axios.get(`/api/drink/?wish_list=1`).then(res => {
      const data = res.data.data;
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h3 className={classes.Title}>Wish list:</h3>
            {data !== null && data.length !== 0 ? (
              <Row>
                <Drinks data={data} />
              </Row>
            ) : (
              <p>You don't have any dreams</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WishPage;
