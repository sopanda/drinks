import React, { Fragment } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

const layout = props => (
  <Fragment>
    <MyNavbar />
    <main>{props.children}</main>
  </Fragment>
);

export default layout;
