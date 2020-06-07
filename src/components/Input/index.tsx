import React from 'react';

import { InputComponent, InputLabel } from './styles';
import { Colors } from '../../utils';

export interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error: boolean;
  value: string;
  onChangeText: (field: string) => void;
}

function Input({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry,
  error,
}: InputProps) {
  return (
    <>
      <InputLabel error={error}>{label}</InputLabel>
      <InputComponent
        secureTextEntry={secureTextEntry}
        error={error}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.PRIMARY_GRAY}
        placeholder={placeholder}
        theme={{colors: {underlineColor: 'transparent'}}}
      />
    </>
  );
}

export default Input;
