import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PhotoIcon from '~/components/PhotoIcon';

import styles from './styles';

function ContactCard({ data }) {
  const { name, photoUrl } = data;

  return (
    <>
      <TouchableOpacity
        onPress={() => console.warn(name, 'profile card pressed.')}
      >
        <View style={styles.container}>
          <PhotoIcon />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default ContactCard;
