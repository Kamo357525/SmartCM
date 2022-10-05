import React from 'react';
import Date from '../../../components/Calendar';
import Duration from '../../../components/Duration';
import Type from './Type';
import Vacation from './Vacation';
import Hourly from './Hourly';
import Create from '../../../components/Create';

function Index({ active, setActiveBottomSheet, setDisplay, setBottomSheet, book, setBook }) {
  if (active === 'Type') {
    return <Type keys={'Type'} setActiveBottomSheet={setActiveBottomSheet} setDisplay={setDisplay} setBottomSheet={setBottomSheet} setBook={setBook} book={book} text={'Create Task'} />;
  }
  if (active === 'Vacation') {
    return <Vacation setDisplay={setDisplay} setActiveBottomSheet={setActiveBottomSheet} setBottomSheet={setBottomSheet} setBook={setBook} book={book} ki={'Duration'} text='Select actual duration you spent on this task' />;
  }
  if (active === 'Hourly leave') {
    return <Hourly setDisplay={setDisplay} setBottomSheet={setBottomSheet} setBook={setBook} book={book} />;
  }
  if (active === 'Create') {
    return <Create text={'Time successfully booked'} />;
  }
}

export default Index;
