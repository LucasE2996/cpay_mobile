import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.purpleDark,
    marginBottom: 5,
  },
  picker: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  pickerType: {
    color: colors.white,
    backgroundColor: colors.backgroundLight,
    width: 200,
    height: 50,
    borderRadius: 10,
  },
  pickerDays: {
    color: colors.white,
    backgroundColor: colors.backgroundLight,
    width: 100,
    height: 50,
    borderRadius: 10,
  },
});
