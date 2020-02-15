import React from 'react';
import { TextInput, View } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './styles';

function Input({ ...rest }) {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          {...rest}
        />
      </View>
    </>
  );
}

export default Input;
