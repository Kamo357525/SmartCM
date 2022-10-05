import React from 'react';
import {View, Text} from "react-native";
import TaskVictory from "./TaskVictory";
import BottomClose from "../../../components/BottomClose";
import style from "./style";
import Tasks from "../../Home/flatList/Tasks";

function HistoryTask({setActivePage}) {
    return (
        <View style={style.body}>
            <BottomClose event={()=>setActivePage('Home')}/>
            <Text style={style.title}>Task</Text>
            <TaskVictory/>
            <Tasks/>
        </View>
    );
}

export default HistoryTask;
