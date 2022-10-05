import React from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {Image, Pressable} from 'react-native';
import logoFb from '../../assets/images/Facebook_F_icon.svg.png';
import style from '../style';
import {useDispatch} from "react-redux";
import {getUserSuccess} from "../../store/actions/actionLogin";

async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
        throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    return auth().signInWithCredential(facebookCredential);
}

function FacebookSignIn() {
    const dispatch=useDispatch();

    const getDataSuccess=(data)=>{
        const user={
                name:data.user.displayName,
                auth_key:data.user.uid,
        }
        dispatch(getUserSuccess(user));
    }
    return (
        <Pressable
            style={style.socialIconBlock}
            onPress={() => onFacebookButtonPress().then((res) => {
                getDataSuccess(res)
            })}
        >
            <Image
                style={style.socialIconImage}
                source={logoFb}
            />
        </Pressable>
    );
}

export default FacebookSignIn
