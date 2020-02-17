import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
    borderColor: colors.border,
    borderWidth: 2,
    width: 110,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 15,
  },
  name: {
    marginTop: 15,
    fontSize: 12,
    color: colors.purpleDark,
    textAlign: 'center',
  },
});
