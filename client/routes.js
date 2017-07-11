import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import LoginPage from './components/login/LoginPage';
import FriendsListPage from './components/friends/FriendsListPage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="login" component={LoginPage} />
    <Route path="friends" component={requireAuth(FriendsListPage)} />
  </Route>
)
