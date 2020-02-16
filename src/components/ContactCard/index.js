import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function ContactCard({ data }) {
  const { name, photoUrl } = data;

  return (
    <>
      <View style={styles.container}>
        <Text>PHOTO</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </>
  );
}

export default ContactCard;
