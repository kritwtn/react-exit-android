// HomeScreen.js
import React , {useState,useEffect} from 'react';
import {Alert,BackHandler,SafeAreaView, View, Text, Button } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { logout ,selectIsAuthenticated } from './authSlice';


const HomeScreen = ({ navigation }) => {
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

  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  
  return (
    <SafeAreaView style={{ flex:1}}>
    <View style={{flex :1 , backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center'}}>
      <Text>Home Screen : {TextAuth}</Text>
      <Text> prevRoute : {prevPage}</Text>
      <Button title="Logout !" onPress={handleLogout} />
      <Button title="Profile" onPress={goToProfile} />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
