import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PropTypes from 'prop-types';

import styles from './styles';

function Button({ children, loading, ...rest }) {
  return (
    <RectButton {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.txtButton}>{children}</Text>
      )}
    </RectButton>
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
