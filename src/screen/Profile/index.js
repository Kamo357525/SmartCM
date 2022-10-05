import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logAut} from "../../store/actions/actionLogin";
import {useDispatch} from "react-redux";
import style from "./style";
import HistoryTasks from "./HistoryTasks";
import HistoryEvent from "./HistoryEvent";


function Index() {
    const [activePage, setActivePage]=useState('Home')
    const navigation = useNavigation();
    const dispatch = useDispatch();

    if(activePage==='Home'){
        return (
            <View style={style.body}>
                <Text style={style.title}>Profile</Text>
                <TouchableOpacity onPress={() => {
                    setActivePage('Task')
                }}>
                    <Text style={style.btn}>History Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActivePage('Event')
                }}>
                    <Text style={style.btn}>History Events</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(logAut())
                    navigation.navigate('Login')
                }}>
                    <Text style={style.btn}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
    if(activePage==='Task'){
        return <HistoryTasks setActivePage={setActivePage} />
    }
    if(activePage==='Event'){
        return<HistoryEvent setActivePage={setActivePage}/>
    }

}

export default Index;
