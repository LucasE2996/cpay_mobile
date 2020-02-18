import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderRadius: heightPercentageToDP('2.1%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP('5%'),
  },
  txtButton: {
    fontSize: heightPercentageToDP('2.30%'),
    color: colors.black_btn,
    textTransform: 'uppercase',
    lineHeight: heightPercentageToDP('2.5%'),
    fontWeight: 'bold',
  },
});
