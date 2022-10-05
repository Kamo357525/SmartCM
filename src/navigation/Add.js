import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { View, Animated, Pressable } from 'react-native';
import AddSvg from '../assets/images/IconsTabBar/add';
import AddTasks from '../assets/images/IconsTabBar/CreateTasks';
import AddEvents from '../assets/images/IconsTabBar/CreateEvents';
import AddBook from '../assets/images/IconsTabBar/BookLeave';
import size from '../assets/gStyle/resho';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from 'react-native-calendars/src/style';

function Add({ add, setAdd }) {
  const mode = useRef(new Animated.Value(0)).current;
  const buttonSize = useRef(new Animated.Value(1)).current;
  const [firstRender, setFirstRender] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 20,
        useNativeDriver: false,
      }),

      Animated.timing(buttonSize, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const tasksX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [size[39] * -1, size[90] * -1],
  });

  const tasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [size[27] * -1, size[50] * -1],
  });

  const doneTasksX = mode.interpolate({

    inputRange: [0, 1],
    outputRange: [size[40] * -1, size[39] * -1],
  });

  const doneTasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [size[26] * -1, size[80] * -1],
  });

  const planeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [size[39] * -1, size[10]],
  });

  const planeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [size[27] * -1, size[50] * -1],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  useEffect(() => {
    setFirstRender(true);
  }, []);


  useEffect(() => {
    if (firstRender) {
      handlePress();
    }
  }, [add]);
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{ position: 'absolute', left: tasksX, top: tasksY }}
      >
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: 24,
          backgroundColor: '#347474',
        }}>
          <Pressable
            onPress={() => {
            setAdd(!add);
            navigation.navigate('AddTasks');
          }
          }>
            <AddTasks />
          </Pressable>

        </View>
      </Animated.View>
      <Animated.View
        style={{ position: 'absolute', left: doneTasksX, top: doneTasksY }}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          zIndex: 3,
          borderRadius: 24,
          backgroundColor: '#347474',
        }}>
          <Pressable
            onPress={() => {
              setAdd(!add);
              navigation.navigate('AddEvents');
            }
            }>
            <AddEvents />
          </Pressable>
        </View>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', left: planeX, top: planeY }}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          zIndex: 3,
          borderRadius: 24,
          backgroundColor: '#347474',
        }}>
          <Pressable
            onPress={() => {
              setAdd(!add);
              navigation.navigate('BookLave');
            }
            }
          >
            <AddBook />
          </Pressable>
        </View>
      </Animated.View>
      <Pressable onPress={handlePress} style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 77,
        height: 60,
      }}>
        <Animated.View style={[{
          top: -15,
          left: -60,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: -250,
        }, sizeStyle]}>
            <AddSvg style={{marginBottom:size[35], marginRight:size[5]}} color={add}  onPress={() => {
              setAdd(!add);
            }
            } />
        </Animated.View>
      </Pressable>
    </View>
  );
}

export default Add;
