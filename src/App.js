import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

import Layout from './components/Layout';
import RecipesPage from './containers/RecipesPage';
import RecipePage from './containers/RecipePage';
import RecipeAddPage from './containers/RecipeAddPage';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={RecipesPage} />
      <Route path="/add" component={RecipeAddPage} />
      <Route path="/recipe/:recipeId" component={RecipePage} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default withRouter(App);
