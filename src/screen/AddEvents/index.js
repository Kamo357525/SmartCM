import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import style from './style';
import ButtonButton from '../../assets/images/ButtonBootom';
import Calendar from '../../assets/images/calendar';
import { navigationRef } from '../../navigation/Bar';
import ButtonCreate from '../../components/BottomCreate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InputBottomSheet from '../../components/InputBottomSheet';
import Items from './Items';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import CustomTextInput from '../../components/CustomTextInput';
import LocationSvg from '../../assets/images/LocationSvg';
import size from '../../assets/gStyle/resho';
import {useDispatch} from "react-redux";
import {createEvent} from "../../store/actions/actionEvents";

function Index() {
  const [display, setDisplay] = useState(true);
  const [bottomSheet, setBottomSheet] = useState(false);
  const dispatch=useDispatch()
  const [activeBottomSheet, setActiveBottomSheet] = useState(false);
  const initialState={
    Type: '',
    EventTitle: '',
    Organizer: '',
    OrganizerChildren: '',
    Participators: '',
    Room: '',
    Address: '',
    Date: new Date().toISOString().slice(0, 10),
    Duration: '',
    Description: '',
  }

  const [event, setEvent] = useState(initialState);

  const clearData=()=>{
    setEvent(initialState)
  }


  useEffect(() => {
    navigationRef.current.setNativeProps({
      display: display ? 'flex' : 'none',
    });
  }, [display]);

  return (
    <>
      <GestureHandlerRootView>
        <View style={style.body}>
          <Text style={style.title}>Create New Events</Text>
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />} setDisplay={setDisplay}
                            text={event.Type.title} pageBottomSheet={'Type'} setBottomSheet={setBottomSheet} />
          <View style={style.input}><CustomTextInput data={event} setData={setEvent} val={'EventTitle'} /></View>
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />} setDisplay={setDisplay}
                            text={event.Organizer.title} pageBottomSheet={'Organizer'}
                            setBottomSheet={setBottomSheet} />
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />} setDisplay={setDisplay}
                            text={event.Participators.title} pageBottomSheet={'Participators'}
                            setBottomSheet={setBottomSheet} />
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />} setDisplay={setDisplay}
                            text={event.Room.title} pageBottomSheet={'Room'} setBottomSheet={setBottomSheet} />
          <View style={style.input}><CustomTextInput data={event} setData={setEvent} val={'Address'} />
            <View style={style.addressSvg}><LocationSvg /></View></View>
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<Calendar color={'#347474'} />}
                            setDisplay={setDisplay}
                            text={event.Date} pageBottomSheet={'Date'} setBottomSheet={setBottomSheet} />
          <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton />} setDisplay={setDisplay}
                            text={event.Duration} pageBottomSheet={'Duration'} setBottomSheet={setBottomSheet} />
          <View><CustomTextInput styles={{ height: size[70], borderWidth: 1 }} data={event} setData={setEvent}
                                 val={'Description'} /></View>
          <ButtonCreate event={() => {
            dispatch(createEvent(event));
            setBottomSheet(true);
            clearData();
            setActiveBottomSheet('Create'); }} text='Create' />
        </View>
        <CustomBottomSheet isActive={bottomSheet} setBottomSheet={setBottomSheet} setDisplay={setDisplay}
                           item={<Items setDisplay={setDisplay} setBottomSheet={setBottomSheet} event={event}
                                        setEvent={setEvent} active={activeBottomSheet} />}
        />
      </GestureHandlerRootView>
    </>
  );
}

export default Index;
