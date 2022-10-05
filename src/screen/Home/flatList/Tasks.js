import React, { useEffect, useRef } from 'react';
import {FlatList } from 'react-native';
import Calendar from '../Calendar';
import Item from "../TaskItem";
import { useNavigation } from "@react-navigation/native";
import {useSelector} from "react-redux";

function Tasks({
                  calendar, startDay, endDay,
                  selectDays, setStartDay, setEndDay,
                  setSelectDays,
                }) {
  const scrollRef = useRef();
  const navigation = useNavigation();
  const {task}=useSelector((store) => store.taskReducer)

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  );

  useEffect(()=>{
   if(calendar){
     scrollRef.current.scrollToOffset({ animated: true, offset: 0 })
   }

  },[calendar])

  return (
    <FlatList
      ref={scrollRef}
      ListHeaderComponent={calendar ?
        <Calendar startDay={startDay} setStartDay={setStartDay}
                  endDay={endDay} setEndDay={setEndDay}
                  selectDays={selectDays} setSelectDays={setSelectDays} />
        : null}
      data={task}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default Tasks;


