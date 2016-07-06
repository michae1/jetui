import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Flights from './components/flights';
import Hotels from './components/hotels';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Flights} />
    <Route path="hotels" component={Hotels} />
  </Route>
);
