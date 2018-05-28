import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Home extends Component {
	
    render() {
		
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                
                <Button style={{margin:20}}
					onPress={this.props.onNav}
					title="Login"
                     />
				<Button style={{margin:20}}
					title="Sign up"
                     />
            </ScrollView>
        )
    }
}