import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY_RED};
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${Colors.PRIMARY_WHITE};
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;

export const Logo = styled.Image`
  margin-left: auto;
  height: 80px;
  width: 80px;
`;
