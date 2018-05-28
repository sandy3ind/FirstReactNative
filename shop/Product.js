import React, { Component } from 'react';
import {
    ScrollView,
	TouchableOpacity,
    Text,
	TextInput,
    View,
	FlatList,
    Button,
	Alert,
	StyleSheet
} from 'react-native';


export default class Product extends Component {
	
	static navigationOptions = ({ navigation }) => {	
		const { params } = navigation.state;	
		return {
			title: params ? params.title : 'Product'
		}
	};
	
	constructor(props) {
		super(props);
		this.state = {
			productId: 0
		}
	}
	
	componentDidMount() {		
		const { params } = this.props.navigation.state;
		this.setState({productId: params.productId});
		//this.makeRemoteRequest(params.productId);
	}
	
	// Fetch data from remote server	
	makeRemoteRequest = (categoryId) => {
		const { page } = this.state;	
		var url = `http://10.50.1.148:8080/rs/category/sub/category/${categoryId}/page/${page}/limit/5`;
		
		console.log("URL :: " + url);
		
		console.log("Fetching data");
		fetch(url)
			.then(res => res.json())
			.then(res => {
				console.log("Fetched data :: " + JSON.stringify(res));
				this.setState({
					data: page === 0 ? res : [...this.state.data, ...res],
					refreshing: false
				});
		  })
		  .catch(error => {
				console.log("ERROR in fetch Products :: " + error);
				this.setState({ refreshing: false });
		  });
	};
	
    render() {		
		
        return (			
            <ScrollView style={{padding: 20}}>				
				<TextInput placeholder='Name' />
				<TextInput placeholder='Description' multiline={true}/>
				<Button	title="Add Photos" />
				<Button	title="Submit" />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
 
	MainContainer :{ 
		// Setting up View inside content in Vertically center.
		justifyContent: 'center',
		flex:1,
		margin: 10 
	},
 
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
 
});

