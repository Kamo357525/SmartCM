import React, { useEffect } from 'react';
import Bar from './Bar'
import Home from '../screen/Home';
import Notification from '../screen/Notification';
import Activity from '../screen/Activity';
import Profile from '../screen/Profile';
import AddTasks from '../screen/AddTasks';
import AddEvents from '../screen/AddEvents';
import BookLave from '../screen/AddBook';
import UpdateTask from '../screen/UpdateTask'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigation({ route }) {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown: false,}}  tabBar={(props)=><Bar {...props}/>}>
        <Tab.Screen name='Home' component={Home} screenOptions={{headerShown: false }} />
        <Tab.Screen  name='Notification' component={Notification}  screenOptions={{headerShown: false }}/>
        <Tab.Screen  name='Activity' component={Activity} screenOptions={{headerShown: false }} />
        <Tab.Screen  name='Profile' component={Profile}  screenOptions={{headerShown: false }}/>
        <Tab.Screen  name='AddTasks' component={AddTasks}  screenOptions={{headerShown: false }}/>
        <Tab.Screen  name='AddEvents' component={AddEvents}  screenOptions={{headerShown: false }}/>
        <Tab.Screen  name='BookLave' component={BookLave}  screenOptions={{headerShown: false }}/>
        <Tab.Screen  name='UpdateTask' component={UpdateTask}  screenOptions={{headerShown: false }}/>
      </Tab.Navigator>
  );
}

export default TabNavigation;

