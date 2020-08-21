import styled from 'styled-components/native';
import {Colors}  from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY_RED};
`;

export const Body = styled.View`
  align-self: center;
  flex: 1;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${Colors.PRIMARY_WHITE};
  align-self: center;
  margin-bottom: 2px;
`;

export const TimerView = styled.View`
  background-color: ${Colors.PRIMARY_RED};
  border: 3px solid ${Colors.PRIMARY_WHITE};
  padding: 50px 70px;
  border-radius: 50px;
`;

export const Time = styled.Text`
  font-size: 46px;
  font-weight: bold;
  color: ${Colors.PRIMARY_WHITE};
`;


export const IconView = styled.TouchableOpacity`
  margin-top: 20px;
  align-self: center;
`;

export const ResetView = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 40px;
  align-self: center;
`;

export const Tomato = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  align-self: center;
`;

export const Icons = styled.View`
  flex-direction: row;
`;
