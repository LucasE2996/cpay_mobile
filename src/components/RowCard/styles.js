import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    fontSize: 9,
    color: colors.purpleDark,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});
