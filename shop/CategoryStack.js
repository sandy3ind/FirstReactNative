import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";

import Category from './Category';
import SubCategory from './SubCategory';
import Products from './Products';
import Product from './Product';

const CategoryStack = StackNavigator(
	{
		Category: { screen: Category},
		SubCategory: { screen: SubCategory},
		Products: { screen: Products },
		Product: { screen: Product }
	},
	{
		initialRouteName: 'Category',
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

export default CategoryStack;