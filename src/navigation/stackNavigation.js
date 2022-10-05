import Login from '../screen/Login/Login';
import Registration from '../screen/Login/Registration';
import Forgot from '../screen/Login/Forgot';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Activities from '../screen/Activity'

const Stack = createNativeStackNavigator();

function stackNavigation(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Activities' component={Activities} />
        <Stack.Screen name='TabNavigation' component={TabNavigation}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default stackNavigation;


