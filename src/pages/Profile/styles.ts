import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.PRIMARY_RED};
  align-items: center;
`;

export const Header = styled.View`
  margin: 20px 0;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${Colors.PRIMARY_WHITE};
  font-size: 18px;
`;

export const Form = styled.View`
  background-color: ${Colors.PRIMARY_WHITE};
  width: 90%;
  height: 370px;
  border-radius: 20px;
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
