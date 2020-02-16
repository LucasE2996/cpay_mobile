import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';

import styles from './styles';

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
            <>
              <Input
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu nome"
                maxLength={11}
                value={register.name}
                onChangeText={text => {
                  setRegister({ ...register, name: text });
                }}
              />
              <Input
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu CPF"
                maxLength={11}
                value={register.registryCode}
                onChangeText={text => {
                  setRegister({ ...register, registryCode: text });
                }}
              />
              <Input
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu email"
                value={register.email}
                onChangeText={text => {
                  setRegister({ ...register, email: text });
                }}
              />
              <Input
                keyboardType="phone-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu telefone"
                value={register.phone}
                onChangeText={text => {
                  setRegister({ ...register, phone: text });
                }}
              />

              <Button
                loading={loading}
                style={styles.button}
                onPress={handleSubmit}
              >
                Criar conta
              </Button>

              <TouchableOpacity
                style={styles.link}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.txtLink}>Já tenho conta</Text>
              </TouchableOpacity>
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
