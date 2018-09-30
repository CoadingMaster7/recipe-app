import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';
import Layout from './components/Layout';

const asyncReipesPage = asyncComponent(() => {
  return import('./containers/RecipesPage');
});

const asyncRecipePage = asyncComponent(() => {
  return import('./containers/RecipePage');
});

const asyncRecipeAddPage = asyncComponent(() => {
  return import('./containers/RecipeAddPage');
});

const asyncRecipeEditPage = asyncComponent(() => {
  return import('./containers/RecipeEditPage');
});

const App = () => (
  <Layout>
    <Switch>
      <Route path="/recipe/:recipeId/edit" component={asyncRecipeEditPage} />
      <Route path="/recipe/:recipeId" component={asyncRecipePage} />
      <Route path="/add" component={asyncRecipeAddPage} />
      <Route path="/" exact component={asyncReipesPage} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default withRouter(App);
