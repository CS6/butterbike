import React, { Component } from 'react';

import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        NativeModules,
        TouchableOpacity,
        Image,
        ScrollView,
        CameraRoll,
        Button,
        Share,
        Dimensions,
} from 'react-native';
import { captureScreen, captureRef } from 'react-native-view-shot';
import MAP from "../TWMapKml"
// import MAP from "../components/Minimap"

var textCom = NativeModules.textCom;
const { width, height } = Dimensions.get('window');

var ReactNative = require('react-native');

export default class Rntextextends extends Component {

        constructor(props) {
                super(props);
                this.state = {

                        imageBase64: '',
                        imageURI: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
                        captureConfig: {
                                format: 'png',
                                quality: 0.7,
                                // result: Platform.OS==='ios'? 'data-uri':'base64',
                                // result: 'tmpfile',
                                result: 'base64',
                        },
                        shareLinkContent: shareLinkContent,
                }
                const shareLinkContent = {
                        contentType: 'link',
                        contentUrl: 'https://www.facebook.com/',
                        contentDescription: 'Facebook sharing is easy!'
                };

                this.mainViewRef = React.createRef();
                // this.state = { };



        }
        onShare = async () => {
                try {
                        const result = await Share.share({
                                title: "React Native",
                                // message:
                                //         'React Native | A framework for building native apps using React ',
                                message:
                                ' ！！都幾點了你還在睡！？人家都環島回來了！！',
                                       
                                // url: "www.google.com",
                                // url: "data:<data_type>/<file_extension>;base64,<base64_data>",
                                // url: 'data:image/png;base64,<base64_data>',
                                url: this.state.imageURI,
                                title: " ！！都幾點了你還在睡！？人家都環島回來了！！",
                                subject: "Share Link"
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


        takeScreenShot = () => {
                //handler to take screnshot
                captureScreen({
                        //either png or jpg or webm (Android). Defaults to png
                        format: "jpg",
                        //quality 0.0 - 1.0 (default). (only available on lossy formats like jpg)
                        quality: 0.8
                })
                        .then(
                                //callback function to get the result URL of the screnshot
                                uri => this.setState({ imageURI: uri }),
                                error => console.error("Oops, Something Went Wrong", error)
                        );
        }
        shareScreenShot = () => {
                //handler to take screnshot
                captureRef(this.mainViewRef.current, this.state.captureConfig)
                        .then(
                                //callback function to get the result URL of the screnshot
                                uri => this.setState({ imageURI: `data:image/png;base64,${uri}` }),
                                error => Alert.alert(`截图失败，请稍后再试${e.toString()}`)
                        );
        }


        render() {
                return (
                        <View style={styles.MainContainer}>
                                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#FFAA02" }} >
                                        <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'center', }} >

                                                {/* <Text style={{ fontSize: 10 }}>Click on Button Below to Take ScreenShot</Text> */}
                                                {/* <View ref={this.mainViewRef}> */}
                                                <Image
                                                        source={{ uri: this.state.imageURI }}
                                                        style={{ width: 100, height: 200, resizeMode: 'contain', }} />
                                                {/* </View> */}
                                        </View>
                                        <View style={{ flex: 1, flexDirection: "column" }} >
                                                <Button title="Take Screenshot" onPress={this.takeScreenShot} />
                                                <Button title="shareScreenShot" onPress={this.shareScreenShot} />
                                                <Button onPress={this.onShare} title="Share" />
                                        </View>
                                </View>
                                <View style={{ flex: 3, flexDirection: "column", backgroundColor: "#faaffa", padding: 30 }}  >
                                        <View style={{
                                                flex: 1,
                                        }} ref={this.mainViewRef} >
                                                <View style={{
                                                        flex: 9, backgroundColor: "#fff",
                                                }} >
                                                        <View style={{
                                                                flex: 1, backgroundColor: "#fff", margin: 20
                                                        }}  >
                                                                <MAP />

                                                        </View>
                                                </View>
                                                <View style={{
                                                        flex: 1, backgroundColor: "#fff", justifyContent: 'center',
                                                        alignItems: 'center',
                                                }} >
                                                                                                                <Text style={{ fontSize: 15, }}>2019/08/08 ~ 2077/09/07</Text>

                                                        <Text style={{ fontSize: 15, }}>！！環島達成！！</Text>

                                                </View>
                                        </View>
                                </View>
                        </View>
                );
        }

}






const styles = StyleSheet.create({
        MainContainer: {
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                // backgroundColor: '#fff',
                // borderWidth: 1,
                // borderColor: '#000',
        },
        txt: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                flexDirection: "column",
                backgroundColor: "#faaac1",
                borderRadius: 20,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: width * 0.7,
                height: height * 0.1
        },
        card: {

        },
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

{/* AppRegistry.registerComponent('Rntext', ()=> Rntext); */ }