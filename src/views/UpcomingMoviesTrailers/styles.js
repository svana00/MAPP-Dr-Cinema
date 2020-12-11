import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  BackgroundImage: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },
  Background: {
    marginTop: '80%',
    backgroundColor: '#FFFF',
    height: '70%',
    borderRadius: 18,
    flex: 1,
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 4,
    fontSize: 30,
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: 15,
    marginBottom: 5,
  },
  heart: {
    flex: 1,
  },
  content: {
    flex: 0.5,
    flexDirection: 'column',
  },
  genres: {
    marginLeft: '10%',
    flex: 1,
  },
  facts: {
    flex: 1,
    marginLeft: '10%',
  },
  trailer: {
    flex: 3,
    height: '50%',
    width: '100%',
    marginRight: 80,
    alignItems: 'center',
    marginBottom: 20,
  },
  ImageContainer: {
    flex: 1,
  },
});
