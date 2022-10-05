import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';

function Index({event, text}) {
  return (
    <Pressable
      style={style.bottom}
      onPress={()=>event()}
    >
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
}

export default Index;
