import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Button from '~/components/Button';
import InputGray from '~/components/InputGray';
import InputGrayLarge from '~/components/InputGrayLarge';

import styles from './styles';

export default function Charge({ navigation }) {
  const [charge, setCharge] = useState([]);

  async function handleSubmit() {
    console.log(charge);
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerForm}>
            <>
              <InputGray
                label="CPF ou CNPJ"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={11}
              />
              <InputGrayLarge
                label="Valor a ser cobrado"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                defaultValue="R$ 0,00"
              />
              <InputGray
                label="Data de vencimento"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
              />
              <InputGray
                label="Descrição"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
              />

              <Button style={styles.button} onPress={handleSubmit}>
                Gerar cobrança
              </Button>
            </>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

Charge.navigationOptions = {
  title: 'Cobrança',
};
