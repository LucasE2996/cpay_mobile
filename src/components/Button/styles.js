import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
  },
  txtButton: {
    fontSize: 14,
    color: colors.black_btn,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontWeight: 'bold',
  },
});
