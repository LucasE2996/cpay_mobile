import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: heightPercentageToDP('2.1%'),
    backgroundColor: colors.backgroundLight,
    borderColor: colors.border,
    borderWidth: widthPercentageToDP('1%'),
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('20.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthPercentageToDP('2.8%'),
    padding: widthPercentageToDP('3.5%'),
  },
  name: {
    marginTop: heightPercentageToDP('2.37%'),
    fontSize: heightPercentageToDP('1.8%'),
    color: colors.purpleDark,
    textAlign: 'center',
  },
});
