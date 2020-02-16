import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Text>LOGO</Text>
          <Text style={styles.headerText}>C-Pay</Text>
        </View>
        <Text>MENU</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Account Overview</Text>
        </View>
        <View style={styles.bigCard}>
          <View style={styles.bigCardLeft}>
            <Text style={styles.bigCardText}>20.600,25</Text>
            <Text style={styles.bigCardSubtitle}>Current Balance</Text>
          </View>
          <Text>BUTTON</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>Send Money</Text>
          <Text>BTN</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Transactions</Text>
      </View>
    </View>
  );
}

Main.navigationOptions = { header: null };
