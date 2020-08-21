import React from 'react';

import {Container, Title, Logo, Header} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../../store/modules/types';
// @ts-ignore
import TomatoLogo from '../../assets/tomato.png';
import PomodoroCard  from '../../components/PomodoroCard';
import {FlatList, Alert} from 'react-native';
import {deletePomodoroRequest, pomodoroRequest} from '../../store/modules/Pomodoros/action'
import {Pomodoro} from '../../store/modules/Pomodoros/reducer';
import Timer from '../../components/Timer';

function HeaderComponent() {
  return (
    <Header>
      <Title>Pomodoros</Title>
      <Logo source={TomatoLogo} />
    </Header>
  );
}

function Home() {
  const dispatch = useDispatch();
  const state    = useSelector((state: Store) => state);
  const [showTimer, setShowTimer] = React.useState(false);
  const [currentPomodoro, setCurrentPomodoro] = React.useState<Pomodoro>();

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

  function handleRefresh() {
    if (state.loginReducer.token)
      dispatch(pomodoroRequest(state.loginReducer.token));
  }

  function handleTimer(item: Pomodoro) {
    setCurrentPomodoro(item);
    setShowTimer(true);    
  }

  return (
    <Container>
      <Timer
        showTimer={showTimer}    
        pomodoro={currentPomodoro}
        closeTimer={() => setShowTimer(false)}
      />
      <FlatList
        data={state.pomodoroReducer.tasks}
        keyExtractor={(item) => item._id }
        ListHeaderComponent={HeaderComponent}
        refreshing={state.pomodoroReducer.getPomodoroLoading || state.pomodoroReducer.deleteLoading}
        onRefresh={handleRefresh}
        renderItem={({item}) => (
          <PomodoroCard
            title={item.title}
            total={item.qtdPomodoros}
            finished={item.finishedPomodoros}
            handleDelete={() => handleDelete(item._id)}
            handleTimer={() => handleTimer(item)}
          />
        )}
      />
    </Container>
  );
}

export default Home;
