import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';
import menu from '~/assets/menu.png';
import ContactCard from '~/components/ContactCard';
import PlusButton from '~/components/PlusButton';
import RowCard from '~/components/RowCard';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './styles';

export default function Main({ navigation }) {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);

  async function getBalance() {
    try {
      const response = await api.get('/balance', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBalance(response.data.balance);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getToken() {
      const asyncToken = await AsyncStorage.getItem('@cpay:user_token');

      setToken(asyncToken);
      await getBalance();
    }

    getToken();
  }, []);

  const dummyContacts = [
    {
      name: 'Lucas Rosa',
      photoUrl: '',
    },
    {
      name: 'Maisa Maximo',
      photoUrl: '',
    },
    {
      name: 'Patric',
      photoUrl: '',
    },
    {
      name: 'Maurício Júnior',
      photoUrl: '',
    },
    {
      name: 'Claudemiro Freitas',
      photoUrl: '',
    },
  ];

  const dummyTransactions = [
    {
      name: 'Lucas Rosa',
      moneyValue: 89.0,
      date: '2020-02-15T03:33:27.478Z',
      photoUrl: '',
    },
    {
      name: 'Lucas Rosa',
      moneyValue: 89.12,
      date: '2020-02-15T03:31:27.478Z',
      photoUrl: '',
    },
    {
      name: 'Lucas Rosa',
      moneyValue: 89.01,
      date: '2020-02-15T03:32:27.478Z',
      photoUrl: '',
    },
    {
      name: 'Lucas Rosa',
      moneyValue: 85.02,
      date: '2020-02-15T03:39:27.478Z',
      photoUrl: '',
    },
    {
      name: 'Lucas Rosa',
      moneyValue: 89.0,
      date: '2020-02-15T03:38:27.478Z',
      photoUrl: '',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>C-Pay</Text>
        </View>
        <TouchableOpacity onPress={() => console.warn('menu pressed.')}>
          <Image source={menu} style={styles.menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Saldo disponível</Text>
          <FontAwesome name="eye" size={20} color={colors.gray} />
        </View>
        <View style={styles.bigCard}>
          <View style={styles.bigCardLeft}>
            <Text style={styles.bigCardText}>{`R$ ${balance}`}</Text>
          </View>
          <PlusButton callback={() => console.warn('button plus clicked')} />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Enviar cobrança</Text>
        </View>
        <View style={styles.rowContent}>
          <PlusButton callback={() => navigation.navigate('Charge')} />
          <FlatList
            style={{ marginLeft: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            data={dummyContacts}
            keyExtractor={item => String(item.name)}
            renderItem={({ item }) => <ContactCard data={item} />}
          />
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Contas pendentes</Text>
        <FlatList
          style={{ marginTop: 15, height: 100 }}
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
          data={dummyTransactions}
          keyExtractor={item => String(item.date)}
          renderItem={({ item }) => <RowCard data={item} />}
        />
      </View>
    </View>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Main.navigationOptions = { headerShown: false };
