import React from 'react';
import { View } from 'react-native';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import colors from '~/styles/colors';

import styles from './styles';

function RowCard() {
  return (
    <>
      <View style={styles.container}>
        <FontAwesomeIcon icon={faUser} size={25} color={colors.gray} />
      </View>
    </>
  );
}

export default RowCard;
