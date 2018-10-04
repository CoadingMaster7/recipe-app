import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipeIfNeeded, updateRecipe } from '../../store/actions/recipes';
import { getRecipeById } from '../../store/selectors/recipes';

import RecipeForm from '../../components/RecipeForm';

class RecipeEditPage extends Component {
  constructor(props) {
    super(props);

    this.backToRecipesList = this.backToRecipesList.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const { actions, match } = this.props;
    actions.fetchRecipeIfNeeded(match.params.recipeId);
  }

  backToRecipesList() {
    const { history } = this.props;
    history.push('/');
  }

  handleFormSubmit(recipe) {
    const { actions, match } = this.props;

    actions.updateRecipe({ ...recipe, id: match.params.recipeId })
      .then(this.backToRecipesList);
  }

  render() {
    const { recipe } = this.props;

    return (
      <Container className="py-5">
        <h1 className="text-center">Edit Recipe</h1>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <RecipeForm
              initialValues={recipe}
              submitLabel="Save changes"
              cancelLabel="Back"
              onSubmit={this.handleFormSubmit}
              onCancel={this.backToRecipesList}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

RecipeEditPage.propTypes = {
  actions: PropTypes.shape({
    fetchRecipeIfNeeded: PropTypes.func,
    updateRecipe: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

RecipeEditPage.defaultProps = {
  recipe: null,
};

const mapStateToProps = (state, { match }) => ({
  recipe: getRecipeById(state, match.params.recipeId),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchRecipeIfNeeded,
    updateRecipe,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditPage);
