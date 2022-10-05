import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';

function Index({setActiveBottomSheet, pageBottomSheet, setBottomSheet, setDisplay, text, svg}) {
  return (
    <Pressable
      style={style.item}
      onPress={() => {
        setActiveBottomSheet(pageBottomSheet);
        setBottomSheet(true),
          setDisplay(false);
      }}>
      <Text style={style.itemText}>
        {text?text:pageBottomSheet}
      </Text>
      {svg}
    </Pressable>
  );
}

export default Index;
