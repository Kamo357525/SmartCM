import React from 'react';
import {Text, View  } from 'react-native';
import style from './style';
import Done from '../../assets/images/Done';
import BottomClose from '../BottomClose';

function Index({text, setDisplay, setBottomSheet}) {

  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Done style={style.icon}/>
      <Text style={style.create}>Create!</Text>
      <Text style={style.title}>{text}</Text>
    </View>
  );
}

export default Index;
