import React, { Component }  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const dish = this.props.dish;
        if(dish != null){
                return(
                    <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                        <CardTitle>
                                            {dish.name}
                                        </CardTitle>
                                        <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {dish.comments.map(function(comment){
                                return(
                                <div>
                                    <div>{comment.comment}</div>
                                    <div>--{comment.author}, &nbsp; 
                                        {new Intl.DateTimeFormat('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: '2-digit' 
                                        }).format(new Date(comment.date))}
                                    </div>
                                <br />
                            </div>
                            )})}
                        </div>
                    </div>
                    </div>
                );
        }
        else {
            return(<div></div>);
        }
    }
}

export default DishDetail;