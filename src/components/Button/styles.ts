import styled from 'styled-components/native';
import {ButtonProps} from './index'
import {Colors} from '../../utils';

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${(props: ButtonProps) => props.backgroundColor}; 
  height: 40px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: ButtonProps) => props.labelColor ? props.labelColor : "#fff"};
  text-align: center;
  margin-left: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  size: 'small',
  color: Colors.PRIMARY_WHITE
}))``;
