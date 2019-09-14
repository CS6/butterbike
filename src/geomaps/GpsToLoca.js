import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Dimensions,
        TextInput,
        Button,
        Share,
} from 'react-native';
import SvgMsgL from '../components/img/icon/icons/btn_done_R';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Geolocation from 'react-native-geolocation-service';

export default class Card extends Component {


        // cutString(str, len, suffix) {
        //         if (!str) return "";
        //         if (len <= 0) return "";
        //         if (!suffix) suffix = "";
        //         var templen = 0;
        //         for (var i = 0; i < str.length; i++) {
        //                 if (str.charCodeAt(i) > 255) {
        //                         templen += 2;
        //                 } else {
        //                         templen++
        //                 }
        //                 if (templen == len) {
        //                         return str.substring(0, i + 1) + suffix;
        //                 } else if (templen > len) {
        //                         return str.substring(0, i) + suffix;
        //                 }
        //         }
        //         return str;
        // }

        // setDockerId() {
        //         var ID = cutString(this.props.infoBody, 8);
        //         this.setState({ dockerID: ID });

        // };
        getLocation() {
                Geolocation.getCurrentPosition(
                    location => {
                        var result = "速度：" + location.coords.speed +
                                    "\n经度：" + location.coords.longitude +
                                    "\n纬度：" + location.coords.latitude +
                                    "\n准确度：" + location.coords.accuracy +
                                    "\n行进方向：" + location.coords.heading +
                                    "\n海拔：" + location.coords.altitude +
                                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                                    "\n时间戳：" + location.timestamp;
                        alert(result);
                    },
                    error => {
                      alert("获取位置失败："+ error)
                    }
                );
             }
             //开始监听位置变化
   beginWatch() {
        watchID = Geolocation.watchPosition(
                  location => {
                      var result = "速度：" + location.coords.speed +
                                  "\n经度：" + location.coords.longitude +
                                  "\n纬度：" + location.coords.latitude +
                                  "\n准确度：" + location.coords.accuracy +
                                  "\n行进方向：" + location.coords.heading +
                                  "\n海拔：" + location.coords.altitude +
                                  "\n海拔准确度：" + location.coords.altitudeAccuracy +
                                  "\n时间戳：" + location.timestamp;
                      alert(result);
                  },
                  error => {
                    alert("获取位置失败："+ error)
                  }
              );
     }
   
     //停止监听位置变化
     stopWatch() {
        Geolocation.clearWatch(watchID);
     }
           
     onShare = async () => {
        try {
          const result = await Share.share({
                title:"React Native",
            message:
              'React Native | A framework for building native apps using React',
              url:"www.google.com",
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
        render() {
                return (
                        <View style={[styles.Box]}>
                                <View style={{ flex: 1, flexDirection: "column", }}>
                                        <TextInput
                                                style={styles.TextBox}
                                                placeholder="E-MAIL"
                                                placeholderTextColor="#959DAD"
                                        //onChangeText={(text) => this.setState({text})}
                                        // onChangeText={(text) => { this.PH = text; }}
                                        />
                                        <TextInput
                                                style={styles.TextBox}
                                                placeholder="E-MAIL"
                                                placeholderTextColor="#959DAD"
                                        //onChangeText={(text) => this.setState({text})}
                                        // onChangeText={(text) => { this.PH = text; }}
                                        />
                                        <Button title='获取位置' onPress={this.getLocation.bind(this)}  />
                                        <Button title='开始监听' onPress={this.beginWatch.bind(this)}  />
                                        <Button title='停止监听' onPress={this.stopWatch.bind(this)}  />
                                        <Button onPress={this.onShare} title="Share" />
                                </View>
                                <SvgMsgL />
                                {this.props.body}
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
        Box: {
                flexDirection: 'row',
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
        },
        TextBox: {
                flex: 1,
        },
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
        }
});