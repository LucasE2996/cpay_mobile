import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

function Button({ children, loading, ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.txtButton}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
