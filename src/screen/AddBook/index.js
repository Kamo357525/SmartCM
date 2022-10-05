import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import style from './style';
import ButtonButton from '../../assets/images/ButtonBootom';
import Calendar from '../../components/Calendar';
import { navigationRef } from '../../navigation/Bar';
import ButtonCreate from '../../components/BottomCreate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InputBottomSheet from '../../components/InputBottomSheet';
import Items from './Items';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import CustomTextInput from '../../components/CustomTextInput';
import size from '../../assets/gStyle/resho';

function Index() {
  const [display, setDisplay] = useState(true);
  const [bottomSheet, setBottomSheet] = useState(false);

  const [activeBottomSheet, setActiveBottomSheet] = useState(false);

  const [book, setBook] = useState({
    Type: '',
    Date: new Date().toISOString().slice(0, 10),
    Description: '',
  });

  useEffect(() => {
    navigationRef.current.setNativeProps({
      display: display ? 'flex' : 'none',
    });
  }, [display]);

  return (
    <>
      <GestureHandlerRootView>
        <View style={style.contener}>
          <View style={style.body}>
            <Text style={style.title}>Book your leave time</Text>
            <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />}
                              setDisplay={setDisplay} text={book.Type.title}
                              pageBottomSheet={'Type'} setBottomSheet={setBottomSheet} />
            <Calendar Bottom={true} setData={setBook} data={book} />
            <View style={style.input}><CustomTextInput  styles={{ height: size[70], borderWidth: 1 }} data={book} setData={setBook} val={'Description'} /></View>
            <ButtonCreate text='Create' />
          </View>
          <CustomBottomSheet isActive={bottomSheet} setBottomSheet={setBottomSheet} setDisplay={setDisplay}
                             item={<Items setDisplay={setDisplay} setBottomSheet={setBottomSheet} book={book}
                                          setActiveBottomSheet={setActiveBottomSheet} setBook={setBook} active={activeBottomSheet}

                             />}
          />
        </View>
      </GestureHandlerRootView>
    </>
  );
}

export default Index;
