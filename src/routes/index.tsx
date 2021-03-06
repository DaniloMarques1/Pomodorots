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
import {setTime} from '../store/modules/Timer/actions';
import {PomodoroTime} from '../store/modules/Timer/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Pages */
import Login         from '../pages/Login';
import LoginParams   from '../pages/Login/routeParams';
import Register      from '../pages/Register';
import Home          from '../pages/Home';
import Profile       from '../pages/Profile';
import AddPomodoro   from '../pages/AddPomodoro';
import LooseTimer    from '../pages/LooseTimer';

type TabProps = {
  Login: LoginParams;
  Register: undefined;
  Home: undefined;
  Profile: undefined;
  AddPomodoro: undefined;
 LooseTimer: undefined;
}

export type LoginProps    = BottomTabScreenProps<TabProps, "Login">;
export type RegisterProps = BottomTabScreenProps<TabProps, "Register">;

const Tab = createBottomTabNavigator<TabProps>();

function Route() {
  const dispatch = useDispatch(); // fazer o dispatch do login e de consulta de pomodoros
  const state    = useSelector((state: Store) => state);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('pomodoro');
      const timeStr = await AsyncStorage.getItem('pomodoroTimer');
      let time: PomodoroTime;
      
      if (!timeStr) {
        time = {pomodoroTime: {minute: 25, second: 0}, breakTime: {minute: 5, second: 0}};
      } else {
        time = JSON.parse(timeStr);
      }

      dispatch(setTime(time));

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
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let name = "";

            if (route.name === "Home") {
              name = "home";
            } else if (route.name === "Profile") {
              name = 'account-circle';
            } else if (route.name === "AddPomodoro") {
              name = "note-add";
            } else if (route.name === "Login") {
              name = "person";
            } else if(route.name === "LooseTimer"){
              name = "timer";
            } else {
              name = "person-add";
            }
            
            return <Icon name={name} size={22} color={color} />
          },
        })}
        lazy={true}
        tabBarOptions={{
          tabStyle: {
            justifyContent: 'center',
            backgroundColor: Colors.PRIMARY_GREEN,
          },
          labelStyle: {fontSize: 15},
          activeTintColor: Colors.PRIMARY_RED,
          inactiveTintColor: Colors.PRIMARY_WHITE,
        }}>
        {state.loginReducer.token === null ? (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="AddPomodoro" component={AddPomodoro} options={() => ({title: "Add"})} />
            <Tab.Screen name="LooseTimer" component={LooseTimer} options={() => ({title: "Timer"})} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;
