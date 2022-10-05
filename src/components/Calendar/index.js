import React from 'react';
import { Text, View } from 'react-native';
import BottomCreate from '../BottomCreate';
import { Calendar } from 'react-native-calendars';
import style from './style';
import BottomClose from '../BottomClose';

function Dates( {setDisplay, setBottomSheet, text, data, setData, Bottom }) {
  return (
    <View style={style.body}>
      {!Bottom?<BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }}/>:null}
      <Text style={style.title}>{text}</Text>
      <Calendar
        markedDates={{
          [data.Date]: {selected: true,  selectedColor: '#50cebb'},
        }}
        onDayPress={(date)=>setData({...data,date:date.dateString})}/>
       {!Bottom?<BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />:null}
    </View>
  );
}

export default Dates;
