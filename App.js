/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";

import Login from './Login';
import ShopDrawerNav from './shop/DrawerNav';
import Landing from './Landing';

export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			nav: 'Landing'
		}
	}
	
	render() {		
		if (this.state.nav == 'Login') {
			return <Login onNav={(screen) => this.setState({nav: screen})} />
		}
		if (this.state.nav == 'ShopDrawerNav') {
			return <ShopDrawerNav />
		}
		else {
			return <Landing onNav={() => this.setState({nav: 'Login'})} />;
		}
	}
	
}
