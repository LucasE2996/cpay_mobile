import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import moment from 'moment';
import 'moment/min/locales';

import PhotoIcon from '~/components/PhotoIcon';

import styles from './styles';

function RowCard({ data }) {
  const { name, moneyValue, date, photoUrl } = data;

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  function formatDate(date) {
    moment.locale('pt');
    return moment(date).format('d MMM');
  }

  const moneyString = formatter.format(moneyValue);
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
