import React from 'react';
import Date from '../../../components/Calendar';
import Duration from '../../../components/Duration';
import Project from './Project';
import Create from "../../../components/Create";

function Index({ active, setDisplay, setBottomSheet, task, setTask }) {
  if (active === 'date') {
    return <Date setDisplay={setDisplay} setBottomSheet={setBottomSheet} setData={setTask} data={task} text={'Create Task'} />;
  }
  if (active === 'Create') {
    return <Create setDisplay={setDisplay} setBottomSheet={setBottomSheet}  text='Task successfully created.' />;
  }
  if (active === 'Duration') {
    return <Duration setDisplay={setDisplay} setBottomSheet={setBottomSheet} setData={setTask} data={task} ki={'Duration'} text='Select actual duration you spent on this task' />;
  }
  if (active === 'Project') {
    return <Project setDisplay={setDisplay} setBottomSheet={setBottomSheet} setTask={setTask} task={task} />;
  }
}

export default Index;
