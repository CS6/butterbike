import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView,
  TextInput,
  AsyncStorage,
  Alert,
  Button,
  Linking,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator, withNavigation } from 'react-navigation';

import SvgMsg from '../img/icon/icons/Btn_hear';
import SvgMsgDOC from '../img/icon/icons/DOC';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
class LoginModal extends React.Component {

// export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+886',
      confirmResult: null,
      text: 'Useless Placeholder',
      name: 'aaaaa',
      phone: 'bbbbb',
      userToken: "778TIlaNHBcW1lwvk3dZ1HuTuPv1",
      modalPhoneVisible: false,

    };
  }

  componentWillReceiveProps() {
    //检测网络是否连接
    // this.getStorage().done();
    // this.check_ID_Storage().done();
  }
  


  // check_ID_Storage = async () => {
  //   //主動驗證是否登入
  //   try {
  //     const value = await AsyncStorage.getItem('userToken');
  //     console.warn(value);

  //     if (value !== null) {
  //       console.warn(value);
  //       console.warn('已登入過', await AsyncStorage.getItem('userToken'));
  //       // this.props.navigation.push('Home')
  //       this._retrieveData();
  //     }
  //     else {
  //       ///這段有問題...
  //       Alert('請登入');
  //       console.warn('請登入');
  //     }


  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // save() {
  //   //设置多项
  //   var keyValuePairs = [['userToken', this.state.userToken]]
  //   AsyncStorage.multiSet(keyValuePairs, function (errs) {
  //     if (errs) {
  //       //TODO：存储出错
  //       return;
  //     }
  //     console.warn('userToken保存成功!');
  //   });
  // }


  setPhoneModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible });
  }


  // clear() {
  //   var _that = this;
  //   AsyncStorage.clear(function (err) {
  //     if (!err) {
  //       _that.setState({
  //         name: "",
  //         phone: ""
  //       });
  //       alert('存储的数据已清除完毕!');
  //     }
  //   });
  // }


  render() {
    return (
      <View >

        <TouchableOpacity
          style={styles.bottomLoginSetup}
          onPress={() => {
            this.setPhoneModalVisible(true)
          }} >
          <Text>Login "&" Setup Modal</Text>
        </TouchableOpacity>    
        
<Modal
          animationType={"slide"}
          // transparent={false}
          transparent={true}

          visible={this.state.modalPhoneVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
                          <TouchableHighlight  onPress={() => {
                  this.setPhoneModalVisible(!this.state.modalPhoneVisible);}}>
          <View style={{ height:height*0.2,paddingTop:height*0.4, }}>
          {/* <View style={{backgroundColor: "#2E43",
              // marginTop: -10, height:height*0.2, justifyContent: 'center',
              // alignItems: 'center',
            }}></View> */}
            <View style={{
              marginTop: -10, height:height*0.2, justifyContent: 'center',
              alignItems: 'center',
            }}>
                        <Text> EXIT</Text> 

              {/* <Text>Is the Phone Modal</Text> */}

              <View opacity={0.9} style={{ marginTop: 15, width: width * 0.95, height: height * 0.53, backgroundColor: "white", padding: 10, borderRadius: 15, }}>

              </View>

              <View style={{
                flex: 0.1, backgroundColor: "#2A2E43", alignItems: 'center',
                alignItems: 'center',
                justifyContent: "flex-end"
              }}>

{/* 
                <TouchableHighlight style={styles.Box} onPress={() => {
                  this.setPhoneModalVisible(!this.state.modalPhoneVisible);}}>
                  <Text>back to home</Text>
                </TouchableHighlight> */}
              </View>


            </View>
          </View>
          </TouchableHighlight>
          <View style={styles.background}>
          <View style={{flexDirection:"column", alignItems: 'center', justifyContent: 'center',}}>
{this.props.body}

<Text style={styles.TextTop}>推薦地點</Text>
<Text style={styles.TextDown}>{new Date(Date.now()).toLocaleString()}</Text> 
<Text >推薦你去附近的名產</Text> 
<Text style={{color:"#00F"}} >「彰化好吃肉丸」</Text> 
<Text >距離目前位置約300m，要的話點擊按鈕。</Text> 

{/*          
<Image style={{   }}
  source={require("../img/icon/png/CM3.png")}/> */}
          {/* <SvgMsg style={styles.backgroundimg} /> */}
          <SvgMsg  />
          <SvgMsgDOC/>

</View>

</View>
        </Modal> 
         </View>
    );
  }
}


{/*Ex
  <Card body={
  <View style={{ flex: 1, }}>
    <Text style={{ fontSize: 22, }}>HI</Text>
  </View>
}/> */}


const styles = StyleSheet.create({
  card: {
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: width * 0.9,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: width * 0.05,
  } , bottomLoginSetup: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#3B56C9',
    borderStyle: 'solid',
    marginRight: 5,
    marginVertical: 5,
    height: 50,

  }
  ,
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,

    marginVertical: 20,

    height: 40,
    borderRadius: 10,
    backgroundColor: "#665EFFa5",
    // marginVertical:10,
    width: width * 0.9,
  },
  backgroundimg:{
    // paddingRight:30,
  },
  background: {
    flex:1,
    // height: 90,
    width: width,
    // resizeMode: 'cover',
        // paddingVertical: 35,
        paddingHorizontal: 20,
        height:height*0.15,
       marginTop:height*0.4, 

    //  backgroundColor: '#6E93',
  flexDirection: 'column', 
  justifyContent: 'center',
   paddingHorizontal: 35,

    position: 'absolute',

  },
  TextTop:{
fontSize:40

  },
  TextDown:{
    marginTop:20,
    fontSize:25,

    // flex:1,
    // paddingHorizontal: 45,
    // backgroundColor: '#6E93',


  }
});
export default withNavigation(LoginModal);