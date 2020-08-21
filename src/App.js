import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history'
import Login from './pages/utils/login';
import Landing from './pages/utils/landing';
import Error404 from './pages/utils/error404';


class App extends React.Component {
  render () {
    return (
        <Router history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Landing} />
            <Route path="*" exact component={Error404} />
          </Switch>
        </Router>
    );
  }
}

export default App;