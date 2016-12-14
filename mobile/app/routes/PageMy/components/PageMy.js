import React from 'react';

class PageMy extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}


	// componentDidMount() {
	// 	if(!this.state.customer) {
	// 		setTimeout(() => this.login(), 1000)
	// 	}
	// }

	// login() {
	// 	this.setState({ photoId: "123", name: "dashabi" });
	// }

	render() {
		return (
			<div className="PageMy">
				<header>
					<i className="icon" >☺</i>
					<img src="xxx"/>
					<p>点击登陆后可评论</p>
					<ul>
						<li><i>♥</i>我的收藏</li>
						<li><i>✉</i>我的评论</li>
					</ul>
				</header>
				<ul>
					<li>我的消息</li>
					<li>我的关注</li>
					<li>我的缓存</li>
					<li>功能开关</li>
				</ul>
			</div>
		)
	}
};

module.exports = PageMy;