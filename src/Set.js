
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
import SvgMsg from './components/img/icon/icons/btn_set';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
	static navigationOptions = {
		// headerTitle instead of title
		// headerTitle: <Top />,
		title: '基本設定',
	    
	      };
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

		// if (Platform.OS === 'android') {
		// 	return (
		// 		<View style={styles.container}>

		// 			<Text>
		// 				{"For some reason Android crashes here on Expo, so you'll have to test this with iOS … Sorry"}
		// 			</Text>

		// 		</View>
		// 	);
		// }

		return (
			<View style={styles.container}>

				

					<Text>歡迎 『阿明』使用奶油哥app </Text>
					<Text>1.是否要推薦沿路店家給您?</Text>

					<Text>2.您想多久休息一次?</Text>
					<TouchableOpacity onPress={()=>{
              // this.JSON_Post()
              this.props.navigation.push('Home');//7秒后进入底部导航主页

          }}>
					<SvgMsg/>
					</TouchableOpacity>
				
{/* 
				<View style={styles.mapTop}>

					<ImageBackground style={{ width: width, height: width * 0.4 }}
						source={require("../src/components/img/icon/png/bg.png")}>
						<Text>
							{"For some HAHARRRHA"}

						</Text>
					</ImageBackground>
				</View> */}



			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// backgroundColor: '#ecf0f1',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DCF1DB',
		padding: 50

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
		// paddingTop: 100,
		// marginTop: 100,
		// flex: 1,
		// backgroundColor: '#FAA',


	},
});