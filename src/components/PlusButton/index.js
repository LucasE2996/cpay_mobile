import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function PlusButton({ callback }) {
  return (
    <>
      <TouchableOpacity onPress={() => callback()}>
        <View style={styles.container}>
          <Text style={styles.text}>+</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default PlusButton;
