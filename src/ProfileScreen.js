// ProfileScreen.js
import React , {useEffect} from 'react';
import { SafeAreaView,View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from './authSlice';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  useEffect(() => {
    navigation.setOptions({ gestureEnabled: false });
}, []);

  return (
    <SafeAreaView style={{ flex:1}}>
    <View style={{flex :1 , backgroundColor : '#fff',justifyContent : 'center',alignItems : 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
