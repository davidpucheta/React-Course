import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Label,
  Col
} from "reactstrap";

const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(values) {
    this.toggle();
    this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          <span className="fa fa-pencil" />
          &nbsp; Submit Comment
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <bold>Submit Comment</bold>
          </ModalHeader>
          <LocalForm onSubmit={values => this.handleSubmit(values)}>
            <ModalBody>
              <Row className="form-group">
                <Label md={12} htmlFor="rating">
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    id="rating"
                    name="rating"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label md={12} htmlFor="yourname">
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".yourname"
                    className="form-control"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    validators={{
                      maxLength: maxLength(15),
                      minLength: minLength(3)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yourname"
                    show="touched"
                    messages={{
                      maxLength: "Name should be no longer than 15 characters",
                      minLength: "Name should be longer than 3 characters"
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label md={12} htmlFor="comment">
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    id="comment"
                    name="comment"
                    model=".comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggle}>
                Submit
              </Button>
            </ModalFooter>
          </LocalForm>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
