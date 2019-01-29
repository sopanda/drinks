import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
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
            Alcohol %: {props.alcohol} <br /> Category: {props.category}
          </CardSubtitle>
          <CardText>
            Ingredients:{" "}
            {props.ingredients.map(item => {
              for (let key in item) {
                return (
                  <strong key={item[key].id}>{item[key].name + " "}</strong>
                );
              }
            })}
            <br />
            Instructions: <br /> {props.desc}
          </CardText>
          <Button className={classes.Like}>I've tasted</Button>
          <Button className={classes.Like}>Wish list</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Drink;
