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
import DocList from '../../DocList';


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

  componentWillReceiveProps(nextProps) {
    this.setState({ modalPhoneVisible: nextProps.io });
  }

  componentDidMount() {
    this.setState({ modalPhoneVisible: this.props.io });
  }



  setPhoneModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible });
  }
  setModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible }, () => {
      this.props.onChangeStep()
      console.log("onChangeStepToB");
    })
  }
  DONEModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible }, () => {

      this.props.onChangeDone()

      console.log("onChangeStepDONE");
    })
  }


  render() {
    return (
      <View >

        {/* <TouchableOpacity
          style={styles.bottomLoginSetup}
          onPress={() => {
            this.setPhoneModalVisible(true)
          }} >
          <Text>Login "&" Setup Modal</Text>
        </TouchableOpacity> */}

        <Modal
          animationType={"slide"}
          // transparent={false}
          // transparent={true}

          visible={this.state.modalPhoneVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
          <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>


              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalPhoneVisible);
                // this.setModalVisible(!this.state.modalPhoneVisible);}}>
              }}>

                <View style={{
                  marginTop: -10, height: height * 0.2, justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text> EXIT</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 9, backgroundColor: "#DCF1DB" }}>
              <DocList/>
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
  }, bottomLoginSetup: {
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
  backgroundimg: {
    // paddingRight:30,
  },
  background: {
    flex: 1,
    // height: 90,
    width: width,
    // resizeMode: 'cover',
    // paddingVertical: 35,
    paddingHorizontal: 20,
    height: height * 0.15,
    marginTop: height * 0.4,

    //  backgroundColor: '#6E93',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 35,

    position: 'absolute',

  },
  TextTop: {
    fontSize: 40

  },
  TextDown: {
    marginTop: 20,
    fontSize: 25,

    // flex:1,
    // paddingHorizontal: 45,
    // backgroundColor: '#6E93',


  }
});
export default withNavigation(LoginModal);