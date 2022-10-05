import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import Calendar from '../Calendar';
import Item from "../EventItem";
import {useSelector} from "react-redux";

function Event({ calendar ,startDay, endDay, selectDays,setStartDay, setEndDay ,setSelectDays }) {

  const {event}=useSelector((store) => store.eventReducer)
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  const scrollRef = useRef();
  useEffect(()=>{
    if(calendar){
      scrollRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

  },[calendar])

  return (
      <FlatList
        ref={scrollRef}
        ListHeaderComponent={calendar?<Calendar      startDay={startDay} setStartDay={setStartDay}
                                                     endDay={endDay} setEndDay={setEndDay}
                                                     selectDays={selectDays} setSelectDays={setSelectDays}/>:null}
        data={event}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

export default Event;
