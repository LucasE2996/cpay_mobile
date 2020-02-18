import { StyleSheet } from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    width: widthPercentageToDP('13%'),
    height: heightPercentageToDP('7.5'),
    backgroundColor: colors.yellow,
    borderRadius: heightPercentageToDP('3.8'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.background,
    fontWeight: '100',
    fontSize: heightPercentageToDP('4.1%'),
  },
});
