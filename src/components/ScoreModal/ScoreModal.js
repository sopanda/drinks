import React, { Fragment, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Col,
  Row,
  FormGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import classes from "./ScoreModal.module.css";
import axios from "../../axios-url";

class ScoreModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      submitted: false,
      dropdownTaste: "5",
      dropdownLook: "5",
      added: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    this.toggle();
    event.preventDefault();
    this.sendData(this.props);
  };

  sendData = ({ drinkId }) => {
    const { dropdownTaste, dropdownLook } = this.state;
    let score = {
      taste_score: dropdownTaste,
      look_score: dropdownLook
    };
    console.log(score);
    axios.post(`/api/drink/${drinkId}/tasted_list/`, score).then(res => {
      this.setState({ submitted: true, added: true });
    });
  };

  selectTaste = e => {
    const { innerText } = e.target;
    this.setState({ dropdownTaste: innerText });
  };

  selectLook = e => {
    const { innerText } = e.target;
    this.setState({ dropdownLook: innerText });
  };

  render() {
    const { added } = this.state;
    return (
      <Fragment>
        <Button
          className={classes.Like}
          onClick={this.toggle}
          disabled={added ? true : false}
        >
          I've tasted
        </Button>
        <Modal isOpen={this.state.modal}>
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader>Your experience</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Your taste score:</label>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret>
                        {this.state.dropdownTaste}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.selectTaste}>
                          1
                        </DropdownItem>
                        <DropdownItem onClick={this.selectTaste}>
                          2
                        </DropdownItem>
                        <DropdownItem onClick={this.selectTaste}>
                          3
                        </DropdownItem>
                        <DropdownItem onClick={this.selectTaste}>
                          4
                        </DropdownItem>
                        <DropdownItem onClick={this.selectTaste}>
                          5
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Your look score:</label>
                    <UncontrolledButtonDropdown>
                      <DropdownToggle caret>
                        {this.state.dropdownLook}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.selectLook}>1</DropdownItem>
                        <DropdownItem onClick={this.selectLook}>2</DropdownItem>
                        <DropdownItem onClick={this.selectLook}>3</DropdownItem>
                        <DropdownItem onClick={this.selectLook}>4</DropdownItem>
                        <DropdownItem onClick={this.selectLook}>5</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button>Submit</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

export default ScoreModal;
