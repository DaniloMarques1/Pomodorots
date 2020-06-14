import styled from 'styled-components/native';
import {Colors} from '../../utils';

export const Container = styled.View`
  background-color: ${Colors.PRIMARY_WHITE};
  height: 80px;
  border-radius: 10px;
  padding: 10px;
  elevation: 10;
  margin-bottom: 12px;
`;

export const TitleQtdView = styled.View`
  flex-direction: row;
`;
export const ViewTitle = styled.View`
  width: 80%;
`;

export const Title = styled.Text`
  color: ${Colors.PRIMARY_GREEN};
  font-weight: bold;
  font-size: 15px;
`;

export const ViewQtd = styled.View`
  width: 20%;
`;

export const Qtd = styled.Text`
  text-align: right;
  color: ${Colors.PRIMARY_GREEN};
`;

export const IconView = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  margin: 0 20px;
  margin-top: 10px;
`;

