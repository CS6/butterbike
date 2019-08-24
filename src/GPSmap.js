
import React, { Component } from 'react';
import {
        Platform,
        StyleSheet,
        Text,
        View,
        WebView,
        ScrollView,
        TextInput,
        TouchableOpacity,
        Alert,
        SafeAreaView,
        AsyncStorage,
        Dimensions,
        Button
        //  Geolocation
      } from 'react-native';


const { width, height } = Dimensions.get('window');

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			coordinates: [
				{
					latitude: 37.3317876,
					longitude: -122.0054812,
				},
				{
					latitude: 37.781707,
					longitude: -122.4053769,
				}
			],
		};

		this.mapView = null;
	}

	

	render() {
	  
	  if (Platform.OS === 'android') {
      return (
	      <View style={styles.container}>
	        <Text>
	          {"For some reason Android crashes here on Expo, so you'll have to test this with iOS … Sorry"}
	        </Text>
	      </View>
      );
	  }
	  
		return (
		  <View style={styles.container}>
  			<Text>
	          {"For some HAHAHA"}
	        </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
});