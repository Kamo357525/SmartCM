import React from 'react';
import Tasks from './Tasks';
import All from './All';
import Events from './Events';

function Index({
                 activePage, calendar, startDay, setStartDay, endDay, setEndDay,
                 selectDays, setSelectDays,
               }) {
  if (activePage === 'Tasks') {
    return <Tasks calendar={calendar} startDay={startDay} setStartDay={setStartDay}
                  endDay={endDay} setEndDay={setEndDay}
                  selectDays={selectDays} setSelectDays={setSelectDays} />;
  }
  if (activePage === 'Events') {
    return <Events calendar={calendar} startDay={startDay} setStartDay={setStartDay}
                   endDay={endDay} setEndDay={setEndDay}
                   selectDays={selectDays} setSelectDays={setSelectDays} />;
  }
  if (activePage === 'All') {
    return <All calendar={calendar} startDay={startDay} setStartDay={setStartDay}
                endDay={endDay} setEndDay={setEndDay}
                selectDays={selectDays} setSelectDays={setSelectDays} />;
  }
}

export default Index;
