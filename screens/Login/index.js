import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => (
  <View>
    <Text>Login/Signup</Text>
    <Button title="Login" onPress={() => { /* handle login */ }} />
    <Button title="Signup" onPress={() => { /* handle signup */ }} />
  </View>
);

export default LoginScreen;
