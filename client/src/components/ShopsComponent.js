import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";

class Shops extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const productsCards = this.props.canteens.map(product => {
      return (
        <div className="col-12 col-md-4">
          <Card className="mt-2 mb-2">
            <CardImg top width="100%" height="200" src={product.img} />

            <CardBody className="text-black">
              <CardTitle className="text-danger">
                <b>{product.name} &nbsp; &nbsp; &nbsp;</b>
              </CardTitle>
              <CardSubtitle className="text-success">
                <b>{product.phone}</b>
              </CardSubtitle>
              <CardText>{product.address}</CardText>
              <CardLink
                tag={Link}
                to={"canteens/" + product._id}
                className="text-center"
              >
                <Button className="button btn-block" color="info">
                  <i className="fa fa-eye fa-lg" /> &nbsp;View
                </Button>
              </CardLink>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container full">
        <div className="heading row row-content white-text justify-content-center">
          <div className="col-12">
            <h3 align="center">{this.props.title}</h3>
          </div>
          {this.props.canteens.length === 1 ? (
            this.props.canteensLoading ? (
              <Loading />
            ) : this.props.canteensErrMess ? (
              <h3>{this.props.canteensErrMess}</h3>
            ) : (
              productsCards
            )
          ) : this.props.canteensLoading ? (
            <Loading />
          ) : this.props.canteensErrMess ? (
            <h3>{this.props.canteensErrMess}</h3>
          ) : this.props.canteens.length === 0 ? (
            <div className="justify-content-center">
              <br />
              <br />
              <br />
              <br />
              <h5 align="center">No Canteens Available</h5>
            </div>
          ) : (
            productsCards
          )}
        </div>
      </div>
    );
  }
}

export default Shops;
