import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ViewTitle,
  ViewQtd,
  Title,
  Qtd,
  IconView,
  TitleQtdView,
  IconButton,
} from './styles';
import {Colors} from '../../utils';

//TODO: Add events to delete button and play button
interface CardProps {
  title: string;
  finished: number;
  total: number;
}

function PomodoroCard({title, finished, total}: CardProps) {
  return (
    <Container>
      <TitleQtdView>
        <ViewTitle>
          <Title>{title}</Title>
        </ViewTitle>
        <ViewQtd>
          <Qtd>{finished}/{total}</Qtd>
        </ViewQtd>
      </TitleQtdView>
      <IconView>
        <IconButton>
          <Icon name="keyboard-arrow-right" color={Colors.PRIMARY_RED} size={35} />
        </IconButton>
        <IconButton>
          <Icon name="delete" color={Colors.PRIMARY_RED} size={28} />
        </IconButton>
      </IconView>
    </Container>
  );
}

export default PomodoroCard;
