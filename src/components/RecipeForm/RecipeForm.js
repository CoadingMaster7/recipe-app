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

 componentDidMount() {
   const { recipe } = this.props;

   if (recipe) {
     this.setDefaultState(recipe);
   }
 }

 componentWillReceiveProps(nextProps) {
   const { recipe } = this.props;

   if (nextProps.recipe !== recipe) {
     this.setDefaultState(nextProps.recipe);
   }
 }

 setDefaultState(recipe) {
   const { title, content } = recipe;

   this.setState({
     title,
     content,
   });
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
    const { submitLabel, cancelLabel, onCancel } = this.props;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={title}
            required
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
            required
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button className="mr-2" color="secondary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button color="secondary" type="submit">
          {submitLabel}
        </Button>
      </Form>
    );
  }
}

RecipeForm.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }),
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

RecipeForm.defaultProps = {
  recipe: null,
  submitLabel: 'Submit',
  cancelLabel: 'Cancel',
  onSubmit: () => {},
  onCancel: () => {},
};

export default RecipeForm;
