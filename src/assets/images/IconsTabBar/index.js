import React from 'react';
import Home from './Home';
import Notification from './Notification';
import Activity from './Activity';
import Profile from './Profile';
import Add from './add';

function Index({path ,color}) {
  if (path === 'Home') {
    return <Home color={color} />;
  }
  if (path === 'Notification') {
    return <Notification color={color} />
  }
  if (path === 'Add') {
    return <Add color={color}/>
  }
  if (path === 'Activity') {
    return <Activity color={color}/>
  }
  if (path === 'Profile') {
    return <Profile color={color}/>
  }
}

export default Index;
