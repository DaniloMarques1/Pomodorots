import React from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from './utils';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <View>
        <Text>Ola, mundo!</Text>
        <Button labelColor={Colors.PRIMARY_WHITE} backgroundColor={Colors.PRIMARY_RED} label="Click" />
      </View>     
    </>
  );
};

export default App;
