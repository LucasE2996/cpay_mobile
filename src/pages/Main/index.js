import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import logo from '~/assets/logo.png';
import menu from '~/assets/menu.png';
import ContactCard from '~/components/ContactCard';
import PlusButton from '~/components/PlusButton';
import RowCard from '~/components/RowCard';

import styles from './styles';

export default function Main() {
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
          <Text>OLHO</Text>
        </View>
        <View style={styles.bigCard}>
          <View style={styles.bigCardLeft}>
            <Text style={styles.bigCardText}>R$ 20.600,25</Text>
          </View>
          <PlusButton callback={() => console.warn('button plus clicked')} />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Enviar cobrança</Text>
        </View>
        <View style={styles.rowContent}>
          <PlusButton callback={() => console.warn('button plus clicked')} />
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

Main.navigationOptions = { header: null };
