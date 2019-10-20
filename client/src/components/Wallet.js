import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Label,
  Row,
  Col,
  InputGroupAddon,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = val => {
  return val && val.toString().length;
};
const maxLength = len => val => {
  return !val || val.toString().length <= len;
};
const minLength = len => val => val && val.toString().length >= len;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const matchcreds = original => val => val === original;
const ifminLength = len => val => !val || val.length >= len;
const isNumber = val => !isNaN(Number(val));

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
      isPasswordModalOpen: false
    };
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.togglePasswordModal = this.togglePasswordModal.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  togglePasswordModal() {
    this.setState({
      isPasswordModalOpen: !this.state.isPasswordModalOpen
    });
  }

  toggleEditModal() {
    this.setState({ isEditModalOpen: !this.state.isEditModalOpen });
  }

  render() {
    if (this.props.auth.userinfo === null) {
      return (
        <div className="row heading">
          Failed to fetch. Please reload the page
        </div>
      );
    }
    return (
      <div className="container mt-6 home text-center align-self-center">
        <div className="row text-center justify-content-center mt-2">
          <Card className="heading">
            <CardHeader>
              <h3>My Wallet</h3>
            </CardHeader>
            <CardBody>
              <CardText>
                <h5>
                  {" "}
                  Account ID : {"          " + this.props.auth.userinfo._id}
                </h5>
                <h5>
                  {" "}
                  Facebook Profile Link :{" "}
                  <a
                    href={
                      "https://www.facebook.com/" +
                      this.props.auth.userinfo.facebookProfile
                    }
                  >
                    <span className="fa fa-facebook"></span>
                  </a>
                </h5>
                {this.props.auth.userinfo.showfacebook ? (
                  " (Publicly Visible)"
                ) : (
                  <React.Fragment />
                )}
              </CardText>
              <Button color="info" onClick={this.toggleEditModal}>
                Add &nbsp;{"   "}
                <span className="fa fa-pencil" />
              </Button>{" "}
              {this.props.auth.userinfo.admin ? (
                <div />
              ) : (
                <Button color="info" onClick={this.togglePasswordModal}>
                  Change Password &nbsp;{"   "}
                  <span className="fa fa-key" />
                </Button>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Wallet;
