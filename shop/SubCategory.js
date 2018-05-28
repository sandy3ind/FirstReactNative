import React, { Component } from 'react';
import {
    ScrollView,
	TouchableOpacity,
    Text,
    View,
	FlatList,
    Button,
	Alert,
	StyleSheet
} from 'react-native';

export default class SubCategory extends Component {
	
	static navigationOptions = ({ navigation }) => {		
		return {
			title: "Sub Category"				
		}
	};
	
	constructor(props) {
		super(props);
		this.state = {
			categoryId: 0,
			data: [],
			page: 0,
			refreshing: false,
		}
	}
	
	componentDidMount() {		
		const { params } = this.props.navigation.state;
		this.setState({categoryId: params.categoryId});
		this.makeRemoteRequest(params.categoryId);
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
				console.log("ERROR in fetch Categories :: " + error);
				this.setState({ refreshing: false });
		  });
	};
	
	handleRefresh = () => {
		console.log("Handle Refresh :: ");
		this.setState(
		{
			page: 0,			
			refreshing: true
		},
		() => {
			this.makeRemoteRequest(this.state.categoryId);
		}
		);
	};
	
	
	handleLoadMore = () => {
		console.log("Handle More :: page = " + this.state.page);
		this.setState(
		{
			page: this.state.page + 1
		},
		() => {
			this.makeRemoteRequest(this.state.categoryId);
		}
		);
	};
	
	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#607D8B",
				}}
			/>
		);
	};
	
    render() {		
		
        return (
            <View style={styles.MainContainer}>				
				<FlatList 
					data={this.state.data}
					
					renderItem={({item}) => (	
						<TouchableOpacity
							onPress={() => {
								console.log("Open Sub Category or Product screen :: " + item.id);
								this.props.navigation.navigate('Products', { categoryId: item.id });
							}}>
							<Text >{item.name}</Text>
						</TouchableOpacity>
					)}
					
					onRefresh={this.handleRefresh}
					refreshing={this.state.refreshing}
					onEndReached={this.handleLoadMore}
					onEndReachedThreshold={0.5}
					ItemSeparatorComponent={this.renderSeparator}
				/>				  
            </View>
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

