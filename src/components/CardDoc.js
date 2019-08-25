import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card';
import MiniMAP from './Minimap';
import { WebView } from 'react-native-webview';



// class index_Screen extends React.Component {
//   static navigationOptions = {
//     // headerTitle instead of title
//     // headerTitle: <Top />,
//     title: 'Details',

//   };


//   render() {
//     return (
//       <SafeAreaView style={styles.container}>


//       </SafeAreaView>
//     );
//   }
// }
export default class CardNotice extends Component {
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
  setPhoneModalVisible(visible) {
    this.setState({ modalPhoneVisible: visible });
  }
  render() {
    return (
      <View >
        <TouchableOpacity
          onPress={() => {
            this.setPhoneModalVisible(true)
          }} >
          <Card body={
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
              <View style={{ flex: 1 }}>
                {this.props.mapBody}
                {/* <MiniMAP/> */}
              </View>
              <Text style={{ fontSize: 22, }}>{this.props.infoTitle}</Text>
              <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
                {this.props.infoBody}</Text>
              <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>
                {this.props.infoBody}</Text>
            </View>
          } />
        </TouchableOpacity>

        <Modal
          animationType={"slide"}
          // transparent={false}
          // transparent={true}

          visible={this.state.modalPhoneVisible}
          onRequestClose={() => { alert("Modal has been closed.") }}
        >
          <TouchableHighlight onPress={() => {
            this.setPhoneModalVisible(!this.state.modalPhoneVisible);
          }}>
            <View style={styles.top}>
              <Text style={styles.TextTop}>Login "&" Setup Modal</Text>
              <Text style={styles.TextDown}>Login "&" Setup Modal</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.background}>
            {/* {this.props.body} */}
            <WebView source={{ uri: 'https://www.google.com/' }} />

          </View>
        </Modal>

      </View>
    );
  }
}


{/*Ex
  <CardNotice infoTitle={} infoBody={}/> 
  <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/> 

*/}
//style={[styles.card]}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal: 10,
  }, top: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', height: height * 0.1, backgroundColor: "#000" 
  },
  TextTop: {
    color: "#fff"
  },
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  }
});

