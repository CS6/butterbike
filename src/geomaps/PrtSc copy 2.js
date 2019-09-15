
import React, { Component } from 'react';
import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        NativeModules,
        TouchableOpacity,
        Image,
        Button,
        Dimensions,
        Picker,
        Slider,
        ScrollView,
        CameraRoll,
        Switch
} from 'react-native';
var {height, width} = Dimensions.get('window');
// import ViewShot from "react-native-view-shot";
import { ViewShot,captureRef ,captureScreen } from "react-native-view-shot";


    const catsSource = {
        uri: "https://pic.yupoo.com/forrest071/FXTxkoxj/medium.jpg"
    };
    
// export default class pictureDemo extends Component {
//   constructor(props){
//         super(props);
//         this.state={
//                 uri: 'null',
//           //initial image to the <Image>
//           imageURI : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'
//         }
//       }
//       takeScreenShot=()=>{
//         //handler to take screnshot
//         //此方法將捕獲當前顯示的屏幕的內容作為本機硬件屏幕截圖。它不需要ref輸入，因為它在視圖級別不起作用。這意味著ScrollViews不會被完整捕獲 - 只有用戶當前可見的部分。
//         captureScreen({
//           //either png or jpg or webm (Android). Defaults to png
//           format: "png",
//           //quality 0.0 - 1.0 (default). (only available on lossy formats like jpg)
//           quality: 0.8
//         })
//         .then(
//           //callback function to get the result URL of the screnshot
//           uri => this.setState({ imageURI : uri }),
//           error => console.error("Oops, Something Went Wrong", error)
//         );
//       }
// //       takeViewShot=()=>{
// //         //handler to take screnshot
// //         //此方法將捕獲當前顯示的屏幕的內容作為本機硬件屏幕截圖。它不需要ref輸入，因為它在視圖級別不起作用。這意味著ScrollViews不會被完整捕獲 - 只有用戶當前可見的部分。
// //         captureRef(viewRef, {
// //                 format: "jpg",
// //                 quality: 0.8
// //               }).then(
// //                 // uri => console.log("Image saved to", uri),
// //                 uri => this.setState({ imageURI : uri }),
// //                 error => console.error("Oops, snapshot failed", error)
// //               );
// //       }

//       snapshot = refname => () =>
// captureRef(refname, {
//   format: "jpg",
//   quality: 0.8,
//   result: "tmpfile",
//   snapshotContentContainer: true
// })
// .then(
//   uri => console.log("Image saved to", uri),
//   error => console.error("Oops, snapshot failed", error)
// );



    

//   takeToImage() {
//     ReactNative.takeSnapshot(this.refs.location, {format: 'png', quality: 1}).then(
//         (uri) => this.setState({uri:uri})
//     ).catch(
//         (error) => alert(error)
//     );
//   }

//   render(){
//       console.log(this.state.uri);
//       return (
//         // <View>
//         //     <View ref='location' style={{backgroundColor: 'green', padding: 12, margin: 20}}>
//         //         <Text>this is a girl</Text>
//         //         <Text>this is a friend</Text>
//         //         <Text>o</Text>
//         //         <Text>this is a girl friend</Text>
//         //     </View>
//         //     <Text onPress={()=>this.takeToImage()}>生成图片</Text>
//         //     <Image style={{borderWidth: 1, height: 100, width: width, marginTop: 10}} source={{uri: this.state.uri}} />
//         // </View>
//         <View style={styles.MainContainer}>
//           <Text style={{fontSize:20}}>Click on Button Below to Take ScreenShot</Text>
//           <Image 
//           ref="full"
//               source={{uri : this.state.imageURI}} 
//               style={{width: 200, height: 300, resizeMode: 'contain', marginTop: 5}} />
              
//           <Button title="Take Screenshot" onPress={this.takeScreenShot} />
//           {/* <Button title="takeViewShot" onPress={this.takeViewShot()} /> */}
//           <Button title="snapshot" onPress={this.snapshot("full")} />

          
//       </View>
//       );
//     }
// }

export default class Component01 extends Component {
        constructor(props){
                        super(props);
                        this.state = {
                                previewSource: 'uri: "https://pic.yupoo.com/forrest071/FXTxkoxj/medium.jpg"',
                                error: null,
                                res: null,
                                uri: 'null',
                    imageURI : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
                    
                                value: {
                                    format: "png",
                                    quality: 0.9,
                                    result: "tmpfile",
                                    snapshotContentContainer: true
                                }
                            };
                        

                      }

