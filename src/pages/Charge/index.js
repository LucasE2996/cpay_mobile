import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { RNToasty } from 'react-native-toasty';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import ChargeDate from '~/components/ChargeDate';
import InputGray from '~/components/InputGray';
import InputGrayLarge from '~/components/InputGrayLarge';
import api from '~/services/api';

import styles from './styles';

export default function Charge({ navigation }) {
  const [charge, setCharge] = useState([]);
  const [token, setToken] = useState('');

  async function handleSubmit() {
    try {
      const response = await api.post(
        '/invoices',
        {
          invoice: {
            amount: charge.amount,
            description: charge.description,
            due_date: charge.due_date,
            from_customer_id: 3,
            to_customer_id: 5,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      RNToasty.Success({ title: 'Cobrança gerada!' });
      navigation.navigate('Main');
    } catch (error) {
      RNToasty.Error({ title: 'Ocorreu um erro!' });
      console.log(error);
    }
  }

  useEffect(() => {
    async function getToken() {
      const asyncToken = await AsyncStorage.getItem('@cpay:user_token');

      setToken(asyncToken);
    }

    getToken();
  }, []);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <ScrollView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerForm}>
            <>
              <InputGray
                label="Nome"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                values={charge.name}
                onChangeText={text => {
                  setCharge({ ...charge, name: text });
                }}
              />
              <InputGray
                label="CPF ou CNPJ"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                values={charge.national_registry_code}
                onChangeText={text => {
                  setCharge({ ...charge, national_registry_code: text });
                }}
              />
              <InputGrayLarge
                label="Valor a ser cobrado"
                keyboardType="decimal-pad"
                autoCorrect={false}
                autoCapitalize="none"
                defaultValue={formatter.format(0)}
                values={formatter.format(charge.amount)}
                onChangeText={text => {
                  setCharge({ ...charge, amount: text });
                }}
              />
              <InputGray
                label="Data de vencimento"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                values={charge.due_date}
                onChangeText={text => {
                  setCharge({ ...charge, due_date: text });
                }}
              />
              <InputGray
                label="Descrição"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                values={charge.description}
                onChangeText={text => {
                  setCharge({ ...charge, description: text });
                }}
              />
              <Text style={styles.label}>Criar notificações</Text>
              <ChargeDate />
              <ChargeDate />
              <ChargeDate />

              <Button style={styles.button} onPress={handleSubmit}>
                Gerar cobrança
              </Button>
            </>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>
  );
}

Charge.navigationOptions = {
  title: 'Cobrança',
};

Charge.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
