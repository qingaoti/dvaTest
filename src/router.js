import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Count from './routes/Count';
import User from './routes/User/UserList';
import DemoList from './routes/Demo/List';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/count" exact component={Count} />
        <Route path="/user" exact component={User} />
        <Route path="/demo/list" exact component={DemoList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
