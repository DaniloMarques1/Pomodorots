import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: 'height'
}))`
  background-color: ${Colors.PRIMARY_WHITE};
  padding: 10px 20px;
  flex: 1;
`;

export const Logo = styled.Image`
  align-self: center;
  width: 80px;
  height: 80px;
`;

export const ViewInput = styled.View`
  margin: 7px 0;
`;

export const ViewButton = styled.View`
  margin-top: 10px;
`;
