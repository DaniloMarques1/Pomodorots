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
  keyboardType?: string;
}

function Input({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
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
        keyboardType={keyboardType}
      />
    </>
  );
}

export default Input;
