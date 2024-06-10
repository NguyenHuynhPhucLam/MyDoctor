import * as React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/Login';
import SplashScreen from './screens/Splash';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/Main';
import DoctorListScreen from './screens/DocList';
import DoctorDetailScreen from './screens/DocAppointer';
import ChatList from './screens/ChatList';
import Conversation from './screens/Conversation';
import ArticleScreen from './screens/Articles';
import ProfileScreen from './screens/Profile';
import BottomNavbar from './screens/NavBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavbar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/icons/Home-chosen.png')
                  : require('./assets/icons/Home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/icons/Message-chosen.png')
                  : require('./assets/icons/Message.png')
              }
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/icons/Profile-chosen.png')
                  : require('./assets/icons/Profile.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DocList" component={DoctorListScreen} />
        <Stack.Screen name="DocAppointer" component={DoctorDetailScreen} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Articles" component={ArticleScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;