import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import Input from '~/components/Input';

import styles from './styles';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  useEffect(() => {
    navigation.navigate('Main');
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerForm}>
            <Input
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              secureTextEntry
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => {}}>
              <Text>Acessar</Text>
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
