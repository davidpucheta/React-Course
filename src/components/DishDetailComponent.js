import React, { Component }  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const dish = this.props.dish;
                return(
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
                );
           
    
    }
}

export default DishDetail;