import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import BottomCreate from '../../../components/BottomCreate';
import BottomClose from '../../../components/BottomClose';
import { participators } from '../../../assets/faceData';
import CheckBoxList from '../../../components/CheckBoxList';

function Participators({active, setDisplay, setBottomSheet, event, setEvent  }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Participators</Text>
      <CheckBoxList data={event} setData={setEvent} keys={'Participators'} list={participators}/>
      <BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
    </View>
  );
}

export default Participators;
