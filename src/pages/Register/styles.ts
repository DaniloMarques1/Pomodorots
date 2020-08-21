import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  background-color: ${Colors.PRIMARY_WHITE};
  padding: 5px 10px;
  flex: 1;
`;

export const Logo = styled.Image`
  align-self: center;
  width: 70px;
  height: 70px;
`;

export const ViewInput = styled.View`
  margin: 5px 0;
`;

export const ViewButton = styled.View`
  margin-top: 8px;
`;

export const Form = styled.ScrollView`
  flex: 1;
`;
