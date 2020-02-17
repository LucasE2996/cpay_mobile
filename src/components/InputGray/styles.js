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
    fontSize: 14,
    color: colors.black,
    marginLeft: 10,
    height: 39,
  },
  label: {
    fontSize: 14,
    marginBottom: 0,
    color: colors.purpleDark,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});
