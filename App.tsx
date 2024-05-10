import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import SplashScreen from './screens/Splash';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Main';
import DoctorListScreen from './screens/DocList';
import DoctorDetailScreen from './screens/DocAppointer';
import ChatList from './screens/ChatList';
import Conversation from './screens/Conversation';
import ArticleScreen from './screens/Articles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DocList" component={DoctorListScreen} />
        <Stack.Screen name="DocAppointer" component={DoctorDetailScreen} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Articles" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;