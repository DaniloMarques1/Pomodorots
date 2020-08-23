import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY_RED};
`;

export const Header = styled.View`
  margin: 5px 0;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 3px;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${Colors.PRIMARY_WHITE};
  font-size: 18px;
  align-self: center;
`;

export const Form = styled.View`
  background-color: ${Colors.PRIMARY_WHITE};
  border-radius: 12px;
  width: 90%;
  margin: 10px 0;
  padding: 12px;
`;

export const Label = styled.Text`
  color: ${Colors.PRIMARY_GREEN};
  font-weight: bold;
  font-size: 15px;
  align-self: center;
`;

export const ViewInput = styled.View`
  margin: 8px 0;
`;

export const ViewButton = styled.View`
  margin-top: 12px;
`;
