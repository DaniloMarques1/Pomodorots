import styled from 'styled-components/native';
import {ButtonProps} from './index'

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${(props: ButtonProps) => props.backgroundColor}; 
  height: 40px;
  border-radius: 6px;
  justify-content: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: ButtonProps) => props.labelColor ? props.labelColor : "#fff"};
  text-align: center;
`;
