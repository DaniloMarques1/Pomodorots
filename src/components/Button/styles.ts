import styled from 'styled-components/native';
import {ButtonProps} from './index'
import {Colors} from '../../utils';

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${(props: ButtonProps) => props.backgroundColor}; 
  border: 2px solid  ${(props: ButtonProps) =>
    props.backgroundColor === Colors.PRIMARY_RED
      ? Colors.PRIMARY_RED
      : Colors.PRIMARY_GREEN}
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
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  size: 'small',
  color: Colors.PRIMARY_WHITE
}))`
  margin-right: 20px;
`;
