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
import DatePicker from 'react-native-datepicker'
import DeviceInfo from 'react-native-device-info'
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
}

export default class RegistrationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      age: 'AGE',
      deviceId: '',
      genderPicker: '',
      fullname: '',
      phoneNumber:'',
      username:'',
      password:'',
      confirmPassword:'',
      state:'',
      district:'',
      gram:'',
      village:'',
      participantNumber:'',
      fieldOfficerPass:''
    }
  }

  componentDidMount() {
    this.getDeviceId()
  }
  getDeviceId = async () => {
    var deviceId = await DeviceInfo.getAndroidId()
    this.setState({ deviceId: deviceId })
  }

  signup = async () => {
    // await axios.get('http://127.0.0.1:3000/api/v1/token').then(function (response) {
    //   console.log(response)
    // }).catch(function (error){
    //   console.log(error)
    // })
    await axios.post('http://161.35.122.165:3020/api/v1/signup', {
      name: this.state.fullname,
      gender: this.state.genderPicker,
      dob: this.state.date,
      age: this.state.age,
      phone: this.state.phoneNumber,
      username: this.state.username,
      password: this.state.password,
      state: this.state.state,
      district: this.state.district,
      panchayat: this.state.gram,
      village: this.state.village,
      participantNumber: "HTE123367",
      officerPassword:'234',
      deviceId:this.state.deviceId
    }, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(function (response) {
      console.log(response.data)
      alert(response.data.msg)
    }).catch(function (error) {
      console.log(error)
    })
  }

  ageCalculator = (date) => {

    var currentyear = new Date().getFullYear();
    //alert(JSON.stringify(date).length)
    var dateFormat = JSON.stringify(date)
    var format = dateFormat.toString().replace(/['"]+/g, '')
    var year = format.substr(format.length - 4)
    var age = currentyear - year
    this.setState({ date: date })
    this.setState({ age: age })
  }

  statePicker = (value) => {
    this.setState({
      state : value
    })
  }

  districtPicker = (value) => {
    this.setState({
      district : value
    })
  }

  gramPicker = (value) => {
    this.setState({
      gram : value
    })
  }

  villagePicker = (value) => {
    this.setState({
      village : value
    })
  }

  pickerValue = (value) => {
    //alert(value)
    this.setState({
      genderPicker: value
    })
  }

  FullName = (value) => {
    this.setState({
      fullname: value
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: BaseColor.BackgroundColor, flex: 1 }}>
        <View style={{ marginTop: heightToDp("3%"), alignSelf: "center" }}>
          <Logo />
        </View>
        <View style={{ marginTop: heightToDp("5%") }}>
          <Text style={{ fontSize: widthToDp("7%"), alignSelf: 'center', fontFamily: 'Oswald-Medium' }}>REGISTRATION</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(value) => this.FullName(value)}
            >FULL NAME</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontFamily: 'Oswald-Medium' }}
              selectedValue={this.state.genderPicker}
              onValueChange={(value) => this.pickerValue(value)}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Gender" value="gender" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Others" value="others" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          <View style={{ marginTop: heightToDp("5%"), marginLeft: widthToDp("5%"), flexDirection: 'row' }}>
            {/* <View style={{ width: widthToDp("30%") }}>
              <Text style={{color: '#000',fontSize: widthToDp("4.6%"),fontFamily: 'Oswald-Medium'}}>DATE OF BIRTH</Text>
            </View>
            <Icon
              name="calendar"
              size={25}
              style={{ marginLeft: widthToDp("44%") }}
              onPress={() => this.check()}
            /> */}
            <DatePicker
              androidMode='calendar'
              date={this.state.date}
              mode="date"

              showIcon={false}
              // iconComponent={
              //   <Icon
              //   name="calendar"
              //   size={25}
              //   //style={{marginLeft:widthToDp("30%")}}
              //   />
              // }
              placeholder="DATE OF BIRTH"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              //onDateChange={(date) => { this.setState({ date: date }) }}
              onDateChange={(date) => this.ageCalculator(date)}
              customStyles={{
                placeholderText: {
                  fontFamily: 'Oswald-Medium',
                  color: '#000',
                  fontSize: widthToDp("4.5")
                },
                dateText: {
                  fontFamily: 'Oswald-Medium',
                  color: '#000',
                  fontSize: widthToDp("4.5")
                },
                dateInput: {
                  borderWidth: 0
                },
              }}
            />
            <Icon
              name="calendar"
              size={25}
              style={{ marginTop: heightToDp("1%"), marginLeft: widthToDp("42%") }}
            />
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          <View style={{ marginTop: heightToDp("2%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >{this.state.age}</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(text) => {this.setState({phoneNumber:text})}}
            // onBlur={this.onBlur}
            >CONTACT NUMBER</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(text) => {this.setState({username:text})}}
            // onBlur={this.onBlur}
            >USERNAME</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(text) => {this.setState({password:text})}}
            // onBlur={this.onBlur}
            >PASSWORD</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(text) => {this.setState({confirmPassword:text})}}
            // onBlur={this.onBlur}
            >CONFIRM PASSWORD</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <Picker
              mode="dropdown"
              itemStyle={{ fontSize: widthToDp('20%') }}
              //selectedValue={this.state.language}
              selectedValue={this.state.state}
              onValueChange={(value) => this.statePicker(value)}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="State" value="state" />
              <Picker.Item label="test" value="test" />
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
              selectedValue={this.state.district}
              onValueChange={(value) => this.districtPicker(value)}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="District" value="java" />
              <Picker.Item label="disTest" value="disTest" />
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
              selectedValue={this.state.gram}
              onValueChange={(value) => this.gramPicker(value)}
              //selectedValue={this.state.language}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Grampanchayat" value="java" />
              <Picker.Item label="gram" value="gram" />
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
              selectedValue={this.state.village}
              onValueChange={(value) => this.villagePicker(value)}
              style={{ width: widthToDp("83%") }}
            >
              <Picker.Item label="Village" value="java" />
              <Picker.Item label="village" value="village" />
            </Picker>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: heightToDp('0.1%'), width: widthToDp("80%"), marginLeft: widthToDp("8.2%") }}></View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              onChangeText={(text) => {this.setState({participantNumber:text})}}
            // onBlur={this.onBlur}
            >PARTICIPANT NUMBER</FloatingLabel>
          </View>
          <View style={{ marginTop: heightToDp("2.5%"), marginLeft: widthToDp("8%") }}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
            // onBlur={this.onBlur}
            >{this.state.deviceId}</FloatingLabel>
          </View>
          <View style={{ flexDirection: 'row', marginTop: heightToDp("5%"), marginLeft: widthToDp("4%") }}>
            <Radio
              selected={false}
              style={{ marginLeft: widthToDp("3%"), marginTop: heightToDp("1%") }}
            />
            <Text style={{ color: "#fff", marginTop: heightToDp("1%"), marginLeft: widthToDp("2%"), fontFamily: 'Oswald-Medium' }}>OTP</Text>

            <Radio
              selected={true}
              style={{ marginLeft: widthToDp("20%"), marginTop: heightToDp("1%") }}
            />
            <Text style={{ color: "#fff", marginTop: heightToDp("1%"), marginLeft: widthToDp("1%"), fontFamily: 'Oswald-Medium' }}>FIELD OFFICER PASSWORD</Text>
          </View>
          <TouchableOpacity onPress={() => this.signup()}>
            <View style={{ backgroundColor: BaseColor.SecondaryColor, marginTop: heightToDp("5%"), width: widthToDp("37%"), alignSelf: 'center', height: heightToDp("5%"), borderRadius: 100 }}>
              <Text style={{ alignSelf: 'center', marginTop: heightToDp("0.5%"), fontWeight: '500', fontSize: widthToDp("5%"), fontFamily: 'Oswald-Medium' }}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: heightToDp("4%"), alignSelf: 'center' }}>
            <Text style={{ color: "#fff", fontFamily: 'Oswald-Medium' }}>You have an account?</Text>
            <TouchableOpacity >
              <Text style={{ color: BaseColor.SecondaryColor, fontFamily: 'Oswald-Medium' }}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: heightToDp("10%") }}></View>
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
    fontSize: widthToDp("4.6%"),
    fontFamily: 'Oswald-Medium'
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