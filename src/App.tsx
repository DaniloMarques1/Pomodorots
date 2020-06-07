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

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <Route />
    </>
  );
};

export default App;
