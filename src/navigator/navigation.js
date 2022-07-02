import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsListing from '../screens/NewsListing';
import NewsDetails from '../screens/NewsDetails';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="listing" component={NewsListing} />
        <Stack.Screen name="details" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
