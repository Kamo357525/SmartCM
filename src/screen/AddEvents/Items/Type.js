import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import BottomCreate from '../../../components/BottomCreate';
import BottomClose from '../../../components/BottomClose';
import {eventTypes} from '../../../assets/faceData';
import CheckBoxList from '../../../components/CheckBoxList';


function Type({ setDisplay, setBottomSheet, event, setEvent  }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Chose Event Type</Text>
      <CheckBoxList data={event} setData={setEvent} keys={'Type'} list={eventTypes}/>
      <BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
    </View>
  );
}

export default Type;
