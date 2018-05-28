import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
	ActivityIndicator
} from 'react-native';

export default class Login extends Component {	
	
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isLoggingIn: false,
			message: ''
		}
	}
	
	 _userLogin = () => { 
		console.log("Butong clicked");
        this.setState({isLoggingIn: true, message:''});
		var params = {
            username: this.state.username,
            password: this.state.password,        
        };
		console.log(JSON.stringify(params));
		
		var formBody = [];
        for (var property in params) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(params[property]);
			formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");		
		console.log(JSON.stringify(formBody));
		
		// Send login details to sever
		var proceed = false;
        fetch("http://10.50.1.148:8080/rs/login", {
			method: "POST", 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        //.then((response) => response.json())
        .then((response) => {
			if (response.error) {
				this.setState({message: response.message});
			}
			else {				
				console.log("Logging Response :: " + JSON.stringify(response));				
				// Open Shop screen
				this.props.onNav('ShopDrawerNav');				
			}
		})
        .done();
		
	 }

    render() {
		
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' onChangeText={(username) => this.setState({username})} value={this.state.username} />
                <TextInput placeholder='Password' onChangeText={(password) => this.setState({password})} value={this.state.password} />
                <View style={{margin:7}} />
				{this.state.isLoggingIn && <ActivityIndicator />}
				{!!this.state.message && (<Text style={{fontSize: 14, color: 'red', padding: 5}}>{this.state.message}</Text>)}
                <Button 
						disabled={this.state.isLoggingIn || !this.state.username || !this.state.password}
                        onPress={this._userLogin}
                        title="Submit"
                    />
                </ScrollView>
            )
    }
}