import React from 'react';

import {ButtonComponent, ButtonLabel} from './styles';

export interface ButtonProps {
  label: string;
  backgroundColor: string;
  labelColor?: string;
  loading?: boolean;
  onPress: () => void;
}

//TODO: Como controlar o loading (acivity indicator)
function Button({label, backgroundColor, labelColor, loading, onPress}: ButtonProps) {
  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <ButtonLabel labelColor={labelColor}>{label}</ButtonLabel>
    </ButtonComponent>
  );
}

export default Button;
