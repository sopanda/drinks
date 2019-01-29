import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Drink from "./Drink/Drink";

class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: props.data
    };
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.state.drinks;
  }
  render() {
    let drinks = this.props.data.map(drink => {
      console.log(drink);
      return (
        <Drink
          key={drink.id}
          img={drink.picture_url}
          name={drink.name}
          category={drink.category.name}
          desc={drink.instructions}
          alcohol={"40"}
          ingredients={drink.ingredients}
        />
      );
    });
    return <Row>{drinks}</Row>;
  }
}

export default Drinks;
