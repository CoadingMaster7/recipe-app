import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field as FinalField } from 'react-final-form';
import { Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import { required } from '../../shared/validators';

const RecipeForm = ({
  initialValues,
  submitLabel,
  cancelLabel,
  onSubmit,
  onCancel,
}) => (
  <FinalForm
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit, pristine, invalid}) => (
      <Form onSubmit={handleSubmit}>
        <FinalField name="title" validate={required}>
          {({ input, meta }) => (
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                invalid={meta.invalid && meta.touched}
                {...input}
              />
              <FormFeedback>{meta.error}</FormFeedback>
            </FormGroup>
          )}
        </FinalField>
        <FinalField name="content" validate={required}>
          {({ input, meta }) => (
            <FormGroup>
              <Label htmlFor="content">Description</Label>
              <Input
                id="content"
                type="textarea"
                rows="10"
                invalid={meta.invalid && meta.touched}
                {...input}
              />
              <FormFeedback>{meta.error}</FormFeedback>
            </FormGroup>
          )}
        </FinalField>
        <Button className="mr-2" color="secondary" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button color="primary" type="submit" disabled={invalid || pristine}>
          {submitLabel}
        </Button>
      </Form>
    )}
  />
);

RecipeForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

RecipeForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
  submitLabel: 'Submit',
  cancelLabel: 'Cancel',
  onSubmit: () => {},
  onCancel: () => {},
};

export default RecipeForm;
