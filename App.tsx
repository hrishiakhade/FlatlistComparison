/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/home';
import FlatlistScreen from './screens/FlatlistScreen';
import FlashlistScreen from './screens/FlashlistScreen';
import HapticFeedbackScreen from './screens/HapticFeedback';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Flatlist"
          component={FlatlistScreen}
          options={{ title: 'Flatlist' }}
        />
        <Stack.Screen
          name="Flashlist"
          component={FlashlistScreen}
          options={{ title: 'Flashlist' }}
        />
        <Stack.Screen
          name="HapticFeedback"
          component={HapticFeedbackScreen}
          options={{ title: 'Haptic Feedback' }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;