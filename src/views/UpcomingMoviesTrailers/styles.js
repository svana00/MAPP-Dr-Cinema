import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  BackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  Background: {
    backgroundColor: '#FFFF',
    marginTop: 200,
    height: 600,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  trailer: {
    justifyContent: 'center',
    height: 50,
    width: 400,
    marginRight: 80,
  }
});
