import React from 'react';

import {ButtonComponent} from './styles';

export interface ButtonProps {
  label: string;
  backgroundColor: string;
  labelColor: string;
  loading: boolean;
}

function Button({label, backgroundColor, labelColor, loading}: ButtonProps) {
  return (
    <ButtonComponent
      loading={loading}
      mode="contained"
      color={backgroundColor}
      labelStyle={{color: labelColor}}
      accessibilityStates
      onPress={() => console.log('Cliked')}>
      {label}
    </ButtonComponent>
  );
}

export default Button;
