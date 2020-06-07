import styled from 'styled-components/native';
import { Colors } from '../../utils';
import {InputProps} from './index'

export const InputComponent = styled.TextInput`
  background-color: ${Colors.PRIMARY_WHITE};
  border: 2px solid ${(props: InputProps) =>
                    props.error ? Colors.ERROR_RED : Colors.PRIMARY_GREEN};
  border-radius: 6px;
`;

export const InputLabel = styled.Text`
  font-size: 15px;
  color: ${(props: InputProps) => props.error ? Colors.ERROR_RED : Colors.PRIMARY_GREEN};
  font-weight: bold;
`;
