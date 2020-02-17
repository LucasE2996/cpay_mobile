import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
    borderColor: colors.border,
    borderWidth: 2,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  rightContent: {
    flex: 1,
  },
  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  name: {
    fontSize: 9,
    color: colors.gray,
    marginBottom: 7,
  },
  money: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 11,
    color: colors.purpleDark,
    textTransform: 'uppercase',
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  payLink: {
    color: colors.yellow,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
