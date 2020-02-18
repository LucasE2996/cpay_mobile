import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightPercentageToDP('2.1%'),
  },
  label: {
    fontSize: heightPercentageToDP('2.30%'),
    fontWeight: 'bold',
    color: colors.purpleDark,
    marginBottom: heightPercentageToDP('1%'),
  },
  picker: {
    borderRadius: heightPercentageToDP('2.1%'),
    overflow: 'hidden',
  },
  pickerType: {
    color: colors.white,
    backgroundColor: colors.backgroundLight,
    width: widthPercentageToDP('55%'),
    height: heightPercentageToDP('8.1%'),
    borderRadius: heightPercentageToDP('2.1%'),
  },
  pickerDays: {
    color: colors.white,
    backgroundColor: colors.backgroundLight,
    width: widthPercentageToDP('20%'),
    height: heightPercentageToDP('8.1%'),
    borderRadius: heightPercentageToDP('2.1%'),
  },
});
