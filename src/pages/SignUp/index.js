import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  View,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';

import styles from './styles';

const back = require('~/assets/register_rectangle.png');

export default function SignUp({ navigation }) {
  const [register, setRegister] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      const response = await api.post('/register', register);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
      enabled
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerForm}>
            <View style={styles.logo}>
              <Image source={back} />
              <View style={{ position: 'absolute' }}>
                <Text style={styles.title}>Cadastrar</Text>
              </View>
            </View>
            <>
              <Input
                label="Nome"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Insira seu nome completo"
                maxLength={11}
                value={register.name}
                onChangeText={text => {
                  setRegister({ ...register, name: text });
                }}
              />
              <Input
                label="CPF/CNPJ"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Insira seu CPF"
                maxLength={11}
                value={register.registryCode}
                onChangeText={text => {
                  setRegister({ ...register, registryCode: text });
                }}
              />
              <Input
                label="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Insira seu e-mail"
                value={register.email}
                onChangeText={text => {
                  setRegister({ ...register, email: text });
                }}
              />
              <Input
                label="Senha"
                secureTextEntry
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Insira sua senha"
                value={register.password}
                onChangeText={text => {
                  setRegister({ ...register, password: text });
                }}
              />

              <Button
                loading={loading}
                style={styles.button}
                onPress={handleSubmit}
              >
                Criar conta
              </Button>
              <Button
                loading={loading}
                style={[styles.button, styles.buttonCancelled]}
                onPress={() => navigation.navigate('Login')}
              >
                Cancelar
              </Button>
            </>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
