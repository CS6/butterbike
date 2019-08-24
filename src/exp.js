/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
  Dimensions
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get('window');

import Card_Image from './components/NavbarIcon/Card_Image'
import AM1 from '../src/components/img/icon/icons/AM1';
import AM2 from '../src/components/img/icon/icons/AM2';
import AM3 from '../src/components/img/icon/icons/AM3';
// import AM4 from '../src/components/img/icon/icons/AM4';
import BM1 from '../src/components/img/icon/icons/BM1';
import BM2 from '../src/components/img/icon/icons/BM2';
import BM3 from '../src/components/img/icon/icons/BM3';
import BM4 from '../src/components/img/icon/icons/BM4';
import CM1 from '../src/components/img/icon/icons/CM1';
import CM2 from '../src/components/img/icon/icons/CM2';
import CM3 from '../src/components/img/icon/icons/CM3';
const num =[0,1,2,3,4,5,6,7,8,9]
const Details = [

  {
    type: "Party",
    image: require("../src/components/img/icon/png/AM1.png")
  },
  {
    type: "Wedding",
    image: require("../src/components/img/icon/png/AM2.png")
  },
  {
    type: "Architecture",
    image: require("../src/components/img/icon/png/AM3.png")
  },
  {
    type: "Christening",
    image: require("../src/components/img/icon/png/AM4.png")
  },
  {
    type: "Party",
    image: require("../src/components/img/icon/png/BM1.png")
  },
  {
    type: "Wedding",
    image: require("../src/components/img/icon/png/BM2.png")
  },
  {
    type: "Architecture",
    image: require("../src/components/img/icon/png/BM3.png")
  },
  {
    type: "Christening",
    image: require("../src/components/img/icon/png/BM4.png")
  }, {
    type: "Party",
    image: require("../src/components/img/icon/png/CM1.png")
  },
  {
    type: "Wedding",
    image: require("../src/components/img/icon/png/CM2.png")
  },
  {
    type: "Architecture",
    image: require("../src/components/img/icon/png/CM3.png")
  }, {
    type: "Party",
    image: require("../src/components/img/icon/png/btn_done.png")
  },
  {
    type: "Wedding",
    image: require("../src/components/img/icon/png/btn_done_L.png")
  },
  {
    type: "Architecture",
    image: require("../src/components/img/icon/png/btn_done_R.png")
  }, {
    type: "Party",
    image: require("../src/components/img/icon/png/btn_go.png")
  },
  {
    type: "Wedding",
    image: require("../src/components/img/icon/png/Btn_hear.png")
  },
  {
    type: "Architecture",
    image: require("../src/components/img/icon/png/btn_set.png")
  },{
    type: "Architecture",
    image: require("../src/components/img/icon/png/butterbike.png")
  },{
    type: "Architecture",
    image: require("../src/components/img/icon/png/butterLOGO.png")
  },{
    type: "Architecture",
    image: require("../src/components/img/icon/png/DOC.png")
  },
];
const SVGiconsTS=[
  <AM1  /> ,
  <AM2  /> ,
  <AM3  /> ,
  <BM1  /> ,
  <BM2  /> ,
  <BM3  /> ,
  <BM4  /> ,
  <CM1  /> ,
  <CM2  /> ,
  <CM3  /> ,
  ]

// import MapView, { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = () => {


  let renderPhotoTypes = () => {
    let type = [];

    Details.map((item )=> {
      type.push(
        
        <View  key={item.type}>
        
                {/* <Image  source={require(item.image)}/> */}
                <Image   source={item.image}/>

                {/* <Image  source={require("../src/components/img/icon/png/AM1.png")}/> */}

              <Text >{item.type}</Text>
        
        </View>
      );
    } );

    return type;
  };

  return (

    <Fragment>
      
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={{ flex: 1, flexDirection: 'row',flexWrap:"wrap" }}>
        {renderPhotoTypes()}

        {/* {num.map((note) => {
  return (
    // <CardNotice
    //   infoTitle={note.RepoTags}
    //   infoBody={note.Id}
    //   infoSize={note.Size}
    //   infoLabels={note.Labels}
    //   infoCreated={note.Created}/>
        SVGiconsTS[3]
  );
})}  */}
        </View>
        <View style={{flex:1}}>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          <Text>{instructions}</Text>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>

              {/* <Card_Image></Card_Image> */}
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
