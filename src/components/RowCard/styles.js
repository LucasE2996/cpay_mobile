import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: heightPercentageToDP('2.1%'),
    backgroundColor: colors.backgroundLight,
    borderColor: colors.border,
    borderWidth: widthPercentageToDP('0.6%'),
    height: heightPercentageToDP('12%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('2.1%'),
    padding: heightPercentageToDP('2.1%'),
  },
  rightContent: {
    flex: 1,
  },
  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: widthPercentageToDP('2.8%'),
  },
  name: {
    fontSize: heightPercentageToDP('1.8%'),
    color: colors.gray,
    marginBottom: heightPercentageToDP('1.3%'),
  },
  money: {
    color: colors.gray,
    fontSize: heightPercentageToDP('1.8%'),
    fontWeight: 'bold',
  },
  date: {
    fontSize: heightPercentageToDP('1.8%'),
    color: colors.purpleDark,
    textTransform: 'uppercase',
    marginBottom: widthPercentageToDP('2.8%'),
    alignSelf: 'flex-end',
  },
  payLink: {
    color: colors.yellow,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
