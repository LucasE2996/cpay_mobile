import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
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

const back = require('~/assets/login_rectangle.png');
const logo = require('~/assets/logo.png');

export default function Login({ navigation }) {
  const [registryCode, setRegistryCode] = useState('');
  const [password, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.navigate('Main');
  }, []);

  async function handleSubmit() {
    try {
      setLoading(true);
      const response = await api.get('/login', { registryCode, password });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Encontramos um erro, tente novamente mais tarde!');
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
                <Image style={styles.logoImg} source={logo} />
                <Text style={styles.title}>C-pay</Text>
              </View>
            </View>
            <View style={styles.form}>
              <Input
                label="CPF"
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu CPF"
                maxLength={11}
                value={registryCode}
                onChangeText={setRegistryCode}
              />
              <Input
                label="Senha"
                secureTextEntry
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setEmail}
              />

              <Button
                loading={loading}
                style={styles.button}
                onPress={() => navigation.navigate('Main')}
              >
                Acessar
              </Button>
            </View>

            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.txtLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
