import React, { Component } from "react";
import { Row } from "reactstrap";
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
      return (
        <Drink
          key={drink.id}
          cocktail={drink}
          update={this.props.parentUpdate}
        />
      );
    });
    return <Row>{drinks}</Row>;
  }
}

export default Drinks;
