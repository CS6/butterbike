
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
import MapView, { Overlay, OverlayComponent, Marker, Circle, Polyline, Polygon } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude:24.147782, longitude: 123.673492 };
const destination = { latitude: 24.147782, longitude: 120.673492 }
const GOOGLE_MAPS_APIKEY = 'AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI';
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
      location: {
        coords: {
          // latitude: 24.147782,
          // longitude: 120.673492
          // latitude: 37.4133028,
          // longitude: -122.151307
          latitude: 37.4133028,
          longitude: -122.151307
        }
      }

    };
  }
  watchId = null;


  getLocation() {
    Geolocation.getCurrentPosition((location) => {
      let coordinate = [location.coords.longitude, location.coords.latitude]
      this.setState({
        currentLocation: coordinate
      })
    });
  }
  beginWatch() {
    this.state.watchID = Geolocation.watchPosition((location) => {
      let coordinate = [location.coords.longitude, location.coords.latitude]
      this.setState({
        currentLocation: coordinate
      })
    }
    );
  }
  stopWatch() {
    Geolocation.clearWatch(this.state.watchID);
  }
  //获取位置
  //  getLocation() {
  //   Geolocation.getCurrentPosition(
  //       location => {
  //           var result = "速度：" + location.coords.speed +
  //                       "\n经度：" + location.coords.longitude +
  //                       "\n纬度：" + location.coords.latitude +
  //                       "\n准确度：" + location.coords.accuracy +
  //                       "\n行进方向：" + location.coords.heading +
  //                       "\n海拔：" + location.coords.altitude +
  //                       "\n海拔准确度：" + location.coords.altitudeAccuracy +
  //                       "\n时间戳：" + location.timestamp;
  //           alert(result);
  //       },
  //       error => {
  //         alert("获取位置失败："+ error)
  //       }
  //   );
  // }

  componentWillMount() {


    // this.getLocation();
    // data=TS(text);
    //   this.setState({ data: Traditionalized(BookBody) });

  }
  // componentDidMount() {
  //   Geolocation.getCurrentPosition((location) => {
  //     let coordinate = [location.coords.longitude,location.coords.latitude]
  //     this.setState({
  //         currentLocation:coordinate
  //     })
  // });
  // }
  componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    // if (hasLocationPermission) {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log(position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }
  }

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
      );
    });
  }

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({ location: position });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });
  }

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false })
    }
  }


  render() {
    const { loading, location, updatesEnabled } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>

        {/* <ScrollView style={{flex: 1}}> */}
        <View style={{ flex: 1, flexDirection: 'column' }}>

          <MapView
          
          provider={"google"}
            style={{ flex: 1 }}
            //  scrollEnabled={false}
            //  zoomEnabled={false}
            showsUserLocation={true}
            userLocationAnnotationTitle={"你的位置"}
            mapType={"hybrid"}
            // mapType={"mutedStandard"}
            // region={{
            //   //  latitude: Number(this.props.latitude),
            //   //  longitude: Number(this.props.longitude),
            //   latitude: location.coords.latitude,
            //   longitude: location.coords.longitude,
            //   // latitude: 24.147782,
            //   // longitude: 120.673492,
            //   latitudeDelta: 0.003,
            //   longitudeDelta: 0.003,
            // }}
          //  onPress={this.props.onPress}>
          >
             {/* <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="#FF00FF"
  /> */}
   <MapViewDirections
    origin=  {{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={30}
    strokeColor="hotpink"
  />
            <Circle
              radius={100}
              center={{ latitude: 24.147782, longitude: 120.673492 }}
              strokeColor={"rgba(50,100,200,0.5)"}
              fillColor={"rgba(120,200,200,0.5)"}
            />
            <Overlay
              image={"https://reactnative.cn/img/header_logo.png"}
              bounds={[
                [28.147282, 125.676492],
                [22.147240, 118.676452]
              ]} />

            <Polyline
              strokeColor={"rgba(320,200,200,0.9)"}
              lineCap={"butt"}
              coordinates={[
                { latitude: 37.4133028, longitude: -122.151307 },
                { latitude: 24.147890, longitude: 120.673380 },
                { latitude: 24.149782, longitude: 120.673192 },
                { latitude: location.coords.latitude, longitude: location.coords.longitude },
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
            />
            <Marker
              coordinate={{ latitude: Number(location.coords.latitude), longitude: Number(location.coords.longitude) }}
            // coordinate={{latitude: 24.147782, longitude: 120.673492 }}

            />
            <Marker coordinate={{ latitude: Number(location.coords.latitude), longitude: Number(location.coords.longitude) }}>
              <View style={{ backgroundColor: "red", padding: 10 }}>
                <Text>SF</Text>
              </View>
            </Marker>
            {/* <Marker draggable
    coordinate={this.state.x}
    onDragEnd={(e) => {
      this.setState({ x: e.nativeEvent.coordinate })
      console.warn(e.nativeEvent.coordinate )
    }
     
    }
  /> */}


          </MapView>
          <View style={{ width:width,height:height*0.15, position: "absolute", backgroundColor: "#FF0f0f" }}>

            <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} />
            <View style={styles.buttons}>
              <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
              <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} />
            </View>

            <View style={styles.result}>
              <Text>{location.coords.latitude}</Text>
              <Text>{location.coords.longitude}</Text>

              <Text>{JSON.stringify(location, null, 4)}</Text>
            </View>
          </View>
          {/* <View style={{ position: "absolute", backgroundColor: "#FF0f0f", bottom: 50 }}>
            <Text>TXT</Text>
          </View> */}

        </View>

        {/* </ScrollView> */}
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
