import React from 'react';
import { observer } from 'mobx-react';

import store from "../../../store";

@observer
class PageMy extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.store = store;
	}

	componentDidMount() {
	}
	
	login = () => {
		console.log('login');
		this.store.showLogin = ture;
		// this.setState({photoId: 'user.jpg', name: 'dashabi'})
	}

	handleCollection = () => {
		console.log('handleCollection');
	}

	handleComment = () => {
		console.log('handleComment');
	}

	handleImg = () => {
		console.log('handleImg');
		let { user } = this.store;
		if(user.id) {
			user.name = window.prompt('请输入你的新名字', user.name) || user.name;
		}else {
			this.store.showLogin = true;
		}
	}

	render() {
		let { photoId, name } = this.store.user;
		console.log(this.store)
		return (
			<div className="PageMy">
				<header>
					<i className="icon" >☺</i>
					<img src={img( photoId || 'default.png')} onClick={this.handleImg} />
					<p>{ name || '点击登陆后可评论'}</p>
					<ul>
						<li onClick={this.handleCollection}><i>♥</i>我的收藏</li>
						<li onClick={this.handleComment}><i>✉</i>我的评论</li>
					</ul>
				</header>
				<dl>
					<dt>我的消息</dt>
					<dt>我的关注</dt>
					<dt>我的缓存</dt>
					<dt>功能开关</dt>
				</dl>
			</div>
		)
	}
};

function img(name) {
	return `./images/${name}`
}

module.exports = PageMy;