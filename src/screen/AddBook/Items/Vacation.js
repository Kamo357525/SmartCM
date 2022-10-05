import React, { useState } from 'react';
import { Text, View } from 'react-native';
import style from '../style';
import CustomTextInput from '../../../components/CustomTextInput';
import size from '../../../assets/gStyle/resho';
import Calendar from '../../Home/Calendar';
import BottomClose from '../../../components/BottomClose';
import BottomCreate from '../../../components/BottomCreate';

function Vacation({setActiveBottomSheet,  book, setBook, setDisplay, setBottomSheet }) {
  const [calendar, setCalendar] = useState(false);
  const [startDay, setStartDay] = useState(new Date().toISOString().slice(0, 10));
  const [endDay, setEndDay] = useState(new Date().toISOString().slice(0, 10));
  const [selectDays, setSelectDays] = useState({});
  return (
    <View style={style.contener}>
      <View style={style.body}>
        <BottomClose event={() => {
          setDisplay(true);
          setBottomSheet(false);
        }} />
        <Text style={style.title}>Vacation</Text>
        <Text style={style.dateInfo}>{startDay+'_'+endDay}</Text>
        <Calendar startDay={startDay} setStartDay={setStartDay} endDay={endDay} setEndDay={setEndDay}
                  selectDays={selectDays} setSelectDays={setSelectDays} calendar={calendar} />
        <View style={style.input}><CustomTextInput styles={{ height: size[70], borderWidth: 1 }} data={book}
                                                   setData={setBook} val={'Description'} /></View>
        <BottomCreate text={'Book'} event={() => {
          setActiveBottomSheet('Create')
          // setDisplay(true);
          // setBottomSheet(false);
        }} />
      </View>
    </View>
  );
}

export default Vacation;
