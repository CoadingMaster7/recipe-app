import React from 'react';
import PropTypes from 'prop-types';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ recipes, onRecipeClick, onRecipeEdit, onRecipeDelete }) => (
  <div className="recipes-list">
    {recipes.map((recipe, index) => (
      <RecipesListItem
        key={recipe.id || index}
        item={recipe}
        onClick={onRecipeClick}
        onEdit={onRecipeEdit}
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
  onRecipeEdit: PropTypes.func,
  onRecipeDelete: PropTypes.func,
};

RecipesList.defaultProps = {
  recipes: [],
  onRecipeClick: () => {},
  onRecipeEdit: () => {},
  onRecipeDelete: () => {},
};

export default RecipesList;
