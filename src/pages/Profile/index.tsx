import React, {useEffect} from 'react';

import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import {StateInterface} from '../../store/modules/Pomodoros/reducer';
import {Store} from '../../store/modules/types';
import AsyncStorage from '@react-native-community/async-storage';

function Profile() {
  const state = useSelector((state: Store) => state);

  useEffect(() => {
    console.log("Profile");
  }, []);

  return (
    <Container>
      <Title>Profile page!</Title>
    </Container>
  );
}

export default Profile;
