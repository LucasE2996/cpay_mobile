import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import 'intl';
import PropTypes from 'prop-types';

import 'intl/locale-data/jsonp/pt-BR';

import logo from '~/assets/logo.png';
import menu from '~/assets/menu.png';
import ContactCard from '~/components/ContactCard';
import CreateModal from '~/components/Modal';
import PlusButton from '~/components/PlusButton';
import RowCard from '~/components/RowCard';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './styles';

export default function Main({ navigation }) {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState(0);
  const [chargeCustomer, setChargeCustomer] = useState([]);
  const [modal, setModal] = useState(false);
  const [hideEyes, setHideEyes] = useState(false);

  const closePanel = () => {
    setModal(false);
  };

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

  async function chargedCustomers() {
    try {
      const response = await api.get(`/invoices?from=63188678053`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setChargeCustomer(response.data);
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
    chargedCustomers();
  }, []);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>C-Pay</Text>
        </View>
        <TouchableOpacity onPress={() => setHideMenu(!hideMenu)}>
          <Image source={menu} style={styles.menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Saldo disponível</Text>
          <TouchableOpacity
            onPress={() => setHideEyes(!hideEyes)}
            hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
          >
            <FontAwesome
              name={hideEyes ? 'eye' : 'eye-slash'}
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bigCard}>
          <View style={styles.bigCardLeft}>
            {hideEyes && (
              <Text style={styles.bigCardText}>
                {formatter.format(balance)}
              </Text>
            )}
          </View>
          <PlusButton callback={() => setModal(!modal)} />
        </View>
        <CreateModal
          display={modal}
          closeModal={closePanel}
          titleModal="Fazer cashin"
        >
          <Text>Modal</Text>
        </CreateModal>
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
            data={chargeCustomer}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ContactCard data={item.to_customer} />}
          />
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitlePayment}>Contas pendentes</Text>
        {dummyTransactions.map(item => (
          <RowCard data={item} />
        ))}
      </View>
    </ScrollView>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Main.navigationOptions = { headerShown: false };
