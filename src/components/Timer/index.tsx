import React from 'react';

import {
  Container,
  Header,
  CloseButton,
  CloseText,
  PomodoroName,
  PomodoroStatus,
  Body,
  Minutes,
  IconView,
} from './styles';
import Modal from 'react-native-modal';
import {Pomodoro} from '../../store/modules/Pomodoros/reducer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../utils';

interface TimerProps {
  showTimer: boolean;
  closeTimer: () => void;
  pomodoro?: Pomodoro;
}

function Timer(props: TimerProps) {
  return (
    <Modal
      swipeDirection={["down", "left", "right"]}
      onSwipeComplete={props.closeTimer}
      onBackButtonPress={props.closeTimer}
      isVisible={props.showTimer}>
      <Container>
        <Header>
          <CloseButton onPress={props.closeTimer}>
            <CloseText>X</CloseText>
          </CloseButton>
          <PomodoroName>{props.pomodoro?.title}</PomodoroName>
          <PomodoroStatus>
            {props.pomodoro?.finishedPomodoros}/{props.pomodoro?.qtdPomodoros}
          </PomodoroStatus>
        </Header>
        <Body>
          <Minutes>24:57</Minutes>
          <IconView>
            <Icon name="play-arrow" size={25} color={Colors.PRIMARY_RED} />
          </IconView>
        </Body>
      </Container>
    </Modal>
  );
}

export default Timer;
