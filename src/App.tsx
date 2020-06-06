import React from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from './utils';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <View>
        <Text>Ola, mundo!</Text>
        <Button
          backgroundColor={Colors.PRIMARY_RED}
          label="Email"
          onPress={() => console.log("Opa")}
        />       
      <Input error={false} placeholder="youremail@domain.com" label="Email" />
      </View>
    </>
  );
};

export default App;
