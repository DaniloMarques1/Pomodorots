import React, {useEffect} from 'react';

import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import {StateInterface} from '../../store/modules/Pomodoros/reducer';
import {Store} from '../../store/modules/types';

function AddPomodoro() {
  const state = useSelector((state: Store) => state);

  useEffect(() => {
    console.log("Profile");
  }, []);

  return (
    <Container>
      <Title>add pomodoro page!</Title>
    </Container>
  );
}

export default AddPomodoro;
