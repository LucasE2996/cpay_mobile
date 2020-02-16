import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerForm: {
    justifyContent: 'center',
    paddingHorizontal: 41,
  },
  form: { marginTop: 40 },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.white,
    marginTop: 19,
  },
  button: {
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
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
  },
  logo: {
    alignItems: 'center',
  },
  logoImg: {
    width: 126,
    height: 126,
    marginTop: 50,
  },
});
