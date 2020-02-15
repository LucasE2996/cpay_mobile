import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';

import styles from './styles';

export default function Login() {
  const [registryCode, setRegistryCode] = useState('');
  const [password, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
            <>
              <Input
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu CPF"
                maxLength={11}
                value={registryCode}
                onChangeText={setRegistryCode}
              />
              <Input
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
                onPress={handleSubmit}
              >
                Acessar
              </Button>
            </>

            <TouchableOpacity style={styles.link} onPress={() => {}}>
              <Text style={styles.txtLink}>Criar conta gratuita</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
