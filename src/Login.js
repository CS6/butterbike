
import React, { Component } from 'react';
import { Platform, StyleSheet,Image, Text, View,Dimensions, TextInput, TouchableOpacity, Button } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
// import Btn_Login_set from '../Login/Btn_Login_set';
import SvgMsg from './components/img/icon/icons/btn_set';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: '開始',

  };
  constructor() {
    super();
    this.state = { text: '' };



    this.state = {
      標題們: null,
      電話號碼: null,
      名稱: null,
      性別: null,
      職稱: null,
      常態組別: null,
      是否全職: null,
      備註: null,

      Te: null,
      PH: null,
      NA: null,
      SEX: null,
      JOB: null,
      NO: null,
      NY: null,
      PS: null,


      A: null,
      B: null,
      C: null,
      D: null,
      text: null,
      value: null,


    }
    this.termId = 100;
  }


  render() {
    // let gender_data = [{
    //   value: '男',key: 'male'
    // }, {
    //   value: '女',key: 'female'

    // }];
    let gender_data = [{
      value: 'male', key: 'male'
    }, {
      value: 'female', key: 'female'

    }];

    let group_data = [{
      value: '房務組', key: '房務組',
    }, {
      value: '餐廳組', key: '餐廳組',
    }, {
      value: '生態組', key: '生態組',
    }, {
      value: '工程組', key: '工程組',
    }, {
      value: '農業組', key: '農業組',
    }, {
      value: '修繕組', key: '修繕組',
    }, {
      value: '交管組', key: '交管組',
    }, {
      value: '其他', key: '其他',
    }];
    let if_fulltime_data = [{
      value: 'fullTime',
    }, {
      value: 'partTime',
    }];
    // let if_fulltime_data = [{
    //   value: '是',
    // }, {
    //   value: '否',
    // }];
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
<Image style={{width: width*0.75, height: 100}}source={require('../src/components/img/icon/png/butterLOGO.png')}></Image>


{/* <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        /> */}


     
     {/* <LoginModal/> */}
        <TextInput
          style={styles.TextBox}
          placeholder="爲植物取名"
          //onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.PH = text; }}

        />
        {/* <TextInput
          style={styles.TextBox}
          placeholder="名稱"
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.NA = text; }} />

        <TextInput
          style={styles.TextBox}
          placeholder="職稱"
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => { this.JOB = text; }}
        /> */}

        {/* <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> 註冊 </Text>
        </TouchableOpacity>

 */}

        {/* <Btn_Login_set onPress={() => {

          this.JSON_Post()
        }} /> */}


        {/* <Button
          title="更新"
          onPress={() => {
            this.JSON_Post()
            this.props.navigation.push('Login') 

            // this.setState({album: data})

            // console.warn(this.state.Te); // gives new value OK
            // console.warn(this.state.PH); // gives new value OK
            // console.warn(this.state.NA); // gives new value OK
            // console.warn(this.state.SEX); // gives new value OK\
            // console.warn(this.state.JOB); // gives new value OK
            // console.warn(this.state.NO); // gives new value OK
            // console.warn(this.state.NY); // gives new value OK
            // console.warn(this.state.PS); // gives new value OK

            // onPress={() => { this.onGet()}}




          }}
	/> */}
	      <SvgMsg/>

	<TouchableOpacity onPress={()=>{
              this.JSON_Post()
              this.props.navigation.push('Login') 
          }}>
        <View style={styles.button}>
          <Text style={styles.searchContent}>Login</Text>
          {/* <Text style={styles.searchContent}>簽下去</Text> */}

        </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCF1DB',
    padding: 50
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4DA17',
    padding: 10,
    borderRadius: 25,
    margin: 50
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  }})