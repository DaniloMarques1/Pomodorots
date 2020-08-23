import React, {useState, useEffect} from 'react';

import {
  Container,
  Time,
  Body,
  IconView,
  TimerView,
  Tomato,
  Title,
  Icons,
  ResetView
} from './styles';

// @ts-ignore
import TomatoLogo from '../../assets/tomato.png';
import {Helper, Colors} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');
import {useSelector} from 'react-redux';
import {Store} from '../../store/modules/types';

import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';


function LooseTimer() {
  const state         = useSelector((state: Store) => state);
  const DEFAULT_TIMER = state.timeState.timer.pomodoroTime;
  const DEFAULT_BREAK = state.timeState.timer.breakTime;
  const SPEED         = 10;

  const [time, setTime] = useState(DEFAULT_TIMER);
  const [iconName, setIconName] = useState("play-arrow");
  const [clockRunning, setClockRunning] = useState(false);
  const [breakTime, setBreakTime]       = useState(false);

  function handleClockStatus() {
    setClockRunning(prevState => !prevState);
    setIconName(prevState => prevState === 'play-arrow' ? 'pause' : 'play-arrow');
  }

  function handleResetTimer() {
    setTime(breakTime ? DEFAULT_BREAK : DEFAULT_TIMER);
    if (clockRunning) {
      setClockRunning(false);
      setIconName('play-arrow');
    }
  }

  useEffect(() => {
    if (clockRunning) {
      activateKeepAwake();
    } else {
      deactivateKeepAwake();
    }
  }, [clockRunning]) 

  useEffect(() => {
    // will only change if there is a rerender because of the timer
    // state changing from the profile page
    setTime(DEFAULT_TIMER);
  }, [DEFAULT_TIMER]);

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


  return (
    <Container>
      <Body>
        <Tomato source={TomatoLogo} />
        <Title>Loose timer</Title>
        <TimerView>
          <Time>
            {Helper.formatTime(time.minute.toString(), time.second.toString())}
          </Time>
          <Icons>
            <IconView onPress={handleClockStatus}>
              <Icon name={iconName} size={35} color={Colors.PRIMARY_WHITE} />
            </IconView>
            <ResetView onPress={handleResetTimer}>
              <Icon name="restore" size={30} color={Colors.PRIMARY_WHITE} />
            </ResetView>
          </Icons>
        </TimerView>
      </Body>
    </Container>
  );

}

export default LooseTimer;


