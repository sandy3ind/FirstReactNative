import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Home extends Component {
	
	static navigationOptions = {
		title: 'Home',
		headerStyle: {
		  backgroundColor: 'blue',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		  fontWeight: 'bold',
		},
	};
	
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
                <Button
					title="Logout"
                     />
                </ScrollView>
                )
    }
}