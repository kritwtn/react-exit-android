// HomeScreen.js
import React , {useEffect,useCallback} from 'react';
import {Alert,BackHandler,SafeAreaView, View, Text, Button } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { logout ,selectIsAuthenticated } from './authSlice';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  let TextAuth;
  if(isAuthenticated) {
    TextAuth = 'true';
  } else {
    TextAuth = 'false';
  }
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
   
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

     return () => backHandler.remove();

    }, []);

  useEffect(() => {
    navigation.setOptions({ gestureEnabled: false });
}, []);

  return (
    <SafeAreaView style={{ flex:1}}>
    <View style={{flex :1 , backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center'}}>
      <Text>Home Screen : {TextAuth}</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Profile" onPress={goToProfile} />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
