import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY_RED};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  margin-bottom: 30px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 19px;
  color: ${Colors.PRIMARY_GREEN};
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 95%;
  height: 320px;
  background-color: ${Colors.PRIMARY_WHITE};
  border-radius: 6px;
  padding: 16px;
`;

export const InputView = styled.View`
  margin-bottom: 10px;
`;

export const ButtonView = styled.View`
  margin-top: 10px;
`;
