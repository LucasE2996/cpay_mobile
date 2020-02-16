import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: colors.yellow,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
