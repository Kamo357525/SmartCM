import React from 'react';
import { View, TextInput, Text ,Button } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function Index({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <TextInput/>
      <Pressable onPress={()=>navigation.navigate('home')}>
        <View style={{backgroundColor:'red', width:50, height:50}}></View>
      </Pressable>

    </View>
  );
}

export default Index;
