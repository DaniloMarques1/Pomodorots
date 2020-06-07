import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {Colors} from '../utils';
/* Pages */
import Login from '../pages/Login';
import LoginParams from '../pages/Login/routeParams';
import Register from '../pages/Register';

type TabProps = {
  Login: LoginParams;
  Register: undefined;
}

export type LoginProps    = BottomTabScreenProps<TabProps, "Login">;
export type RegisterProps = BottomTabScreenProps<TabProps, "Register">;

const Tab = createBottomTabNavigator<TabProps>();

function Route() {
  //TODO: Check if we have a token
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            justifyContent: 'center',
            backgroundColor: Colors.PRIMARY_RED,
          },
          labelStyle: {fontSize: 16, fontWeight: 'bold'},
          activeTintColor: Colors.SECONDARY_GREEN,
          inactiveTintColor: Colors.PRIMARY_WHITE,
        }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;
