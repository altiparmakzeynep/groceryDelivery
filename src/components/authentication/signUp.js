import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../config/env';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signUpClicked } from '../../actions/authenticationAction';

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullNameValue: "",
          phoneNumberValue: "",
          emailValue: "",
          passwordValue: "",
          confirmPasswordValue: "",
        }
    }

onfullNameChanged = (value) =>this.setState({fullNameValue: value})
onPhoneNumberChanged = (value) =>this.setState({phoneNumberValue: value})
onEmailChanged = (value) => this.setState({emailValue: value})
onPasswordChanged = (value) => this.setState({passwordValue: value})
onConfirmPasswordChanged = (value) => this.setState({confirmPasswordValue: value})

onSignUp = () => {
  console.log("clicked?");
  this.props.signUpClicked(this.state.fullNameValue, this.state.phoneNumberValue, this.state.emailValue, this.state.passwordValue )
}
    render() {
     return (
        <View style={styles.container}>
          <View style= {styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../../images/logo.png')}
                />
          </View>
          <View style= {{ borderWidth: 0}}>
            <TextInput 
                style={styles.input}
                placeholder='name surname'
                placeholderTextColor='#00000029'
                onChangeText={this.onfullNameChanged}/> 
            <TextInput 
                maxLength={10}
                style={styles.input}
                placeholder='phone'
                placeholderTextColor='#00000029'
                onChangeText={this.onPhoneNumberChanged}
                />  
            <TextInput 
                style={styles.input}
                placeholder='e-mail'
                 placeholderTextColor='#00000029'
                onChangeText={this.onEmailChanged}/>    
            <TextInput 
                secureTextEntry
                style={styles.input}
                placeholder='password'
                 placeholderTextColor='#00000029'
                onChangeText={this.onPasswordChanged}/>  
            <TextInput 
                secureTextEntry
                style={styles.input}
                placeholder='password confirm'
                placeholderTextColor='#00000029'
                onChangeText={this.onConfirmPasswordChanged}/> 
          </View>
          <View style= {styles.signUpButtonContainer}>
             <TouchableOpacity 
                  onPress = {this.onSignUp}
                  style= {styles.signUpButton}>
                 <Text style= {styles.signUpButtonText}>sign up</Text>
             </TouchableOpacity>
          </View>
          <Text style= {{ top: PhoneHeight * 0.01 }}> Do you have an account? 
             <Text style= {{ fontWeight: "bold" }} onPress= {() => Actions.signIn()}> Sign In </Text>
          </Text>
          <View  style= {styles.dindong}>
          <Image 
            style= {styles.dingdong}
            source={require('../../images/dingdong.png')}/>
          </View>
        </View> 
    )
  }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4fff1"
    },
    logo:{
      marginBottom: "10%",
      width: responsiveSize(100),
      height: responsiveSize(100),
      resizeMode: "contain"
      },
    input:{
      borderTopWidth: 0, 
      margin: PhoneHeight * 0.01, 
      borderColor: "gray",
      borderRadius: 24,
      width: PhoneWidth * 0.7,
      height: PhoneHeight * 0.05,
      backgroundColor: "white",
      textAlign: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    signUpButtonContainer:{
      borderWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      marginTop: PhoneHeight * 0.02,
    },
    signUpButton:{
      justifyContent: "center" ,
      alignItems: "center",
      backgroundColor: "#1b7e00",
      borderWidth: 0,
      borderRadius: 12,
      width: PhoneWidth * 0.45,
      height: PhoneHeight * 0.05,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    signUpButtonText:{
      color: "#fff",
      alignSelf: "center",
      fontSize: responsiveSize(15)
    },
    dingdong:{
      marginTop:PhoneHeight * 0.06 ,
      width: responsiveSize(200), 
      height: responsiveSize(35), 
      alignSelf: "center", 
      position: "absolute"
    }
})
const mapStateToProps = (state) => {
    const { fullNameValue, phoneNumberValue, emailValue, passwordValue } = state.authenticationReducer;
    return {
      fullNameValue,
      phoneNumberValue,
      emailValue,
      passwordValue,
    }
  }
  export default connect(
    mapStateToProps,
    {
      signUpClicked
    }
  )(signUp)