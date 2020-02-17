import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
