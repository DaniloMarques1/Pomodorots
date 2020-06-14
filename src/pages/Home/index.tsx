import React from 'react';

import {Container, Title, Logo, Header} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../../store/modules/types';
import TomatoLogo from '../../assets/tomato.png';
import PomodoroCard  from '../../components/PomodoroCard';
import {FlatList, Alert} from 'react-native';
import Loading from '../../components/Loading';
import {deletePomodoroRequest} from '../../store/modules/Pomodoros/action'

function HeaderComponent() {
  return (
    <Header>
      <Title>Pomodoros</Title>
      <Logo source={TomatoLogo} />
    </Header>
  );
}

//TODO: Loading vai aparecer em qualquer tela caso o loading seja alterado
function Home() {
  const dispatch = useDispatch();
  const state    = useSelector((state: Store) => state);

  function handleDelete(id: string) {
      Alert.alert('Warning', 'Are you sure you want to delete?', [
        {
          text: 'Yes',
          onPress: () => dispatchDelete(id)
        },
        {text: 'No'},
      ]);
  }

  function dispatchDelete(id: string) {
    if (state.loginReducer.token)
      dispatch(deletePomodoroRequest(state.loginReducer.token, id));
  }

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
            handleDelete={() => handleDelete(item._id)}
          />
        )}
      />
    </Container>
  );
}

export default Home;
