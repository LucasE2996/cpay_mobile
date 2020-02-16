import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 13,
    backgroundColor: colors.input,
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
    color: colors.white,
  },
});
