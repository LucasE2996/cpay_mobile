import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function RowCard({ data }) {
  const { name, moneyValue, date, photoUrl } = data;

  function formatMoney(value) {
    const splitValue = value.toString(10).split('.');

    if (splitValue.length < 2) {
      splitValue.push('00');
    }

    return `R$ ${splitValue[0]},${splitValue[1]}`;
  }

  const moneyString = formatMoney(moneyValue);

  return (
    <>
      <View style={styles.container}>
        <View styles={styles.leftContent}>
          <Text style={{ padding: 10 }}>PHOTO</Text>
          <View style={styles.textBox}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.money}>{moneyString}</Text>
          </View>
        </View>
        <View styles={styles.rightContent}>
          <Text style={styles.date}>{date}</Text>
          <Text>BUTTON</Text>
        </View>
      </View>
    </>
  );
}

export default RowCard;
