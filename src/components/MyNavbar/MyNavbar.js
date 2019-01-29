import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { NavLink as navLink } from "react-router-dom";
import { withRouter } from "react-router";
import classes from "./MyNavbar.module.css";

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let navbarToggler = (
      <Fragment>
        <NavbarToggler className={classes.IconToggle} onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className={classes.List + " ml-auto"} navbar>
            <NavItem>
              <NavLink tag={navLink} to="/wish" exact className={classes.Link}>
                Wish list
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={navLink}
                to="/tasted"
                exact
                className={classes.Link}
              >
                Tasted
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={navLink} to="/login" exact className={classes.Link}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Fragment>
    );

    return (
      <div className={classes.MyNavbar}>
        <Container>
          <Navbar dark expand="md" className={classes.Navbar}>
            <NavbarBrand tag={navLink} exact to="/" className={classes.Brand}>
              Drinks
            </NavbarBrand>
            {navbarToggler}
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default withRouter(MyNavbar);
