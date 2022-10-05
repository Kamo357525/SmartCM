import React, { useEffect, useState } from 'react';
import { Text, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Api from '../../depenses/api/Api';
import style from './style';

function Calendars({ scroll, startDay, endDay, selectDays, setStartDay, setEndDay, setSelectDays }) {

  const handlerCalendar = (day) => {
    if (day > new Date(endDay).getTime()) {
      setEndDay(new Date(day).toISOString().slice(0, 10));
    } else if (day < new Date(endDay).getTime() && day > new Date(startDay).getTime()) {
      const tempEnd = ((new Date(endDay).getTime() - day) / 86400000);
      const tempStart = ((day - new Date(startDay).getTime()) / 86400000);
      if (tempEnd > tempStart) {
        setStartDay(new Date(day).toISOString().slice(0, 10));
      } else {
        setEndDay(new Date(day).toISOString().slice(0, 10));
      }
    } else {
      setStartDay(new Date(day).toISOString().slice(0, 10));
    }
  };

  useEffect(() => {
    const start = new Date(startDay).getTime();
    const end = new Date(endDay).getTime();
    const days = (end - start) / 86400000;
    let temp = {};
    for (let i = 1; i < days + 1; i++) {
      const newDate = new Date(start + (i * 86400000)).toISOString().slice(0, 10);
      temp[newDate] = { color: '#70d7c7', textColor: 'white' };
    }
    setSelectDays(temp);
  }, [startDay, endDay]);

  return (<>
      <Calendar
        hideDayNames={true}
        style={style.calendar}
        onDayPress={day => {
          handlerCalendar(day.timestamp);
        }}
        markingType={'period'}
        markedDates={
          {
            [startDay]: { startingDay: true, color: '#50cebb', textColor: 'white' },
            ...selectDays,
            [endDay]: { endingDay: true, color: '#50cebb', textColor: 'white' },
          }
        }
      />
    </>
  );
}

export default Calendars;
