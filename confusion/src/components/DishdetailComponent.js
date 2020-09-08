import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb,BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';


  function RenderDish({dish}) {
  
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
  }

  function RenderComments({dish}) {
    if (dish != null) 
      return(
        <div className="col-12 col-md-5 m-1">
           <h4>Comments</h4>
           <ul className="list-unstyled">
           {dish.map((comment) => {
             return (
              <li key={comment.id}>
                <p> {comment.comment} </p>
                <p> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
              </li>
             );
           })}
           </ul>
        </div>
      );
    else 
      return (
      <div></div>);
  }

  const DishDetail = (props)=>{
  if(props.dish != null)
    return (
      <div className="container">
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
          </div>
      </div>
      </div>
  );

  else

  return(
    <div></div>
  );
  
  }

export default DishDetail;