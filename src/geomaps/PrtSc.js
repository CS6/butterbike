import React, { Component } from 'react';

import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        NativeModules,
        TouchableOpacity,
        Image,
        CameraRoll,
} from 'react-native';

var textCom = NativeModules.textCom;

var ReactNative = require('react-native');

export default class Rntextextends extends Component {

        constructor(props){
                super(props);
                this.state = {
                        imageUrl: '',
                }

        }

        saveImg(img) {

                var promise = CameraRoll.saveToCameraRoll(img);

                promise.then(function (result) {
                        alert('保存成功！地址如下：\n' + result);

                }).catch(function (error) {

                        alert('保存失败！\n' + error);
                });

        }

        takePhoto(){
                ReactNative.takeSnapshot(this.refs.location, { format: 'png', quality: 1 }).then(
                        (uri) => { console.log(uri); this.setState({ imageUrl: uri }) }
                ).catch(
                        (error) => alert(error)
                );
        }

        render(){
                return (
                        <View style={styles.container}>
                                <View ref='location'>
                                        {/*这个点击方法 无需注意 是我测试跟原生交互玩的*/}
                                        <TouchableOpacity activeOpacity={1} onPress={() => {
                                                textCom.shareImage('123', (message => {
                                                        console.log(message);
                                                }))
                                        }}>
                                                <Text style={styles.welcome}>原生交互</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
                                        <TouchableOpacity activeOpacity={1} onPress={() => { this.takePhoto() }}>
                                                <Text style={styles.instructions}>
                                                        生成一张图片</Text>
                                        </TouchableOpacity>
                                </View>
                                {/*点击图片保存到本地*/}
                                <TouchableOpacity activeOpacity={1} onPress={() => { this.saveImg(this.state.imageUrl) }}>
                                        <Image source={{ uri: this.state.imageUrl }} style={{ marginTop: 100, height: 100, width: 200, backgroundColor: 'gray' }} />
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