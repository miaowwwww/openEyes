import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { observer } from 'mobx-react';

import GlobalNav from "./GlobalNav";
import Login from "./Login";

import store from "../store";

@observer
export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {login: true};
		this.store = store;
	}

	componentDidMount() {
		// setInterval(this.changeLogin, 2000);
	}



	render() {
		let { showLogin } = this.store;
		return (
			<div className="App">
				<div className="App-content">
					{ this.props.children }
				</div>
				<GlobalNav />
				<ReactCSSTransitionGroup
					transitionName="animateBottomUp"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200} >
					{ showLogin && <Login />}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}


