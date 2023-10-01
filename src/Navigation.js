// Navigation.js
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import {selectIsAuthenticated} from './authSlice';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import React , {useState,useEffect} from 'react';
import { Alert,BackHandler } from 'react-native';
import backActionAlert from './components/backActionAlert';

// import backActionAlert from './components/backActionAlert';
const Stack = createStackNavigator();

const Navigation = () => {
  
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [prevRouteName, setPrevRouteName] = useState('');
     useEffect(() => {
      
          const backHandler = BackHandler.addEventListener('hardwareBackPress', ()=>backActionAlert(prevRouteName));
      
          return () => {
            backHandler.remove();
          };
  }, [prevRouteName]);

  return (
    <NavigationContainer onStateChange={(state) => {
        const routes = state.routes;
        const prevRoute = routes[routes.length - 2];
        if (prevRoute) {
          setPrevRouteName(prevRoute.name);
        } else {
          setPrevRouteName('');
        }
      }}
  >
  <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'} screenOptions={{
    gestureEnabled: false,
    headerShown: false, 
  }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
