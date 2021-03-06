import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Flights from './components/flights';
import Signin from './components/signin';
import Signup from './components/signup';
import Signout from './components/signout';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Flights} />
		<Route path="signin" component={Signin} />
		<Route path="signup" component={Signup} />
		<Route path="signout" component={Signout} />
	</Route>
);
