import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import BottomClose from '../../../components/BottomClose';
import CheckBoxList from '../../../components/CheckBoxList';
import { participators, room } from '../../../assets/faceData';
import BottomCreate from '../../../components/BottomCreate';

function Room({ setDisplay, setBottomSheet, event, setEvent }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Room</Text>
      <CheckBoxList data={event} setData={setEvent} keys={'Room'} list={room}/>
      <BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
    </View>
  );
}

export default Room;
