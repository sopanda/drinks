import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import classes from "./Drink.module.css";
import axios from "../../../axios-url";

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      addedW: false,
      addedT: false
    };
  }

  componentDidMount = () => {
    if (
      window.location.pathname === "/wish" ||
      window.location.pathname === "/tasted"
    ) {
      this.setState({ delete: true });
    }
  };

  handleDelete = () => {
    const { id } = this.props;
    if (window.location.pathname === "/wish") {
      axios.delete(`/api/drink/${id}/wish_list/`).then(res => {
        console.log("deleted", res);
        this.props.wishUpdate();
      });
    }
    if (window.location.pathname === "/tasted") {
      axios.delete(`/api/drink/${id}/tasted_list/`).then(res => {
        console.log("deleted", res);
      });
    }
  };

  handleWish = () => {
    const { id } = this.props;
    axios.post(`/api/drink/${id}/wish_list/`).then(res => {
      this.setState({ addedW: true });
    });
  };

  handleTasted = () => {
    const { id } = this.props;
    axios.post(`/api/drink/${id}/tasted_list/`).then(res => {
      this.setState({ addedT: true });
    });
  };

  render() {
    return (
      <Col md="4">
        <Card className={classes.Card}>
          <CardImg
            top
            width="100%"
            src={this.props.img}
            alt="Drink"
            className="img-thumbnail"
          />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>
              <strong>Category:</strong> {this.props.category}
            </CardSubtitle>
            <CardText tag="div">
              <strong>Ingredients:</strong>{" "}
              <ListGroup>
                {this.props.ingredients.map(item => {
                  return (
                    <ListGroupItem
                      key={item.ingredient.id}
                      className={classes.Ingredient}
                    >
                      {item.verbose_measure}
                      {item.measure_in_ml
                        ? ` (${item.measure_in_ml} in ml) `
                        : null}{" "}
                      {item.ingredient.name} with{" "}
                      {item.ingredient.alcohol_percentage} % of alcohol <br />
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
              <strong>Instructions:</strong> <br /> {this.props.desc}
            </CardText>
            {this.state.delete ? (
              <Button className={classes.Like} onClick={this.handleDelete}>
                Delete from list
              </Button>
            ) : (
              <Fragment>
                <Button className={classes.Like} onClick={this.handleTasted}>
                  I've tasted
                </Button>
                <Button
                  className={classes.Like}
                  onClick={this.handleWish}
                  disabled={this.state.addedW ? true : false}
                >
                  Wish list
                </Button>
              </Fragment>
            )}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Drink;
