import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";

import Home from './Home';

const HomeStack = StackNavigator(
	{
		Home: { screen: Home}
	},
	{
		initialRouteName: 'Home',
		/* The header config from HomeScreen is now here */
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

export default HomeStack;