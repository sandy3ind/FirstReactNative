import React, { Component } from 'react';
import {
    ScrollView,
	TouchableOpacity,
    Text,
    View,
    Button
} from 'react-native';

export default class Home extends Component {
	
	static navigationOptions = ({ navigation }) => {		
		return {		
			title: "Home",
			headerLeft: (
				<Button
					onPress={() => navigation.navigate('DrawerOpen')}
					title="Drawer"
					color="#000"
				/>
			)
		}
	};
	
    render() {
        return (
            <ScrollView style={{padding: 20}}>			
			
                <Text 
                    style={{fontSize: 27}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
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