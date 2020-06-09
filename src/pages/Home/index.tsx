import React from 'react';

import {Container, Title, Logo, Header} from './styles';
import {useSelector} from 'react-redux';
import {Store} from '../../store/modules/types';
import TomatoLogo from '../../assets/tomato.png';
import PomodoroCard  from '../../components/PomodoroCard';
import {FlatList} from 'react-native';

function Home() {
  const state = useSelector((state: Store) => state);

  //TODO: Adicionar modal de loading
  return (
    <Container>
      <Header>
        <Title>Pomodoros</Title>
        <Logo source={TomatoLogo} />
      </Header>

      <FlatList
        data={state.pomodoroReducer.tasks}
        keyExtractor={(item) => item._id }
        renderItem={({item}) => (
          <PomodoroCard
            title={item.title}
            total={item.qtdPomodoros}
            finished={item.finishedPomodoros}
          />
        )}
      />
    </Container>
  );
}

export default Home;
