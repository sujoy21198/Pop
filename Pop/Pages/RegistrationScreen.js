import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { Text, Item, ListItem, Radio, Right, Left, Picker } from 'native-base'
import { heightToDp, widthToDp } from '../Responsive';
import BaseColor from '../Core/BaseTheme';
import Logo from '../assets/Logo';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import Calendar from 'react-native-vector-icons/AntDesign'
import FloatingLabel from 'react-native-floating-labels'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// export default class RegistrationScreen extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{ alignSelf: 'center', marginTop: heightToDp("2%") }}>
//           <Logo />
//         </View>
//         <View style={{ alignSelf: 'center' }}>
//           <Text style={{ color: BaseColor.SecondaryColor, fontSize: widthToDp("8%"),marginTop:heightToDp("5%") }}>REGISTRATION</Text>
//         </View>
//         <ScrollView>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"),marginTop:heightToDp("5%") }}>
//             <Input
//               placeholder="Full name"
//               label="FULL NAME"
//               labelStyle={{ fontSize: widthToDp("2.7%"), color: "#fff" }}
//               style={{ width: widthToDp("10%"), color: BaseColor.SecondaryColor }}
//             />
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"),marginTop:heightToDp("2.5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>GENDER</Text>
//               <Icon
//                 name="down"
//                 style={{ color: "#fff", marginLeft: widthToDp("62%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>AGE</Text>

//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>CONTACT NUMBER</Text>
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>USERNAME</Text>
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>PASSWORD</Text>
//               <Calendar
//                 name="eye"
//                 style={{ color: "#fff", marginLeft: widthToDp("55%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>CONFIRM PASSWORD</Text>
//               <Calendar
//                 name="eye"
//                 style={{ color: "#fff", marginLeft: widthToDp("35%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>STATE</Text>
//               <Icon
//                 name="down"
//                 style={{ color: "#fff", marginLeft: widthToDp("66%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>DISTRICT</Text>
//               <Icon
//                 name="down"
//                 style={{ color: "#fff", marginLeft: widthToDp("60%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>GRAMPANCHAYAT</Text>
//               <Icon
//                 name="down"
//                 style={{ color: "#fff", marginLeft: widthToDp("41%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>VILLAGE</Text>
//               <Icon
//                 name="down"
//                 style={{ color: "#fff", marginLeft: widthToDp("61%") }}
//                 size={25}
//               />
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>AADHAR NUMBER</Text>
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
//           <View style={{ width: widthToDp("90%"), marginLeft: widthToDp("3%"), marginTop: heightToDp("5%") }}>
//             <View style={{ flexDirection: 'row', marginBottom: heightToDp("1%") }}>
//               <Text style={{ color: "#fff", fontSize: widthToDp("4.8%"), marginLeft: widthToDp("2%") }}>IMEI NUMBER-1</Text>
//             </View>
//             <Item style={{ width: widthToDp("85.2%"), marginLeft: widthToDp("2%") }}></Item>
//           </View>
          // <View style={{flexDirection:'row',marginTop: heightToDp("5%")}}>
          //   <Radio 
          //   selected={true}
          //   style={{marginLeft:widthToDp("3%"),marginTop:heightToDp("1%")}}
          //   />
          //   <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("2%")}}>OTP</Text>

          //   <Radio 
          //   selected={false}
          //   style={{marginLeft:widthToDp("20%"),marginTop:heightToDp("1%")}}
          //   />
          //   <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("1%")}}>FIELD OFFICER PASSWORD</Text>
          // </View>
          // <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
          // <View style={{backgroundColor:BaseColor.SecondaryColor,marginTop:heightToDp("5%"),width:widthToDp("37%"),alignSelf:'center',height:heightToDp("5%"),borderRadius:100}}>
          //   <Text style={{alignSelf:'center',marginTop:heightToDp("1.2%"),fontWeight:'500',fontSize:widthToDp("5%")}}>SIGN UP</Text>
          // </View>
          // </TouchableOpacity>
          // <View style={{flexDirection:'row',marginTop:heightToDp("4%"),alignSelf:'center'}}>
          // <Text style={{color:"#fff"}}>You have an account?</Text>
          // <Text style={{color:BaseColor.SecondaryColor}}>Sign in</Text>
          // </View>

//           <View style={{marginTop:heightToDp("10%")}}></View>

//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: heightToDp("100%"),
//     backgroundColor: BaseColor.BackgroundColor
//   }
// })


export default class RegistrationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imei: '',
      result: ''
    }
    this.checkPermissions();
    this.requestPermission();
    //this.getDeviceIMEI();
  }

  requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE, {
      title: 'hello',
      message: 'hi'
    }
    )
  }

  checkPermissions = async () => {
    const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE);
    console.log(result)
    return result
  }


  // getDeviceIMEI = () => {
  //   const IMEI = require('react-native-imei');
  //   IMEI.getImei().then(imeiList => {
  //     console.log(imeiList)
  //   });
  // }

  render() {
    return (
      <View style={{backgroundColor:BaseColor.BackgroundColor,flex:1}}>
        <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
          <Logo />
        </View>
        <View style={{ marginTop: heightToDp("5%") }}>
          <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center' }}>REGISTRATION</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >FULL NAME</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Gender" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          <View style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >AGE</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >CONTACT NUMBER</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >USERNAME</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >PASSWORD</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >CONFIRM PASSWORD</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="State" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          {/* <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >DISTRICT</FloatingLabel>
          </View> */}
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="District" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          {/* <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >GRAMPANCHAYAT</FloatingLabel>
          </View> */}
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Grampanchayat" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          {/* <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >VILLAGE</FloatingLabel>
          </View> */}
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Village" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >AADHAAR NUMBER</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >IMEI NUMBER</FloatingLabel>
          </View>
          <View style={{flexDirection:'row',marginTop: heightToDp("5%"),marginLeft:widthToDp("4%")}}>
            <Radio 
            selected={true}
            style={{marginLeft:widthToDp("3%"),marginTop:heightToDp("1%")}}
            />
            <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("2%")}}>OTP</Text>

            <Radio 
            selected={false}
            style={{marginLeft:widthToDp("20%"),marginTop:heightToDp("1%")}}
            />
            <Text style={{color:"#fff",marginTop:heightToDp("1%"),marginLeft:widthToDp("1%")}}>FIELD OFFICER PASSWORD</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
          <View style={{backgroundColor:BaseColor.SecondaryColor,marginTop:heightToDp("5%"),width:widthToDp("37%"),alignSelf:'center',height:heightToDp("5%"),borderRadius:100}}>
            <Text style={{alignSelf:'center',marginTop:heightToDp("1.2%"),fontWeight:'500',fontSize:widthToDp("5%")}}>SIGN UP</Text>
          </View>
          </TouchableOpacity>
          <View style={{flexDirection:'row',marginTop:heightToDp("4%"),alignSelf:'center'}}>
          <Text style={{color:"#fff"}}>You have an account?</Text>
          <Text style={{color:BaseColor.SecondaryColor}}>Sign in</Text>
          </View>


          <View style={{ marginTop: heightToDp("50%") }}></View>
        </ScrollView>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#000',
    fontSize: widthToDp("4.6%")
  },
  formInput: {
    borderBottomWidth: 1.5,
    borderColor: '#333',
    width: widthToDp("80%")
  },
  input: {
    borderWidth: 0
  }
});