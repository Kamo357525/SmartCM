import React, { useDebugValue } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import googleIcon from '../../assets/images/goofleIcon.png';
import style from "../style";
import {
  View,
  Button, Pressable, Image
} from 'react-native';
import {getUserSuccess} from "../../store/actions/actionLogin";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  GoogleSignin.configure({
    webClientId: "433389759066-gjjhv61em9p5f61i87862dl51egbupat.apps.googleusercontent.com",
  });
  const signInWithGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((data) => {
        const user={
          name:data.user.displayName,
          auth_key:data.user.uid,
      }
      dispatch(getUserSuccess(user))
    })
      .catch((error)=> {
        console.log(error);
      })
  }

  return (
    <Pressable
        onPress={signInWithGoogleAsync}
        style={style.socialIconBlock}
    >
      <Image
        source={googleIcon}
        style={style.socialIconImage}
      />
    </Pressable>
  );
};

export default App;
