
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import MapView, { Overlay, OverlayComponent,Constants, Marker, Circle, Polyline, Polygon , PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
// var Geolocation = require('Geolocation');
// geolocation.setRNConfiguration(config);

//code-push release-react book-ios ios -m -d Production
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const GOOGLE_MAPS_APIKEY = 'AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI';


type Props = {};
export default class BookRead extends Component<Props> {
  static navigationOptions = {
    title: 'DetailsScreen',
    /* No more header config here! */
  };
  constructor(props) {
    super(props);
    this.indexHistory = [0];
    this.state = {
      all_font_num: 0,
      index: 0,
      reading: 0,
      data: "這裡還沒有文章喔",
      lang: true,
      num: 1,
      font: true,
      fontFamily: "",
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      currentLocation: 'unknown',
      loading: false,
      updatesEnabled: false,
      location: {}
    };
  }
  watchId = null;


  // getLocation() {
  //   Geolocation.getCurrentPosition((location) => {
  //     let coordinate = [location.coords.longitude, location.coords.latitude]
  //     this.setState({
  //       currentLocation: coordinate
  //     })
  //   });
  // }
  // beginWatch() {
  //   this.state.watchID = Geolocation.watchPosition((location) => {
  //     let coordinate = [location.coords.longitude, location.coords.latitude]
  //     this.setState({
  //       currentLocation: coordinate
  //     })
  //   }
  //   );
  // }
  stopWatch() {
    Geolocation.clearWatch(this.state.watchID);
  }
  

  componentWillMount() {

  }

  componentDidMount() {

  }


  render() {
    const { loading, location, updatesEnabled } = this.state;

    return (

        // <View style={{ flex: 1, flexDirection: 'column' }}>
          <MapView
          provider={"google"}
          //  scrollEnabled={false}
          //  zoomEnabled={false}
          showsUserLocation={true}
          mapType={"standard"}
            style={{  flex: 1, flexDirection: 'column' ,backgroundColor:"black"}}
            cacheEnabled={true}
            loadingEnabled={true}
            loadingIndicatorColor={"#60045F"}
            scrollEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            showsPointsOfInterest={false}
            showsCompass={false}
            showsScale={false}
            showsBuildings={false}
            showsIndoors={false}
            showsTraffic={false}
            // mapType={"mutedStandard"}
      

            initialRegion={{
              //  latitude: Number(this.props.latitude),
              //  longitude: Number(this.props.longitude),
              latitude: 24.147782,
              longitude: 120.673492,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
          //  onPress={this.props.onPress}>
          >
            {/* <Circle
              radius={100}
              center={{ latitude: 24.147782, longitude: 120.673492 }}
              strokeColor={"rgba(50,100,200,0.5)"}
              fillColor={"rgba(120,200,200,0.5)"}
            /> */}
            {/* <Polyline
              strokeColor={"rgba(320,200,200,0.9)"}
              lineCap={"butt"}
              coordinates={[
                { latitude: 24.147782, longitude: 120.673492 },
                { latitude: 24.147890, longitude: 120.673380 },
                { latitude: 24.149782, longitude: 120.673192 },
              ]}
            />
            <Polygon
              strokeColor={"rgba(50,100,200,0.5)"}
              fillColor={"rgba(320,200,200,0.5)"}
              coordinates={[
                { latitude: 24.147282, longitude: 120.676492 },
                { latitude: 24.147890, longitude: 120.673380 },
                { latitude: 24.149782, longitude: 120.673192 },
              ]}
            /> */}
            <Marker
              //  coordinate={{ latitude: Number(this.props.latitude), longitude: Number(this.props.longitude) }}
              coordinate={{ latitude: 24.147782, longitude: 120.673492 }}
            />
            {/* <Marker draggable
    coordinate={this.state.x}
    onDragEnd={(e) => {
      this.setState({ x: e.nativeEvent.coordinate })
      console.warn(e.nativeEvent.coordinate )
    }
     
    }
  /> */}


          </MapView>
        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
