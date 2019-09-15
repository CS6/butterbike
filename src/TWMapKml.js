import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Overlay, OverlayComponent, Marker, Circle, Polyline, Polygon } from 'react-native-maps';
import Geojson from 'react-native-geojson';
import TWkml from './geomaps/TW';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const destination = { latitude: 24.147782, longitude: 120.673492 }

const LATITUDE = 24.147782;
const LONGITUDE = 120.673492;
// const LATITUDE = -18.9193508;
// const LONGITUDE = -48.2830592;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const KML_FILE = 'https://pastebin.com/raw/jAzGpq1F';
const KML_FILE = './TaiwanCyclingRoutes.kml';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI';

// type KmlContainer {
//         markers: [Marker]
//       }

class MapKml extends React.Component {
        constructor(props) {
                super(props);

                this.state = {
                        region: {
                                latitude: LATITUDE,
                                longitude: LONGITUDE,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                        },
                        region2: {
                              
                                latitude: 37.4133028,
					longitude: -122.151307,
                                latitudeDelta: 0.0922,
                                longitudeDelta: LONGITUDE_DELTA,
                        },
                };

                this.onKmlReady = this.onKmlReady.bind(this);
        }

        onKmlReady() {
                this.map.fitToElements(true);
        }

        render() {
                return (
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
                        //   scrollEnabled={false}
                        //   rotateEnabled={false}
                        //   zoomEnabled={false}
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
                            latitudeDelta: 4,
                            longitudeDelta: 4,
                          }}
                        //  onPress={this.props.onPress}>
                        >
                        
                          <Marker
                            //  coordinate={{ latitude: Number(this.props.latitude), longitude: Number(this.props.longitude) }}
                            coordinate={{ latitude: 24.147782, longitude: 120.673492 }}
                          />
                         	<Polyline
						coordinates={
							// 	[
							// 	{ latitude: 25.0583033, longitude: 121.514873 },
							// 	{ latitude: 25.0683033, longitude: 121.524873 },
							// 	{ latitude: 25.0783033, longitude: 121.544873 },
							// 	{ latitude: 25.0883033, longitude: 121.564873 },
							// 	{ latitude: 25.0983033, longitude: 121.584873 },
							// 	{ latitude: 25.2083033, longitude: 121.604873 },
							// 	{ latitude: 25.0583033, longitude: 121.514873 },
							// ]
							TWkml
							// TWkml
						}
						strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
						strokeColors={[
							'#7F0000',
							'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
							'#B24112',
							'#E5845C',
							'#238C23',
							'#7F0000'
						]}
						strokeWidth={6}
					/>
              
              
                        </MapView>

				
                              
                           
                );
        }
}

MapKml.propTypes = {
        provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
        container: {
                // flex:1,
                // justifyContent: 'flex-end',
                // alignItems: 'center',
                // width:width*0.2,
                // height:height*0.2
        },
        scrollview: {
                alignItems: 'center',
                paddingVertical: 40,
        },
        // map: {
        //         width,
        //         height,
        // },
});

module.exports = MapKml;