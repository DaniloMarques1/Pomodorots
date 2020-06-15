import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  width: 98%;
  height: 270px;
  background-color: ${Colors.PRIMARY_WHITE};
  border-radius: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  background: ${Colors.PRIMARY_WHITE};
`;

export const CloseText = styled.Text`
  font-size: 27px;
  color: ${Colors.SECONDARY_GRAY};
`;

export const PomodoroName = styled.Text`
  font-size: 20px;
  color: ${Colors.PRIMARY_GREEN};
  font-weight: bold;
`; 

export const PomodoroStatus = styled.Text`
  font-size: 14px;
  color: ${Colors.PRIMARY_GREEN};
`;
  
export const Body = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const Minutes = styled.Text`
  font-size: 42px;
  color: ${Colors.PRIMARY_RED};
  font-weight: bold;
`;

export const IconView = styled.View`
  margin-top: 20px;
`;
