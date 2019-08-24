import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import SVGicon from '../img/icon/Sdcard';
import AM1 from '../img/icon/icons/AM1';
import AM2 from '../img/icon/icons/AM2';
import AM3 from '../img/icon/icons/AM3';
// import AM4 from '../img/icon/icons/AM4';
import BM1 from '../img/icon/icons/BM1';
import BM2 from '../img/icon/icons/BM2';
import BM3 from '../img/icon/icons/BM3';
import BM4 from '../img/icon/icons/BM4';
import CM1 from '../img/icon/icons/CM1';
import CM2 from '../img/icon/icons/CM2';
import CM3 from '../img/icon/icons/CM3';
const SVGicons=[
<SVGicon width={width*0.25} height={width*0.25} /> ,
<AM1 width={width*0.25} height={width*0.25} /> ,
<AM2 width={width*0.25} height={width*0.25} /> ,
<AM3 width={width*0.25} height={width*0.25} /> ,
<BM1 width={width*0.25} height={width*0.25} /> ,
<BM2 width={width*0.25} height={width*0.25} /> ,
<BM3 width={width*0.25} height={width*0.25} /> ,
<BM4 width={width*0.25} height={width*0.25} /> ,
<CM1 width={width*0.25} height={width*0.25} /> ,
<CM2 width={width*0.25} height={width*0.25} /> ,
<CM3 width={width*0.25} height={width*0.25} /> ,
]
const SVGiconsTS=[
  <SVGicon  /> ,
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
const num =[0,1,2,3,4,5,6,7,8,9]
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      ContainerStauts: null,
      connectionInfo: null,
      dockerID: null,
      imgID:0,
    };
  }
  UpConut(){
    this.setState({ imgID: this.props.imgID });
  }
  componentDidMount() {
    this.UpConut();
  }
  render() {
    return (
      <View style={[styles.card]}>

                <Text>{this.state.imgID}</Text>
 {num.map((note) => {
  return (
    // <CardNotice
    //   infoTitle={note.RepoTags}
    //   infoBody={note.Id}
    //   infoSize={note.Size}
    //   infoLabels={note.Labels}
    //   infoCreated={note.Created}/>
        SVGicons[note]
  );
})} 


        {/* <SVGicon width={width*0.25} height={width*0.25}style={styles.backgroundimg} /> */}
        <Text>{this.props.imgID}</Text>

        {/* <Image style={styles.backgroundimg} source={require('../img/docker_on.png')} />  */}
        <View style={styles.background}>
{this.props.body}
</View>
      </View>
    );
  }
}




{/* <View style={{ flex: 1, flexDirection: 'row',flexWrap:"wrap" }}>
{this.state.announcement.map((note) => {
  return (
    <CardNotice
      infoTitle={note.RepoTags}
      infoBody={note.Id}
      infoSize={note.Size}
      infoLabels={note.Labels}
      infoCreated={note.Created}
      />
  );
})}
</View> */}
{/*Ex
  <Card body={
  <View style={{ flex: 1, }}>
    <Text style={{ fontSize: 22, }}>HI</Text>
  </View>
}/> */}


const styles = StyleSheet.create({
  card: {
    flex:1,
    width:width*0.25,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: width * 0.5,
    // padding: 5,
    backgroundColor: '#FF749F',
    // borderRadius: 50,
    // marginVertical: 90,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    // marginHorizontal: 5,
  },
  background: {
    flex:1,
    // height: 90,
    // width: width*0.45,
    width: width*0.33,

    // resizeMode: 'cover',
        paddingVertical: 35,
        paddingHorizontal: 20,

    // backgroundColor: '#6E93',

    position: 'absolute',

  },
  backgroundimg: {
    // height: 90,
    // width: 350,
    // paddingVertical: 15,
//paddingRight:100,
// marginRight:-20,
    // resizeMode: 'cover',
  },
});