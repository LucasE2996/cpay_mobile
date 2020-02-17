import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    paddingVertical: 10,
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
    fontWeight: 'bold',
  },
  bigCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundLight,
    padding: 20,
    borderRadius: 10,
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
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
  },
  menu: {
    width: 30,
    height: 30,
  },
});
