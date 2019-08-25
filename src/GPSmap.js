
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
	Button,
	//  Geolocation
} from 'react-native';
import MapModalGO from './components/MsgModal/MapModalGO'
import MapModalMemuA from './components/MsgModal/MapModalMemuA'
import MapModalMemuB from './components/MsgModal/MapModalMemuB'
import MapModaldone from './components/MsgModal/MapModaldone'
import MapModalDOC from './components/MsgModal/MapModalDOC'
import MapModalDOCList from './components/MsgModal/MapModalDOCList'
const { width, height } = Dimensions.get('window');
import SvgMsg from './components/img/icon/icons/btn_start';
import Expmap from './expmap';
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
			step: 1,
			step_GO: false,
			step_A: false,
			step_B: false,
			step_Done: false,
			step_DOC: false,
			step_DOC_List: false,

		};

		this.mapView = null;
	}

	// componentWillMount() {
	// 	// this.setState({ step_GO: true });
	// }
	// onPressButton(){
	// 	this.setState({ step_GO: false },{ step_A: true });
	// } 
	// onPressButton = () => {
	// 	console.warn('Button pressed!');
	//       }

	onChangeStep = () => {
		this.setState({ step_GO: false, step_A: false, step_B: false, step_Done: true, step_DOC_List: false, });
		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });

		console.warn('Button pressed!1');
	}
	onChangeStepGO = () => {
		this.setState({ step_GO: false, step_A: true });
		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });

		console.warn('Button pressed!2');
	}
	onChangeStepA = () => {
		this.setState({ step_A: false, step_B: true });

		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });

		console.warn('Button pressed!3');
	}
	onChangeStepB = () => {
		this.setState([{ step_B: false }, { step_Done: true }]);
		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });

		console.warn('Button pressed!4');
	}
	openStepDOC = () => {
		this.setState({ step_GO: false, step_A: false, step_B: false, step_Done: false, step_DOC_List: false, step_DOC: true });
		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });
		// this.props.navigation.push('Login') 

		console.warn('Button op!DOC');
	}
	onChangeStepDOC = () => {

		this.setState({ step_DOC_List: true });
		// this.setState({ step_B:true});
		// this.setState({ step_GO: false });
		// this.props.navigation.push('Login') 

		console.warn('Button pressed!DOC');
	}
	// onChangeStepDOCList = () => {
	// 	this.setState([ { step_B: true }]);
	// 	// this.setState({ step_B:true});
	// 	// this.setState({ step_GO: false });
	// 	// this.props.navigation.push('Login') 

	// 	console.warn('Button pressed!DOCLIST');
	// }



	setPhoneModalVisible(visible) {
		this.setState({ step_A: visible });

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

				{/* <View style={styles.mapbody}>
					<TouchableOpacity
						onPress={() => {
							// this.setPhoneModalVisible(true)
							this.openStepDOC()
						}} >
							<SvgMsg/>
					</TouchableOpacity>
					<MapModalGO io={this.state.step_GO} onChangeStep={this.onChangeStepGO} />
					<MapModalMemuA io={this.state.step_A} onChangeStep={this.onChangeStepA} onChangeDone={this.onChangeStep} />
					<MapModalMemuB io={this.state.step_B} onChangeStep={this.onChangeStepB} onChangeDone={this.onChangeStep} />
					<MapModaldone io={this.state.step_Done} onChangeStep={this.onChangeStep} onChangeDone={this.onChangeStep} />
					<MapModalDOC io={this.state.step_DOC} onChangeStep={this.onChangeStepGO} onChangeDone={this.onChangeStepDOC} />
					<MapModalDOCList io={this.state.step_DOC_List} onChangeStep={this.onChangeStep} />
				</View> */}
				<View style={styles.mapbody}>
					<Expmap />


				</View>

				<View style={styles.mapTop}>

					<ImageBackground style={{
						width: width, height: width * 0.4,
						flexDirection: 'column',
						alignItems: 'center',
						// justifyContent: 'center',
					}}
						source={require("../src/components/img/icon/png/bg.png")}>
						
						<TouchableOpacity
							onPress={() => {
								// this.setPhoneModalVisible(true)
								this.openStepDOC()
							}} >
							<SvgMsg />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								// this.setPhoneModalVisible(true)
								this.onChangeStepGO()
							}} >
							<SvgMsg />
						</TouchableOpacity>
						<Text>
							{"時間：00:10:32 總距離：15.3km"}

						</Text>
					</ImageBackground>

					<MapModalGO io={this.state.step_GO} onChangeStep={this.onChangeStepGO} />
					<MapModalMemuA io={this.state.step_A} onChangeStep={this.onChangeStepA} onChangeDone={this.onChangeStep} />
					<MapModalMemuB io={this.state.step_B} onChangeStep={this.onChangeStepB} onChangeDone={this.onChangeStep} />
					<MapModaldone io={this.state.step_Done} onChangeStep={this.onChangeStep} onChangeDone={this.onChangeStep} />
					<MapModalDOC io={this.state.step_DOC} onChangeStep={this.onChangeStepGO} onChangeDone={this.onChangeStepDOC} />
					<MapModalDOCList io={this.state.step_DOC_List} onChangeStep={this.onChangeStep} />
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
		// paddingTop: 100,
		marginTop: 100,
		flex: 1,
		backgroundColor: '#FAA',


	},
});