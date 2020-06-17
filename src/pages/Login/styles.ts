import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: 'height'
}))`
  background-color: ${Colors.PRIMARY_WHITE};
  flex: 1;
  padding: 60px 20px 0px 20px;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  align-self: center;
`;

export const ViewInput = styled.View`
  margin: 10px 0;
`;

export const ViewButton = styled.View`
  margin-top: 15px;
`;
