import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
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
