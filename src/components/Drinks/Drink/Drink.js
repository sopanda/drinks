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
import ScoreModal from "../../ScoreModal/ScoreModal";

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      addedW: false,
      added: false
    };
  }

  componentDidMount = () => {
    if (
      window.location.pathname === "/wish" ||
      window.location.pathname === "/tasted"
    ) {
      this.setState({ deleted: true });
    }
  };

  handleDelete = () => {
    const { id } = this.props.cocktail;
    if (window.location.pathname === "/wish") {
      axios.delete(`/api/drink/${id}/wish_list/`).then(res => {
        console.log("deleted", res);
        this.props.update();
      });
    }
    if (window.location.pathname === "/tasted") {
      axios.delete(`/api/drink/${id}/tasted_list/`).then(res => {
        console.log("deleted", res);
        this.props.update();
      });
    }
  };

  handleWish = () => {
    const { id } = this.props.cocktail;
    axios.post(`/api/drink/${id}/wish_list/`).then(res => {
      this.setState({ added: true });
    });
  };

  render() {
    const {
      id,
      name,
      category,
      avg_look_score,
      avg_taste_score,
      avg_score,
      ingredients,
      instructions,
      picture_url
    } = this.props.cocktail;

    const { deleted, added } = this.state;

    return (
      <Col md="4">
        <Card className={classes.Card}>
          <CardImg
            top
            width="100%"
            src={picture_url}
            alt="Drink"
            className="img-thumbnail"
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>
              <strong>Category:</strong> {category.name} <br />
              <strong>Look score:</strong> {avg_look_score} <br />
              <strong>Taste score:</strong> {avg_taste_score} <br />
              <strong>Score:</strong> {avg_score}
            </CardSubtitle>
            <CardText tag="div" className={classes.CardText}>
              <strong>Ingredients:</strong>{" "}
              <ListGroup>
                {ingredients.map(item => {
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
              <strong>Instructions:</strong> <br /> {instructions}
            </CardText>
            {deleted ? (
              <Button className={classes.Like} onClick={this.handleDelete}>
                Delete from list
              </Button>
            ) : (
              <Fragment>
                <ScoreModal drinkId={id} />
                <Button
                  className={classes.Like}
                  onClick={this.handleWish}
                  disabled={added ? true : false}
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
