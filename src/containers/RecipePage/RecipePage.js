import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import { fetchRecipeIfNeeded } from '../../store/actions/recipes';
import { getRecipeById } from '../../store/selectors/recipes';

class RecipePage extends Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.fetchRecipeIfNeeded(match.params.recipeId);
  }

  render() {
    const { recipe } = this.props;

    return (
      <Fragment>
        <Jumbotron fluid>
          <Container>
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <h1 className="text-center">{recipe.title}</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <section>
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <p className="lead">
                  {recipe.content}
                </p>
                </Col>
              </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

RecipePage.propTypes = {
  actions: PropTypes.shape({
    fetchRecipeIfNeeded: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired,
  recipe: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

RecipePage.defaultProps = {
  recipe: {},
};

const mapStateToProps = (state, { match }) => ({
  recipe: getRecipeById(state, match.params.recipeId),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchRecipeIfNeeded,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
