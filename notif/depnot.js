import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log("Authorization status:", authStatus);
       return  getFcmToken()
    }
}


 async function getFcmToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    console.log(fcmToken, "old token",);
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken, "new Token");
                await AsyncStorage.setItem("fcmToken", fcmToken);
            }
        } catch (error) {
            console.log(error);
        }
    }
}


export const notificationListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging().onMessage(async remoteMessage => {
      console.log( 'Notification caused app to open from background state:', remoteMessage)
    });



    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });
};

messaging().onMessage(async remoteMessage=>{
    console.log('asdasdasdasd..........', remoteMessage )
})
