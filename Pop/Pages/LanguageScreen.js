import React, { Component, useEffect, useState } from 'react'
import { View ,TouchableOpacity,StyleSheet} from 'react-native'
import { Button, Text } from 'native-base'
import Logo from '../assets/Logo'
import { heightToDp, widthToDp } from '../Responsive'
import FloatingLabel from 'react-native-floating-labels'

// export default class LanguageScreen extends Component{

//     constructor(props, context) {
//         super(props, context);
     
//         this.state = {
//           dirty: false,
//         };
//       }
     
//       onBlur() {
//         console.log('#####: onBlur');
//       }
//     render(){
//         return(
//             <View style={styles.container}>
//         <FloatingLabel 
//             labelStyle={styles.labelInput}
//             inputStyle={styles.input}
//             style={styles.formInput}
//             value='john@email.com'
//             onBlur={this.onBlur}
//           >Email</FloatingLabel>
//         <FloatingLabel 
//             labelStyle={styles.labelInput}
//             inputStyle={styles.input}
 
//             style={styles.formInput}
//           >First Name</FloatingLabel>
//         <FloatingLabel
//             labelStyle={styles.labelInput}
//             inputStyle={styles.input}
//             style={styles.formInput}
//           >Last Name</FloatingLabel>
//       </View>

//         );
//     }
// }

// var styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 65,
//       backgroundColor: 'white',
//     },
//     labelInput: {
//       color: '#673AB7',
//     },
//     formInput: {    
//       borderBottomWidth: 1, 
//       marginLeft: 20,
//       borderColor: '#333',       
//     },
//     input: {
//       borderWidth: 0
//     }
//   });















export default class LanguageScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
                    <Logo />
                </View>
                <View style={{marginTop: heightToDp("5%")}}>
                    <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center' }}>SELECT LANGUAGE</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
                <View style={{marginTop: heightToDp("5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ENGLISH</Text>
                </View>
                </TouchableOpacity>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>हिन्दी</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ʤʌgʌr</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ଓଡ଼ିଆ</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>
                <View style={{marginTop: heightToDp("2.5%")}}>
                    <Text style={{ fontSize: widthToDp("6%"), alignSelf: 'center' }}>ᱥᱟᱱᱛᱟᱲᱤ</Text>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginTop:heightToDp('2.5%'),width:widthToDp("80%"),alignSelf:'center'}}></View>

            </View>
        );
    }
}
