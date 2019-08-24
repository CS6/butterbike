
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
	Image,
	ImageBackground,
	Button
	//  Geolocation
} from 'react-native';
import MapModalGO from './components/MsgModal/MapModalGO'
import MapModalMemuA from './components/MsgModal/MapModalMemuA'
import MapModalMemuB from './components/MsgModal/MapModalMemuB'
import MapModaldone from './components/MsgModal/MapModaldone'
import MapModalDOC from './components/MsgModal/MapModalDOC'
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

				<View style={styles.mapbody}>

					<Text>
						{"For some HAHAHA"}

					</Text>
					<MapModalGO/>
					<MapModalMemuA/>
					<MapModalMemuB/>
					<MapModaldone/>
					<MapModalDOC/>


				</View>

				<View style={styles.mapTop}>

					<ImageBackground style={{ width: width, height: width * 0.4 }}
						source={require("../src/components/img/icon/png/bg.png")}>
						<Text>
							{"For some HAHARRRHA"}

						</Text>
					</ImageBackground>
				</View>



			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ecf0f1',

	},
	mapTop: {
		width: width,
		height: height * 0.1,
		// backgroundColor: '#FF0',
		// borderWidth: 10,
		borderColor: "#FF0",
		position: 'absolute',

	},
	mapbody: {
		paddingTop: 100,
		marginTop: 100,
		flex: 1,
		backgroundColor: '#FAA',


	},
});