import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#b2b2b2',
    height: 32,
    marginHorizontal: 25,
    marginVertical: 30,
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    color: colors.white,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  box: {
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  boxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  bigCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    padding: 20,
    borderRadius: 5,
    height: 120,
  },
  bigCardText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  bigCardSubtitle: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '300',
  },
  bigCardLeft: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
