import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'; 
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
 if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map(function(comment) {
          return (
            <div key={comment.date}>
              <div>{comment.comment}</div>
              <div>
                --
                {comment.author}, &nbsp;
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(comment.date))}
              </div>
              <br />
            </div>
          );
        })}
         <CommentForm 
         dishId = {dishId}
         addComment={addComment}
         />
      </div>
    );
  } else {
    return(<div></div>);
  }
}

const DishDetail = props => {
  const dish = props.dish;

  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } 
  else if(props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (dish != null) {
    return (
      <div className="container">
        <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    {props.dish.name}
                  </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3> {props.dish.name} </h3>
                  <hr />
                </div>
        </div>

        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} 
            addComment={props.addComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
