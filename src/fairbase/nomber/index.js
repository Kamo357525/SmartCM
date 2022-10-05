import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import style from '../style'
import size from "../../assets/gStyle/resho";
import {getUserSuccess} from "../../store/actions/actionLogin";
import {useDispatch} from "react-redux";

function PhoneSignIn() {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [number, setNumber]=useState('+');
  const dispatch=useDispatch()

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
        const user={
            name:number,
            auth_key:'faceTokenasdas84awe15saf8dsf4asfsdf',
        }
        dispatch(getUserSuccess(user));
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
        <>
          <TextInput style={style.numberInp} value={number}   keyboardType="numeric" onChangeText={text =>setNumber(text)} />
          <Button
              title="Phone Number Sign In"
              onPress={() => signInWithPhoneNumber(number)}
          />
        </>
    );
  }

  return (
      <>
        <TextInput value={code} style={{...style.numberInp, width:size[80]}} keyboardType="numeric" onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </>
  );
}

export default PhoneSignIn;
