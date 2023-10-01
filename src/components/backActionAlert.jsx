import { Alert,View, Text,BackHandler } from 'react-native'
import React from 'react'



  
//   const backHandler = BackHandler.addEventListener(
//     "hardwareBackPress",
//     backAction
//   );

//    return () => backHandler.remove();

const backActionAlert = (prevRouteName) => {
  
    if (prevRouteName === '') {
        Alert.alert("Hold on!", "Are you sure you want exit ?", [
         {
             text: "Cancel",
             onPress: () => null,
             style: "cancel"
         },
         { text: "YES", onPress: () => BackHandler.exitApp() }
         ]);
       return true;
     } else {
       return null;
     }
}
export default backActionAlert