// LoginScreen.js
import React , {useEffect} from 'react';
import {Alert,BackHandler,SafeAreaView, View, Text, Button } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { login , selectIsAuthenticated } from './authSlice';

const LoginScreen = ({ navigation }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  let TextAuth;
  if(isAuthenticated) {
    TextAuth = 'true';
  } else {
    TextAuth = 'false';
  }
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    navigation.navigate('Home');
  };


  return (
    <SafeAreaView style={{ flex:1}}>
    <View style={{flex :1 , backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center'}}>
      <Text>Login Screen : {TextAuth } </Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
