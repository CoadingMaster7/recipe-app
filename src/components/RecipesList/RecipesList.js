import React from 'react';
import PropTypes from 'prop-types';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ items }) => (
  <div className="recipes-list">
    {items.map((item, index) => (
      <RecipesListItem
        key={item.id || index}
        item={item}
      />
    ))}
  </div>
);

RecipesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

RecipesList.defaultProps = {
  items: [],
};

export default RecipesList;
