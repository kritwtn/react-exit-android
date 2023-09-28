
import React , {useState,useEffect} from 'react';
import {Alert,BackHandler,SafeAreaView, View, Text, Button } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { logout ,selectIsAuthenticated } from './authSlice';

const ProfileScreen = ({ navigation }) => {
  const [prevPage,setPrevPage] = useState('');
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
  
  useEffect(() => {

    const backAction = () => {

      const routes = navigation.getState()?.routes;
      const prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route 
      if(prevRoute === undefined || (typeof prevRoute == 'object')){
      
        if(typeof prevRoute == 'object') {
            
            setPrevPage(prevRoute.name);
        }

        if(isAuthenticated && (typeof prevRoute == 'object' && prevRoute.name == 'Login') ) {
          Alert.alert("Hold on!", "Are you sure you want exit [2] ?"+routes[routes.length - 1].name, [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        }
       }
    };
 
    
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

     return () => backHandler.remove();



}, []);
  return (
    <SafeAreaView style={{ flex:1}}>
    <View style={{flex :1 , backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center'}}>
      <Text>Home Screen : {TextAuth}</Text>
      <Text> prevRoute : {prevPage}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
