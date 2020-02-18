import { StyleSheet } from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: heightPercentageToDP('2.30%'),
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 4,
    marginTop: 20,
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
});
