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
  },
  name: {
    marginTop: 20,
    fontSize: 12,
    color: colors.purpleDark,
  },
});
