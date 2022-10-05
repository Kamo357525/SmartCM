import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, TextInput, ActivityIndicator, Text, Pressable, ScrollView, BackHandler} from 'react-native';
import LoginSvg from '../../../assets/images/Login';
import EmailSvg from '../../../assets/images/iconLoginScr/emailSvg';
import PasswordSvg from '../../../assets/images/iconLoginScr/passwordSvg';
import PasswordEyeSvg from '../../../assets/images/iconLoginScr/passwordEyeSvg';
import style from './style';
import gStyle from '../../../assets/gStyle/gStyle';
import {clearError, getUser} from '../../../store/actions/actionLogin';
import {useDispatch, useSelector,} from 'react-redux';
import Facebook from "../../../fairbase/facebook";
import Google from "../../../fairbase/google";
import Number from '../../../fairbase/nomber';

function Index({navigation}) {
    const [passwordWatch, setPasswordWatch] = useState(true);
    const [errorList, setErrorList] = useState(true)
    const [inputData, setInputData] = useState({
        'username': '',
        'password': '',
    });
    const dispatch = useDispatch();
    const {load, error, token} = useSelector((store) => store.loginReducer);
    const [authType, setAuthType] = useState(false)


    useLayoutEffect(() => {
        if (token) {
            return navigation.navigate('TabNavigation');
        }
    }, [token]);

    const btnLogin = () => {
        dispatch(getUser(inputData));
    };

    useEffect(() => {
        const err = Object.keys(error)
        if (err.length) {
            if (errorList) {
                setErrorList(false)
                const myTimeout = setTimeout(() => {
                    setErrorList(true)
                    clearTimeout(myTimeout);
                    dispatch(clearError())
                }, 5000)
            }
        }
    }, [error])


    return (

        <ScrollView style={style.body}>
            <View style={style.loginSvg}>
                <LoginSvg/>
            </View>
            <Text style={style.loginText}>Log in</Text>
            {error.username?.map((item, i) => <Text key={i} style={{...style.loginText, ...style.error}}>{item}</Text>)}
            {error.password?.map((item, i) => <Text key={i} style={{...style.loginText, ...style.error}}>{item}</Text>)}
            <View style={style.inpBlock}>
                {authType?
                    <>
                        <View>
                            <EmailSvg style={style.svg}/>
                            <TextInput placeholder='Email' multiline
                                       onChangeText={(text) => setInputData({...inputData, 'username': text})}
                                       keyboardType='email-address'
                                       style={{...gStyle.gTextInput, ...style.inpEmail}}/>
                        </View>
                        <View>
                            <PasswordSvg style={style.svg}/>
                            <TextInput placeholder='Password'
                                       onChangeText={(text) => setInputData({...inputData, 'password': text})}
                                       secureTextEntry={passwordWatch}
                                       style={gStyle.gTextInput}/>
                            <PasswordEyeSvg onPress={() => setPasswordWatch(!passwordWatch)}
                                            style={{...style.svg, ...style.eyeSvg}}/>
                        </View>
                    </> : <Number/>
                }
                <Pressable
                    onPress={()=>setAuthType(!authType)}
                    style={style.btnAuthType}>
                    <Text style={style.btnLoginText}>Type {authType?'Number':'Login Password'}</Text>
                </Pressable>
                <Pressable onPress={() => btnLogin()}>
                    <View style={style.btnLogin}>
                        {load ? <View style={style.loader}>
                            <ActivityIndicator style={style.load} size='large' color='#black'/>
                        </View> : null}
                        <Text style={style.btnLoginText}>Login</Text>
                    </View>
                </Pressable>

                <Text onPress={() => navigation.navigate('Forgot')} style={style.forgot}>Forgot password?</Text>
            </View>
            <View style={style.socBock}>
                <View style={style.socIcon}>
                    <Google/>
                </View>
                <View style={style.socIcon}>
                    <Facebook/>
                </View>
            </View>

        </ScrollView>
    );
}

export default Index;
