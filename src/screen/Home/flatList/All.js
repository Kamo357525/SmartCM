import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import Calendar from "../Calendar";
import Task from "../TaskItem";
import { useNavigation } from "@react-navigation/native";
import Event from "../EventItem";
import {useSelector} from "react-redux";


function All({ calendar, startDay, endDay, selectDays, setStartDay, setEndDay, setSelectDays }) {
  const scrollRef = useRef();
  const navigation = useNavigation();
  const {task}=useSelector((store) => store.taskReducer)
  const {event}=useSelector((store) => store.eventReducer)


  const data = [...event, ...task];
  const temp = [];

  const groupByCategory = data.reduce((group, data) => {
    let { date } = data;
    date = new Date(date.slice(0, 10));
    group[date] = group[date] ?? [];
    group[date].push(data);
    return group;
  }, {});

  Object.values(groupByCategory).forEach((item, i) => {
    temp.push(...item);
  });



  const renderItem = ({ item }) => (
    item.type==='task'? <Task item={item} navigation={navigation} /> : <Event item={item} />
  );

  useEffect(() => {
    if (calendar) {
      scrollRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [calendar]);


  return (
    <FlatList
      ref={scrollRef}
      ListHeaderComponent={calendar ? <Calendar startDay={startDay} setStartDay={setStartDay}
                                                endDay={endDay} setEndDay={setEndDay}
                                                selectDays={selectDays} setSelectDays={setSelectDays}
                                                calendar={calendar} /> : null}
      data={temp}
      renderItem={renderItem}
    />
  );
}

export default All;
