import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Col, Row } from 'reactstrap';
import RecipeForm from '../../components/RecipeForm';
import { addRecipe } from '../../store/actions/recipes';

class RecipeAddPage extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(recipe) {
    const { actions, history } = this.props;

    actions.addRecipe(recipe)
      .then(() => {
        history.push('/');
      });
  }

  render() {
    return (
      <Container className="py-5">
        <h1 className="text-center">Create New Recipe</h1>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <RecipeForm onSubmit={this.handleFormSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

RecipeAddPage.propTypes = {
  actions: PropTypes.shape({
    addRecipe: PropTypes.func
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    addRecipe,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(RecipeAddPage);
