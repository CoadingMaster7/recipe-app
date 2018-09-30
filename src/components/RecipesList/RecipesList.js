import React from 'react';
import PropTypes from 'prop-types';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ recipes, onRecipeClick, onRecipeDelete }) => (
  <div className="recipes-list">
    {recipes.map((recipe, index) => (
      <RecipesListItem
        key={recipe.id || index}
        item={recipe}
        onClick={onRecipeClick}
        onDelete={onRecipeDelete}
      />
    ))}
  </div>
);

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  onRecipeClick: PropTypes.func,
  onRecipeDelete: PropTypes.func,
};

RecipesList.defaultProps = {
  recipes: [],
  onRecipeClick: () => {},
  onRecipeDelete: () => {},
};

export default RecipesList;
