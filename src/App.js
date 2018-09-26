import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

import Layout from './components/Layout';
import Recipes from './containers/Recipes';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Recipes} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default withRouter(App);
