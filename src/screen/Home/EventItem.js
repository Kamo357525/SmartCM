import {Text, View} from "react-native";
import style from "./style";
import size from "../../assets/gStyle/resho";
import React from "react";

const Item = ({ item }) => (
    <View style={style.eventsBlock}>
        <View style={style.eventLine} />
        <View style={style.eventContent}>
            <Text style={style.eventHeader}>{item.EventTitle}</Text>
            <Text style={style.eventDesc}> {item.Description}</Text>
            <View style={{flexDirection: 'row', marginTop: size[12]}}>
                <Text style={style.eventData}> {item.date+"|"+item.Duration}</Text>
                <Text style={style.eventData}> {item.Address}</Text>
            </View>
        </View>
    </View>
);
export default Item
