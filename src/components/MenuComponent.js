import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail  from './DishDetailComponent'

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };
        console.log('Menu component constructor invoked');
    }

    componentDidMount() {
        console.log('Menu component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish : dish
        });
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <DishDetail dish={dish}/>
            );
        } else {
            return (<div></div>);
        }
    }

    renderComments(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {dish.comments.map(function(comment){
                    return(
                            <div>
                                <div>{comment.comment}</div>
                                <div>--{comment.author}, &nbsp; 
                                {new Intl.DateTimeFormat('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: '2-digit' 
                                    }).format(new Date(comment.date))}
                                </div>
                                <br />
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card onClick={ () => this.onDishSelect(dish) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <p>{dish.description}</p>
                        </CardImgOverlay>
                    </Card>
                </div>
                );
            }
        );

        console.log('Menu component render is invoked');

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}

export default Menu; 