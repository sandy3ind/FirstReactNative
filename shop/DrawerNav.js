import React, { Component } from 'react';
import { DrawerNavigator } from "react-navigation";

import TabNav from './TabNav';

const DrawerNav = DrawerNavigator(
	{
		TabNav: {screen: TabNav}  
	}
);

export default DrawerNav;