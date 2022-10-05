import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import Svg from '../assets/images/IconsTabBar';
import { BackHandler } from 'react-native';
import style from './style';
import Background from '../assets/images/tabBarBacgraund';
import Add from './Add';

export const navigationRef = React.createRef(null);

function Bar({ state, descriptors, navigation }) {
  const [add, setAdd] = useState(false);

  useEffect(() => {
    function handleBackButtonClick() {
      BackHandler.exitApp();
      return true;
    }

    if (state.index === 0) {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    }
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, [state]);

  return (

    <View style={style.body} ref={navigationRef}>
      <Background style={style.image} />
      <View
        style={style.addBlock}>
        <Add add={add} setAdd={setAdd} />
      </View>

      <View style={style.navBlock}>

        {state.routes.map((route, index) => {


          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          let isFocused = state.index === index;
          const onPress = () => {
            setAdd(false);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          if (index > 3) {
            return null;
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <View style={{ ...style.isActive, backgroundColor: isFocused && !add ? '#FFFFFF' : '#347474' }}>
                <Svg color={isFocused && !add ? '#347474' : '#FFFFFF'} path={label} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>

  );
}
export default Bar;
