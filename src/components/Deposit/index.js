import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Button from '~/components/Button';
import InputGrayLarge from '~/components/InputGrayLarge';

import styles from './styles';

const check = require('~/assets/check.png');
const logoMaster = require('~/assets/logo_master.png');

export default function Deposit({ navigation }) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Depósito C-Pay</Text>
      </View>
      <Text style={styles.depositValue}>Valor a depositar</Text>
      <InputGrayLarge
        keyboardType="decimal-pad"
        autoCorrect={false}
        autoCapitalize="none"
        defaultValue={formatter.format(0)}
        values={formatter.format(100)}
      />
      <Text style={styles.formPayment}>Formas de pagamento</Text>
      <View style={styles.boxCart}>
        <Image source={logoMaster} />
        <View style={styles.boxInfoCart}>
          <Text style={styles.txtInfoCart}>Nubank virtual</Text>
          <Text style={styles.txtInfoCart}>Cartão 5502 15** **** 0427</Text>
        </View>
        <Image source={check} style={styles.check} />
      </View>
      <Button style={styles.button}>Adicionar cartão de crédito</Button>
    </ScrollView>
  );
}
