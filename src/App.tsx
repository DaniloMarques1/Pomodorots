import React from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from './utils';
import Button from './components/Button';
import Input from './components/Input';
import PomodoroCard from './components/PomodoroCard';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <View style={{backgroundColor: Colors.PRIMARY_RED, flex: 1}}>
        <Text>Ola, mundo!</Text>
        <Button
          backgroundColor={Colors.PRIMARY_RED}
          label="Email"
          onPress={() => console.log("Opa")}
        />       
      <Input error={false} placeholder="youremail@domain.com" label="Email" />
      <PomodoroCard title="Estudar react native" total={2} finished={1} />
      <PomodoroCard title="Estudar react native" total={2} finished={1} />
      <PomodoroCard title="Estudar react native" total={2} finished={1} />
      <PomodoroCard title="Estudar react native" total={2} finished={1} />
      </View>
    </>
  );
};

export default App;
