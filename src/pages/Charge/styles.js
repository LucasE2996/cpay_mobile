import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerForm: {
    justifyContent: 'center',
    paddingHorizontal: 32,
    marginTop: 45,
  },
  button: {
    backgroundColor: colors.yellow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 30,
  },
  label: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
