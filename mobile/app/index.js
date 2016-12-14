import React from 'react';
import reactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './css/index.less';	

import  App  from './components/App';

const rootRoute = {
	childRoutes: [{
		path: '/',
		component: App,
		childRoutes: [
			require('./routes/PageFollow'),
			require('./routes/PageFound'),
			require('./routes/PageMy'),
			require('./routes/PageSelect')
		]
	}]
}
reactDOM.render(
	<Router history={hashHistory} routes={rootRoute} />,
	document.getElementById('root')
)
// reactDOM.render((
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}>
// 				<IndexRedirect to="/welcome" />
// 				<Route path="welcome" component={Welcome} />
// 				<Route path="about" component={About} />
// 		</Route>
// 	</Router>
// ), document.getElementById('root'))
