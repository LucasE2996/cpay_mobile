import React, { useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { RNToasty } from 'react-native-toasty';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Button from '~/components/Button';
import InputGrayLarge from '~/components/InputGrayLarge';
import { colors } from '~/styles';

import styles from './styles';

const check = require('~/assets/check.png');
const logoMaster = require('~/assets/logo_master.png');

export default function Deposit({ navigation }) {
  const [deposit, setDeposit] = useState(true);

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
      {deposit && (
        <>
          <Text style={styles.depositValue}>Valor a depositar</Text>
          <InputGrayLarge
            keyboardType="decimal-pad"
            autoCorrect={false}
            autoCapitalize="none"
            defaultValue={formatter.format(0)}
            values={formatter.format(100)}
          />
          <Button style={styles.button} onPress={() => setDeposit(!deposit)}>
            Gerar boleto
          </Button>

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
        </>
      )}
      {!deposit && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
          }}
        >
          <Text
            style={[styles.boleto, { textAlign: 'center', marginBottom: 30 }]}
          >
            Utilize o código abaixo pra efetuar o pagamento
          </Text>
          <Text
            style={[styles.boleto, { textAlign: 'center', marginBottom: 30 }]}
          >
            3419179001 01043510047 91020150008 8 81690026000
          </Text>
          <Button
            style={styles.button}
            onPress={() => RNToasty.Success({ title: 'Código copiado' })}
          >
            Copiar código
          </Button>
          <Button style={[styles.button, { backgroundColor: colors.gray }]}>
            Enviar boleto por e-mail
          </Button>
        </View>
      )}
    </ScrollView>
  );
}
