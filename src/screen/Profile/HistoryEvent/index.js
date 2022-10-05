import React from 'react';
import {View, Text} from "react-native";
import style from './style'
import BottomClose from "../../../components/BottomClose";
import Event from "../../Home/flatList/Events";
import EventVictory from "./EventVictory";

function HistoryEvent({setActivePage}) {
    return (
        <>
            <View style={style.body}>
                <BottomClose event={() => setActivePage('Home')}/>
                <Text style={style.title}>Event</Text>
                <EventVictory/>
                <View>
                    <Event/>
                </View>
            </View>

        </>
    );
}

export default HistoryEvent;
