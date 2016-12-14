import React from "react";
import GlobalNav from "./GlobalNav";

class App extends React.Component {
	render() {
		return (
			<div>
			123
				<div className="App-content">
					{ this.props.children }
				</div>
				<GlobalNav />
			</div>
		)
	}
}
module.exports = App;