import React from 'react';
import { Text, TextInput, View } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './styles';

function Input({ label, ...rest }) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
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

Input.propTypes = {
  label: PropTypes.string,
};

Input.defaultProps = {
  label: null,
};

export default Input;
