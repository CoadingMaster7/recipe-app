import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RecipeForm extends Component {
  constructor(props) {
   super(props);

   this.state = {
     title: '',
     content: '',
   };

   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleFormSubmit = this.handleFormSubmit.bind(this);
 }

 handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    const { title, content } = this.state;
    const { onCancel } = this.props;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Description</Label>
          <Input
            id="content"
            type="textarea"
            rows="10"
            name="content"
            value={content}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button className="mr-2" color="secondary" onClick={onCancel}>
          Back
        </Button>
        <Button color="secondary" type="submit">Add Recipe</Button>
      </Form>
    );
  }
}

RecipeForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

RecipeForm.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {},
};

export default RecipeForm;
