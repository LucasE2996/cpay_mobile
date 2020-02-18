import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP('3.7%'),
  },
  boxTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.yellow,
    fontSize: heightPercentageToDP('5.8%'),
    fontWeight: 'bold',
    lineHeight: heightPercentageToDP('6%'),
  },
  depositValue: {
    fontSize: heightPercentageToDP('2.35%'),
    color: colors.white,
    marginTop: heightPercentageToDP('3.8%'),
    marginBottom: heightPercentageToDP('1.8%'),
    textAlign: 'center',
  },
  formPayment: {
    color: colors.white,
    fontWeight: '500',
    fontSize: heightPercentageToDP('2.35%'),
    lineHeight: heightPercentageToDP('2.5%'),
  },
  boxCart: {
    backgroundColor: colors.backgroundLight,
    borderRadius: heightPercentageToDP('2.1%'),
    padding: heightPercentageToDP('2.1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxInfoCart: {
    flexDirection: 'column',
  },
  txtInfoCart: {
    color: colors.white,
    fontWeight: '500',
    fontSize: heightPercentageToDP('2.35%'),
    lineHeight: heightPercentageToDP('2.5%'),
    marginBottom: heightPercentageToDP('0.4%'),
  },
  check: {
    marginLeft: widthPercentageToDP('7%'),
  },
  button: {
    backgroundColor: colors.yellow,
    borderRadius: heightPercentageToDP('2.1%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: heightPercentageToDP('2.1%'),
    marginVertical: widthPercentageToDP('6%'),
  },
});
