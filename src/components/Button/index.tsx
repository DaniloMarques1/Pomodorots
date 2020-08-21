import React from 'react';

import {ButtonComponent, ButtonLabel, Loading} from './styles';

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  labelColor?: string;
  loading?: boolean;
  disable?: boolean;
  onPress: () => void;
}

function Button({disable, label, backgroundColor, labelColor, loading, onPress}: ButtonProps) {
  disable = disable ? disable : false;
  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      disabled={disable}
      onPress={onPress}
    >
    {loading && (
     <Loading /> 
    )}
      <ButtonLabel labelColor={labelColor}>{label}</ButtonLabel>
    </ButtonComponent>
  );
}

export default Button;
