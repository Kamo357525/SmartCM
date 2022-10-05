import React from 'react';
import { Text, View, Pressable } from 'react-native';
import BottomClose from '../BottomClose';
import style from './style';
import BottomCreate from '../BottomCreate';
import { duration } from '../../assets/faceData';

function Duration({text, setDisplay, setBottomSheet, ki, data, setData }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Actual duration</Text>
      <Text style={style.info}>{text}</Text>
      <View style={style.durationBlock}>
        {duration.map((item, i) =>
          <Pressable onPress={()=>setData({...data, [ki]:item})} key={i} style={style.duration}>
            <Text>{item}</Text>
          </Pressable>)}
      </View>
      <Pressable style={{...style.duration, width:'100%'}}
                 onPress={()=>setData({...data, [ki]:'Full Day'})}><Text>Full Day</Text></Pressable>
      <BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
    </View>
  );
}

export default Duration;
