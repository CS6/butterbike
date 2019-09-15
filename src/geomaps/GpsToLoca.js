import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Dimensions,
        TextInput,
        Button,
        Share,
        Alert,
        Text,
        TouchableHighlight
} from 'react-native';
import SvgMsgL from '../components/img/icon/icons/btn_done_R';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Geolocation from 'react-native-geolocation-service';
// const path = ((isAndroid)? dirs.DownloadDir : dirs.DocumentDir) + '/' + fileName;
//       const res = await RNFetchBlob                                                                                                                                                                                                                                                                                                                                                                     
//         .config({
//           path,
//           session: SESSION_NAME,
//         })
//         .fetch('GET', imageUrl)
//       paths[i] = res.path()
//       if(isAndroid) {
//         paths[i] = 'file://' + paths[i]
//       }
export default class Card extends Component {

        constructor(props) {
                super(props);
                const shareLinkContent = {
                        contentType: 'link',
                        contentUrl: 'https://www.facebook.com/',
                        contentDescription: 'Facebook sharing is easy!'
                };

                this.state = { shareLinkContent: shareLinkContent, };
        }


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
                                alert("获取位置失败：" + error)
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
                                alert("获取位置失败：" + error)
                        }
                );
        }

        //停止监听位置变化
        stopWatch() {
                Geolocation.clearWatch(watchID);
        }



        componentDidMount() {
                // this.Get_by_RG();
                // this.Get_LC2Addr();
                // this.Get_LC_place();
                // this.Get_KetWords();

        }
        _onRefresh = () => {
                this.setState({ refreshing: true });
                this.JSON_Post()
                // this.setState({refreshing: false});
        }

        JSON_Post = () => {
                // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
                let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
                fetch(url, {
                        method: 'POST',
                        // headers 加入 json 格式
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                                "uid": this.state.userToken
                        })
                }).then((response) => {
                        return response.json();
                }).then((jsonData) => {
                        // console.warn(jsonData);
                        // console.warn(jsonData.excutionResult);
                        //  info_data = jsonData;
                        // this.JSON_body();
                        if (jsonData.excutionResult == "success") {
                                console.warn(jsonData.announcement);
                                console.warn(this.state.announcement);
                                Alert.alert("更新成功");
                                this.setState({ refreshing: false, isLoading: false, announcement: jsonData.announcement, });
                                console.warn(JSON.stringify(this.state.announcement));
                        }
                        else {
                                Alert.alert("更新失敗", "請檢查網路");
                                this.setState({ refreshing: false });
                                // this.forceUpdate();
                        }
                }).catch((err) => {
                        console.warn('錯誤:', err);
                        Alert.alert("指派失敗", "請檢查網路");
                        this.setState({ refreshing: false });
                        // this.forceUpdate();
                })
        }
        JSON_body = (A) => {
                // console.warn(jsonData);
                // console.warn(this.jsonData);
                console.warn("A " + A + JSON.stringify(info_data));
                console.warn(JSON.stringify(info_data.announcement[0].title));
                // let user_info_data = JSON.stringify(info_data);
                this.setState({
                        // user_info_data:info_data,
                        announcement: info_data.announcement,
                }).then(() => {
                        console.warn(this.state.announcement);
                })
        }

        Get_by_RG = () => {
                // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
                let url = `https://maps.googleapis.com/maps/api/distancematrix/json?
                units=imperial
                &key=AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI
                &language=zh-TW
                &origins=41.43206,-81.38992|-33.86748,151.20699
                &destinations=Washington,DC
                `;
                fetch(url).then((response) => {
                        return response.json();
                }).then((jsonData) => {
                        if (jsonData.status == "OK") {
                                console.warn("從"+jsonData.origin_addresses[0]+"從出發，到"+jsonData.destination_addresses[0]);
                                console.warn("距離"+jsonData.rows[0].elements[0].distance.text+",需要"+jsonData.rows[0].elements[0].duration.text);
                                Alert.alert("更新成功");
                                // this.setState({ refreshing: false, isLoading: false, announcement: jsonData.announcement, });
                                // console.warn(JSON.stringify(this.state.announcement));
                        }
                        else {
                                Alert.alert("更新失敗", "請檢查網路");
                                // this.setState({ refreshing: false });
                        }
                }).catch((err) => {
                        console.warn('錯誤:', err);
                        Alert.alert("指派失敗", "請檢查網路");
                        // this.setState({ refreshing: false });
                })
        }

        Get_LC2Addr = () => {
                // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
                let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=25.06,121.53&language=zh-TW&key=AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI`;
                fetch(url).then((response) => {
                        return response.json();
                }).then((jsonData) => {
                        if (jsonData.status == "OK") {
                                for(i=0;i<jsonData.results.length;i++){
                                        console.warn(jsonData.results[i].formatted_address);
                                        // console.warn(jsonData.results.length);
                                }
                                
                                // console.warn("距離"+jsonData.rows[0].elements[0].distance.text+",需要"+jsonData.rows[0].elements[0].duration.text);
                                Alert.alert("更新成功");
                                // this.setState({ refreshing: false, isLoading: false, announcement: jsonData.announcement, });
                                // console.warn(JSON.stringify(this.state.announcement));
                        }
                        else {
                                Alert.alert("更新失敗", "請檢查網路");
                                // this.setState({ refreshing: false });
                        }
                }).catch((err) => {
                        console.warn('錯誤:', err);
                        Alert.alert("指派失敗", "請檢查網路");
                        // this.setState({ refreshing: false });
                })
        }
        Get_LC_place= () => {
                // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
                let url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@25.06,121.53&language=zh-TW&input=mongolian%20grill&key=AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI`;
                fetch(url).then((response) => {
                        return response.json();
                }).then((jsonData) => {
                        if (jsonData.status == "OK") {
                                for(i=0;i<jsonData.candidates.length;i++){
                                        console.warn(jsonData.candidates[i].formatted_address,jsonData.candidates[i].name,jsonData.candidates[i].opening_hours.open_now);
                                        // console.warn(jsonData.results.length);
                                        
                                }
                                
                                // console.warn("距離"+jsonData.rows[0].elements[0].distance.text+",需要"+jsonData.rows[0].elements[0].duration.text);
                                Alert.alert("更新成功");
                                // this.setState({ refreshing: false, isLoading: false, announcement: jsonData.announcement, });
                                // console.warn(JSON.stringify(this.state.announcement));
                        }
                        else {
                                Alert.alert("更新失敗", "請檢查網路");
                                // this.setState({ refreshing: false });
                        }
                }).catch((err) => {
                        console.warn('錯誤:', err);
                        Alert.alert("指派失敗", "請檢查網路");
                        // this.setState({ refreshing: false });
                })
        }

        Get_KetWords= () => {
                // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
                let url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyC8Yg8Ig6VEZIWz8cWH3yfYOjAGzqIpDMI&input=漢堡王&language=zh-TW`;
                fetch(url).then((response) => {
                        return response.json();
                }).then((jsonData) => {
                        if (jsonData.status == "OK") {
                                for(i=0;i<jsonData.predictions.length;i++){
                                        console.warn(jsonData.predictions[i].structured_formatting.main_text,jsonData.predictions[i].structured_formatting.secondary_text);
                                        // console.warn(jsonData.results.length);
                                        
                                }
                                
                                // console.warn("距離"+jsonData.rows[0].elements[0].distance.text+",需要"+jsonData.rows[0].elements[0].duration.text);
                                Alert.alert("更新成功");
                                // this.setState({ refreshing: false, isLoading: false, announcement: jsonData.announcement, });
                                // console.warn(JSON.stringify(this.state.announcement));
                        }
                        else {
                                Alert.alert("更新失敗", "請檢查網路");
                                // this.setState({ refreshing: false });
                        }
                }).catch((err) => {
                        console.warn('錯誤:', err);
                        Alert.alert("指派失敗", "請檢查網路");
                        // this.setState({ refreshing: false });
                })
        }
       
       

//判斷輸入得字串中是否有"路","街","巷","號"
//沒有就當作關鍵字查詢
//1.輸入關鍵字
//2.輸入地址
//3.在地圖上選取



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
                                       

                                </View>
                             
                                <SvgMsgL />
                                <View style={{ flex: 1, flexDirection: "column", }}>
                                <Button title='获取位置' onPress={this.getLocation.bind(this)} />
                                        <Button title='开始监听' onPress={this.beginWatch.bind(this)} />
                                        <Button title='停止监听' onPress={this.stopWatch.bind(this)} />

                                </View>
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