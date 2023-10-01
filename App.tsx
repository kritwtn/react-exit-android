import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store'; // Import your Redux store
import Navigation from './src/Navigation'; // Import your navigation component

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
