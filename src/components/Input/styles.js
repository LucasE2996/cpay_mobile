import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: widthPercentageToDP('0.3%'),
    borderRadius: heightPercentageToDP('2%'),
    marginBottom: heightPercentageToDP('2%'),
    backgroundColor: colors.input,
  },
  input: {
    fontSize: heightPercentageToDP('2.30%'),
    color: colors.black,
    marginLeft: widthPercentageToDP('2.8%'),
    height: heightPercentageToDP('6%'),
  },
  label: {
    fontSize: heightPercentageToDP('2.30%'),
    marginBottom: 0,
    color: colors.white,
    fontWeight: 'bold',
    lineHeight: heightPercentageToDP('2.35%'),
  },
});
