import React from 'react';
import { TextInput } from 'react-native';

function Input({ ...rest }) {
  return (
    <>
      <TextInput placeholderTextColor="#ddd" {...rest} />
    </>
  );
}

export default Input;