        static navigationOptions = ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
        });
    
        snapshot = refname => () =>
            (refname
                ? captureRef(this.refs[refname], this.state.value)
                : captureScreen(this.state.value)
            )
                .then(
                res =>
                    this.state.value.result !== "tmpfile"
                        ? res
                        : new Promise((success, failure) =>
                            // just a test to ensure res can be used in Image.getSize
                            Image.getSize(
                                res,
                                (width, height) => (
                                    console.log(res, width, height), success(res)
                                ),
                                failure
                            )
                        )
                )
                .then(res =>
                    this.setState({
                        error: null,
                        res,
                        previewSource: {
                            uri:
                            this.state.value.result === "base64"
                                ? "data:image/" + this.state.value.format + ";base64," + res
                                : res
                        }
                    })
                )
                .catch(
                error => (
                    console.warn(error),
                    this.setState({ error, res: null, previewSource: null })
                )
                );
    
        render() {
            const { value, previewSource, error, res } = this.state;
            const {
          format,
                quality,
                width,
                height,
                result,
                snapshotContentContainer
        } = value;
            return (
                <ScrollView
                    ref="full"
                    style={styles.root}
                    contentContainerStyle={styles.container}
                >
                    <View ref="header" style={styles.header}>
                        <Text style={styles.title}>😃 截屏组件示例 😜</Text>
                        <View style={styles.p1}>
                            <Text style={styles.text}>组件名称： </Text>
                            <Text style={styles.code}>react-native-view-shot</Text>
                        </View>
                        <View style={styles.preview}>
                            {error ? (
                                <Text style={styles.previewError}>
                                    {"" + (error.message || error)}
                                </Text>
                            ) : (
                                //     <Image
                                //         fadeDuration={0}
                                //         resizeMode="contain"
                                //         style={styles.previewImage}
                                //         source={previewSource}
                                //     />
                                    <Image 
                                        //       ref="full"
                                        
                                        source={{previewSource}} 

                                                //   source={{uri : this.state.imageURI}} 
                                                  style={{width: 200, height: 300, resizeMode: 'contain', marginTop: 5}} />
                                    
                                )}
                        </View>
                        <Text numberOfLines={1} style={styles.previewUriText}>
                            {res ? res.slice(0, 200) : ""}
                        </Text>
                    </View>
                    <View ref="form" style={styles.form}>
                        <View style={styles.btns}>
                            {/* <Btn
                                label="😻 Reset"
                                onPress={() => this.setState({ previewSource: catsSource })}
                            />
                            <Btn label="📷 Head Section" onPress={this.snapshot("header")} />
                            <Btn label="📷 Form" onPress={this.snapshot("form")} />
                            <Btn
                                label="📷 Experimental Section"
                                onPress={this.snapshot("complex")}
                            />
                            <Btn label="📷 All (ScrollView)" onPress={this.snapshot("full")} />
                            <Btn label="📷 WebView" onPress={this.snapshot("webview")} />
                            <Btn label="📷 Native Screenshot" onPress={this.snapshot()} />
                            <Btn
                                label="📷 Empty View (should crash)"
                                onPress={this.snapshot("empty")}
                            /> */}
                             <Button title="Reset" onPress={() => this.setState({ previewSource: catsSource })} />
                           <Button title="Head Section" onPress={this.snapshot("header")} />
                           <Button title="Form" onPress={this.snapshot("form")} />
                           <Button title="Experimental Section" onPress={this.snapshot("complex")} />
                           <Button title="All" onPress={this.snapshot("full")} />


                           <Button title="webview" onPress={this.snapshot("webview")} />
                           <Button title="null" onPress={this.snapshot()} />
                           <Button title="empty" onPress={this.snapshot("empty")} />

                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Format</Text>
                            <Picker
                                style={styles.input}
                                selectedValue={format}
                                onValueChange={format =>
                                    this.setState({ value: { ...value, format } })}
                            >
                                <Picker.Item label="PNG" value="png" />
                                <Picker.Item label="JPEG" value="jpeg" />
                                <Picker.Item label="WEBM (android only)" value="webm" />
                                <Picker.Item label="INVALID" value="_invalid_" />
                            </Picker>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Quality</Text>
                            <Slider
                                style={styles.input}
                                value={quality}
                                onValueChange={quality =>
                                    this.setState({ value: { ...value, quality } })}
                            />
                            <Text>{(quality * 100).toFixed(0)}%</Text>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Size</Text>
                            <Switch
                                style={styles.switch}
                                value={width !== undefined}
                                onValueChange={checked =>
                                    this.setState({
                                        value: omit(
                                            {
                                                ...value,
                                                width: 300,
                                                height: 300
                                            },
                                            checked ? [] : ["width", "height"]
                                        )
                                    })}
                            />
                            {width !== undefined ? (
                                <TextInput
                                    style={styles.inputText}
                                    value={"" + width}
                                    keyboardType="number-pad"
                                    onChangeText={txt =>
                                        !isNaN(txt) &&
                                        this.setState({
                                            value: { ...value, width: parseInt(txt, 10) }
                                        })}
                                />
                            ) : (
                                    <Text style={styles.inputText}>(auto)</Text>
                                )}
                            <Text>x</Text>
                            {height !== undefined ? (
                                <TextInput
                                    style={styles.inputText}
                                    value={"" + height}
                                    keyboardType="number-pad"
                                    onChangeText={txt =>
                                        !isNaN(txt) &&
                                        this.setState({
                                            value: { ...value, height: parseInt(txt, 10) }
                                        })}
                                />
                            ) : (
                                    <Text style={styles.inputText}>(auto)</Text>
                                )}
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Result</Text>
                            <Picker
                                style={styles.input}
                                selectedValue={result}
                                onValueChange={result =>
                                    this.setState({ value: { ...value, result } })}
                            >
                                <Picker.Item label="tmpfile" value="tmpfile" />
                                <Picker.Item label="base64" value="base64" />
                                <Picker.Item label="data URI" value="data-uri" />
                                <Picker.Item label="INVALID" value="_invalid_" />
                            </Picker>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>snapshotContentContainer</Text>
                            <Switch
                                style={styles.switch}
                                value={snapshotContentContainer}
                                onValueChange={snapshotContentContainer =>
                                    this.setState({
                                        value: { ...value, snapshotContentContainer }
                                    })}
                            />
                        </View>
                    </View>
                    <View ref="empty" collapsable={false} />
                    <View style={styles.experimental} ref="complex" collapsable={false}>
                        <Text style={styles.experimentalTitle}>Experimental Stuff</Text>
                        <View
                            ref="webview"
                            collapsable={false}
                            style={{ width: 300, height: 300 }}
                        >
                            
                        </View>
                    </View>
                </ScrollView>
            );
        }
    }
const styles = StyleSheet.create({
        MainContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#000',
        }
      });