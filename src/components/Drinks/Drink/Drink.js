import React from "react";
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

const Drink = props => {
  return (
    <Col md="4">
      <Card className={classes.Card}>
        <CardImg
          top
          width="100%"
          src={props.img}
          alt="Drink"
          className="img-thumbnail"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>
            <strong>Category:</strong> {props.category}
          </CardSubtitle>
          <CardText tag="div">
            <strong>Ingredients:</strong>{" "}
            <ListGroup>
              {props.ingredients.map(item => {
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
            <strong>Instructions:</strong> <br /> {props.desc}
          </CardText>
          <Button className={classes.Like}>I've tasted</Button>
          <Button className={classes.Like}>Wish list</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Drink;
