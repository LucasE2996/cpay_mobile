import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderColor: colors.backgroundLight,
    borderWidth: widthPercentageToDP('0.3%'),
    borderRadius: heightPercentageToDP('2%'),
    marginBottom: heightPercentageToDP('6%'),
    backgroundColor: colors.backgroundLight,
  },
  input: {
    fontSize: heightPercentageToDP('2.30%'),
    color: colors.white,
    marginLeft: widthPercentageToDP('2.8%'),
    height: heightPercentageToDP('6%'),
  },
  label: {
    fontSize: heightPercentageToDP('2.30%'),
    marginBottom: 0,
    color: colors.purpleDark,
    fontWeight: 'bold',
    lineHeight: heightPercentageToDP('2.35%'),
  },
});
