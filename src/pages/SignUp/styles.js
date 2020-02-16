import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerForm: {
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  button: {
    marginTop: 15,
    backgroundColor: colors.yellow,
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
  logo: {
    alignItems: 'center',
    marginBottom: 52,
  },
  title: {
    fontSize: 40,
    lineHeight: 47,
    fontWeight: 'bold',
    color: colors.yellow,
    marginTop: 54,
  },
  buttonCancelled: {
    backgroundColor: colors.gray,
    marginTop: 8,
  },
});
