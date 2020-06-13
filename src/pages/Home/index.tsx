import React from 'react';

import {Container, Title, Logo, Header} from './styles';
import {useSelector} from 'react-redux';
import {Store} from '../../store/modules/types';
import TomatoLogo from '../../assets/tomato.png';
import PomodoroCard  from '../../components/PomodoroCard';
import {FlatList} from 'react-native';
import Loading from '../../components/Loading';

function HeaderComponent() {
  return (
    <Header>
      <Title>Pomodoros</Title>
      <Logo source={TomatoLogo} />
    </Header>
  );
}

function Home() {
  const state = useSelector((state: Store) => state);

  return (
    <Container>
      <Loading loading={state.pomodoroReducer.loading} />
      <FlatList
        data={state.pomodoroReducer.tasks}
        keyExtractor={(item) => item._id }
        ListHeaderComponent={HeaderComponent}
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
