import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
  },
  input: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 10,
  },
});
