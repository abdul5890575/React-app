import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <strong> {dish.name}</strong>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      const comments = dish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p> {comment.comment} </p>
            <p> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
          </div>
        );
      });

      return (
        <div>
          <strong>Comments</strong>
          <ul className="list-unstyled">{comments}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
    <div className='container'>
      <div className="row">
        <div className=" col-12 col-md-5 m-1">
          {this.renderDish(this.props.dishes)}
        </div>
        <div className=" col-12 col-md-5 m-1">
          {this.renderComments(this.props.dishes)}
        </div>
      </div>
      </div>
    );
  }
}
export default DishDetail;