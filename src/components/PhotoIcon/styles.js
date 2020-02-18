import { StyleSheet } from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    width: widthPercentageToDP('12%'),
    height: heightPercentageToDP('7%'),
    borderRadius: heightPercentageToDP('3.8%'),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
