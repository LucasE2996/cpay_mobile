import React, { useState } from 'react';
import { View, Picker, Text } from 'react-native';

import styles from './styles';

function ContactCard({ data }) {
  const [type, setType] = useState('Whatsapp');
  const [days, setDays] = useState('3');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.label}>Tipo</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={type}
              style={styles.pickerType}
              onValueChange={itemValue => setType(itemValue)}
            >
              <Picker.Item label="e-mail" value="e-mail" />
              <Picker.Item label="Whatsapp" value="Whatsapp" />
            </Picker>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Dias</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={days}
              style={styles.pickerDays}
              onValueChange={itemValue => setDays(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
            </Picker>
          </View>
        </View>
      </View>
    </>
  );
}

export default ContactCard;
