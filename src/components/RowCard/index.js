import React from 'react';
import { View, Text } from 'react-native';

import moment from 'moment';
import 'moment/min/locales';

import { TouchableOpacity } from 'react-native-gesture-handler';

import PhotoIcon from '~/components/PhotoIcon';

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

  function formatDate(date) {
    moment.locale('pt');
    return moment(date).format('d MMM');
  }

  const moneyString = formatMoney(moneyValue);
  const formatedDate = formatDate(date);

  return (
    <>
      <View style={styles.container}>
        <PhotoIcon />
        <View style={styles.textBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.money}>{moneyString}</Text>
        </View>
        <View styles={styles.rightContent}>
          <Text style={styles.date}>{formatedDate}</Text>
          <TouchableOpacity
            onPress={() => {
              console.warn('pay btn pressed');
            }}
          >
            <Text style={styles.payLink}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default RowCard;
