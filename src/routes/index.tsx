import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {Colors} from '../utils';
import {navigationRef} from './rootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../store/modules/types';
import {loginSuccess} from '../store/modules/Login/action';
import {pomodoroRequest} from '../store/modules/Pomodoros/action';
/* Pages */
import Login         from '../pages/Login';
import LoginParams   from '../pages/Login/routeParams';
import Register      from '../pages/Register';
import Home          from '../pages/Home';
import Profile       from '../pages/Profile';
import AddPomodoro   from '../pages/AddPomodoro';

type TabProps = {
  Login: LoginParams;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
  AddPomodoro: undefined;
}

export type LoginProps    = BottomTabScreenProps<TabProps, "Login">;
export type RegisterProps = BottomTabScreenProps<TabProps, "Register">;

const Tab = createBottomTabNavigator<TabProps>();

function Route() {
  const dispatch = useDispatch(); // fazer o dispatch do login e de consulta de pomodoros
  const state    = useSelector((state: Store) => state.loginReducer);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('pomodoro');
      setReady(true);
      if (token) {
        dispatch(loginSuccess(token));
        dispatch(pomodoroRequest(token));
      }
    }

    getToken();
  }, []);


  if (!ready)
    return null;

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        lazy={true}
        tabBarOptions={{
          tabStyle: {
            justifyContent: 'center',
            backgroundColor: Colors.PRIMARY_RED,
          },
          labelStyle: {fontSize: 16, fontWeight: 'bold'},
          activeTintColor: Colors.SECONDARY_GREEN,
          inactiveTintColor: Colors.PRIMARY_WHITE,
        }}>
        {state.token === null ? (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Tab.Screen name="Home"        component={Home} />
            <Tab.Screen name="Profile"     component={Profile} />
            <Tab.Screen name="AddPomodoro" component={AddPomodoro} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;
