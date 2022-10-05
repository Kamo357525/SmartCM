import React from 'react';
import {KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import gStyle from '../../../assets/gStyle/gStyle';
import style from './style';
import UserSvg from '../../../assets/images/iconLoginScr/emailSvg'
import PeopleSvg from '../../../assets/images/Forgot';

function Index(props) {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}
    >
      <View style={style.body}>
        <PeopleSvg style={style.image} />
        <Text style={style.forgotPassword}>Forgot Password</Text>
        <Text style={style.desc}>Enter your email address and we'll email you your new password</Text>
        <View style={style.inputBlock}>
          <UserSvg style={style.userSvg}/>
          <TextInput style={{...style.email,...gStyle.gTextInput}} placeholder='Email'></TextInput>
        </View>
        <TouchableOpacity
          style={style.button}
        >
          <Text style={style.sendText}>Send</Text>
        </TouchableOpacity>
        <View style={style.backLoginView}>
          <Text style={style.backLogin} onPress={onPressLogin}>Back To <Text style={style.bold}>Login</Text></Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Index;
