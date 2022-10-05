import React from 'react';
import Type from './Type';
import Organizer from './Organizer'
import Participators from './Participators'
import Room from './Room';
import Done from '../../../components/Create';
import Calendar from '../../../components/Calendar';
import Duration from '../../../components/Duration'
import Create from '../../../components/Create';

function Index({ active, setDisplay, setBottomSheet, event, setEvent }) {
  if (active === 'Type') {
    return <Type setDisplay={setDisplay} setBottomSheet={setBottomSheet} setEvent={setEvent} event={event} />;
  }
  if (active === 'Organizer') {
    return <Organizer setDisplay={setDisplay} setBottomSheet={setBottomSheet} setEvent={setEvent} event={event} />;
  }
  if (active === 'Participators') {
    return <Participators setDisplay={setDisplay} setBottomSheet={setBottomSheet} setEvent={setEvent} event={event} />;
  }
  if (active === 'Room') {
    return <Room setDisplay={setDisplay} setBottomSheet={setBottomSheet} setEvent={setEvent} event={event} />;
  }
  if (active === 'Done') {
    return <Done text='Event successfully created.'/>;
  }
  if (active === 'Date') {
    return <Calendar text='Coose Date' setDisplay={setDisplay} setBottomSheet={setBottomSheet} setData={setEvent} data={event} />;
  }
  if (active === 'Duration') {
    return <Duration ki='Duration' setDisplay={setDisplay} setBottomSheet={setBottomSheet} setData={setEvent} data={event} />;
  }
  if (active === 'Create') {
    return <Create setDisplay={setDisplay} setBottomSheet={setBottomSheet}  text='Event successfully created.' />;
  }
}

export default Index;
