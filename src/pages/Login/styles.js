import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  containerForm: {
    justifyContent: 'center',
    padding: 15,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  txtLink: {
    color: colors.white,
    fontSize: 16,
  },
  errors: {
    color: colors.red,
    marginBottom: 3,
  },
});
