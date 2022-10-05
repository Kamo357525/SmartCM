import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import { bookLeave } from '../../../assets/faceData';
import BottomCreate from '../../../components/BottomCreate';
import BottomClose from '../../../components/BottomClose';
import CheckBoxList from '../../../components/CheckBoxList';

function Type({ setDisplay, setActiveBottomSheet, keys, setBottomSheet, book, setBook }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Coose book leave</Text>
      <CheckBoxList list={bookLeave} data={book} setData={setBook} keys={keys} />
      <BottomCreate text={'Select'} event={() => {
        if (book.Type.title === 'Vacation' || book.Type.title === 'Hourly leave') {
          setActiveBottomSheet(book.Type.title);
        } else {
          setDisplay(true);
          setBottomSheet(false);
        }
      }} />
    </View>
  );
}


export default Type;
