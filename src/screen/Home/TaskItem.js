import { Pressable, Text, View } from "react-native";
import style from "./style";
import CheckBox from "@react-native-community/checkbox";
import React from "react";

const Item = ({ item, navigation }) => (
  <Pressable
    onPress={() => {
      navigation.navigate("UpdateTask", {
        itemId: item.id,
      });
    }
    }
    style={style.tasksBlock}>
    <CheckBox value={item.checked} />
    <View>
      <Text style={style.tasksTitle}>{item.Title}</Text>
      <Text style={style.tasksDate}>{item.date+'|'+ (item.Duration?item.Duration:'15 minute')}</Text>
    </View>
    <Text style={{ ...style.colorBlock, backgroundColor: item.color }}>{item.Project.title ||"Bob AI"}</Text>
  </Pressable>
);

export default Item;
