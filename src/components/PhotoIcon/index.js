import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '~/styles/colors';

import styles from './styles';

function RowCard() {
  return (
    <>
      <View style={styles.container}>
        <FontAwesome name="user-circle" size={40} color={colors.gray} />
      </View>
    </>
  );
}

export default RowCard;
