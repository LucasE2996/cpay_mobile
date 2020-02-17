import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderColor: colors.backgroundLight,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 42,
    backgroundColor: colors.backgroundLight,
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    color: colors.white,
    marginLeft: 10,
    height: 90,
    padding: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 0,
    color: colors.purpleDark,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});
