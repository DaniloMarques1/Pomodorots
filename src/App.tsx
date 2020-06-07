import React from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from './utils';
//import Login from './pages/Login';
//import Register from './pages/Register';
//import Button from './components/Button';
//import Input from './components/Input';
//import PomodoroCard from './components/PomodoroCard';
import Route from './routes';
import {Provider} from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <Provider store={store}>
        <Route />
      </Provider>
    </>
  );
};

export default App;
