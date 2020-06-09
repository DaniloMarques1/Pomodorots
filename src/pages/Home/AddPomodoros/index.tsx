import React from 'react';

import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import {StateInterface} from '../../store/modules/Pomodoros/reducer';
import {Store} from '../../store/modules/types';

function Home() {
  const state = useSelector((state: Store) => state);

  return (
    <Container>
      <Title>Hello, world!</Title>
    </Container>
  );
}

export default Home;
