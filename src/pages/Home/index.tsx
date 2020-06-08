import React from 'react';

import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import {StateInterface} from '../../store/modules/Pomodoros/reducer';

interface Reducer {
  pomodoroReducer: StateInterface;
}

function Home() {
  const state = useSelector((state: Reducer) => state.pomodoroReducer);
  console.log(state);

  return (
    <Container>
      <Title>Hello, world!</Title>
    </Container>
  );
}

export default Home;
