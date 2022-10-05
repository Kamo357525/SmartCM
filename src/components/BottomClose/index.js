import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './style';

function Index({event}) {
  return (
    <Pressable
      style={style.bottom}
      onPress={()=>event()}
    >
      <Text  onPress={()=>event()} style={style.text}>X</Text>
    </Pressable>
  );
}

export default Index;
