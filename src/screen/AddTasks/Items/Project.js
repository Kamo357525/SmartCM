import React from 'react';
import { Text, View} from 'react-native';
import style from './style';
import { project } from '../../../assets/faceData';
import BottomCreate from '../../../components/BottomCreate';
import BottomClose from '../../../components/BottomClose';
import CheckBoxList from '../../../components/CheckBoxList';

function Project({ setDisplay, setBottomSheet, task, setTask }) {
  return (
    <View style={style.body}>
      <BottomClose event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
      <Text style={style.title}>Select Project</Text>
      <CheckBoxList list={project} data={task} setData={setTask} keys={'Project'}/>
      <BottomCreate text={'Select'} event={() => {
        setDisplay(true);
        setBottomSheet(false);
      }} />
    </View>
  );
}

export default Project;
