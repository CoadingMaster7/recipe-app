import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Row, Col } from 'reactstrap';
import RecipesList from '../../components/RecipesList';
import BtnIcon from '../../components/UI/BtnIcon';
import { fetchRecipes } from '../../store/actions/recipes';

class RecipesPage extends Component {
  constructor(props) {
    super(props);

    this.handleRecipeClick = this.handleRecipeClick.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchRecipes();
  }

  handleRecipeClick(id) {
    const { history } = this.props;
    history.push(`/recipe/${id}`);
  }

  render() {
    const { recipes } = this.props;

    return (
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <Row className="align-items-center justify-content-between">
              <Col xs={9}>
                <h1>Recipes</h1>
              </Col>
              <Col xs={3} className="text-right">
                <BtnIcon
                  className="shadow"
                  color="light"
                  icon="plus"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <RecipesList recipes={recipes} onRecipeClick={this.handleRecipeClick} />
          </Col>
        </Row>
      </Container>
    );
  }
}

RecipesPage.propTypes = {
  actions: PropTypes.shape({
    fetchRecipes: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object),
};

RecipesPage.defaultProps = {
  recipes: [],
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.data,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchRecipes,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
