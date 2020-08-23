import React, {useState, useEffect} from 'react';

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
import {Colors, Helper} from '../../utils';
import {updatePomodorRequest} from '../../store/modules/Pomodoros/action';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../../store/modules/types';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

interface TimerProps {
  showTimer: boolean;
  closeTimer: () => void;
  pomodoro?: Pomodoro;
}

function Timer(props: TimerProps) {
  const dispatch                        = useDispatch();
  const state                           = useSelector((state: Store) => state);


  const DEFAULT_TIMER = state.timeState.timer.pomodoroTime;
  const DEFAULT_BREAK = state.timeState.timer.breakTime;
  const SPEED         = 10;


  const token = state.loginReducer.token;
  const [time, setTime]                 = useState(DEFAULT_TIMER);
  const [iconName, setIconName]         = useState("play-arrow");
  const [clockRunning, setClockRunning] = useState(false);
  const [breakTime, setBreakTime]       = useState(false);
  
  useEffect(() => {
    // will only change if there is a rerender because of the timer
    // state changing from the profile page
    setTime(DEFAULT_TIMER);
  }, [DEFAULT_TIMER]);
  
  /*
  function formatTime(): string {
    return `${Helper.padLeft(time.minute.toString())}:${Helper.padLeft(time.second.toString())}`;
  }
   */

  function handleClockStatus() {
    setClockRunning(prevState => !prevState);
    setIconName(prevState => prevState === 'play-arrow' ? 'pause' : 'play-arrow');
  }

  function handleCloseTimer() {
    // reset info about the timer
    setTime(DEFAULT_TIMER);
    setClockRunning(false);
    setBreakTime(false);
    props.closeTimer();
  }

  useEffect(() => {
    if (clockRunning) {
      if (time.minute > 0 || time.second > 0) {
        const intervalId = setInterval(() => {
          setTime((prevState) => ({
            second: prevState.second === 0 ? 59 : prevState.second - 1,
            minute:
              prevState.second === 0 ? prevState.minute - 1 : prevState.minute,
          }));
        }, SPEED);

        return () => clearInterval(intervalId);
      } else {
        if (!breakTime) {
          if (props.pomodoro && token) {
            if (props.pomodoro.finishedPomodoros < props.pomodoro.qtdPomodoros) {
              dispatch(updatePomodorRequest(props.pomodoro._id, token));
              props.pomodoro.finishedPomodoros++;
            }
          }
        } else {
          if (props.pomodoro) {
            if (props.pomodoro.finishedPomodoros === props.pomodoro.qtdPomodoros)
              handleCloseTimer();
          }
        }
      
        setBreakTime(prevState => !prevState);
        setTime(!breakTime ? DEFAULT_BREAK : DEFAULT_TIMER);
        setClockRunning(false);
        setIconName('play-arrow');
        //play audio
        const bell = new Sound("alarm.mp3", Sound.MAIN_BUNDLE, (err) => {
          if (err)
            console.log("Erro playing the audio");

          bell.play();
        });
      }
    }
  }, [clockRunning, time])


  useEffect(() => {
    if (clockRunning) {
      activateKeepAwake();
    } else {
      deactivateKeepAwake();
    }
  }, [clockRunning]) 

  return (
    <Modal
      swipeDirection={["down", "left", "right", "up"]}
      onSwipeComplete={handleCloseTimer}
      onBackButtonPress={handleCloseTimer}
      isVisible={props.showTimer}>
      <Container>
        <Header>
          <CloseButton onPress={handleCloseTimer}>
            <CloseText>X</CloseText>
          </CloseButton>
          <PomodoroName>{props.pomodoro?.title}</PomodoroName>
          <PomodoroStatus>
            {props.pomodoro?.finishedPomodoros}/{props.pomodoro?.qtdPomodoros}
          </PomodoroStatus>
        </Header>
        <Body>
          <Minutes>{Helper.formatTime(time.minute.toString(), time.second.toString())}</Minutes>
          <IconView onPress={handleClockStatus}>
            <Icon name={iconName} size={25} color={Colors.PRIMARY_RED} />
          </IconView>
        </Body>
      </Container>
    </Modal>
  );
}

export default Timer;
