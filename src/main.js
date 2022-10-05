import React, {useEffect} from 'react';
import StackNavigation from './navigation/stackNavigation';
import {requestUserPermission, notificationListner} from './fairbase/notification'

function Main() {
    useEffect(() => {
        requestUserPermission()
        notificationListner()

    }, [])

    return (
        <StackNavigation/>
    );
}


export default Main;
