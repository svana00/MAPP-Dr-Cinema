import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  trailer: {
    marginTop: 20,
    width: 320,
    height: 230,
    alignSelf: 'center'
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
  },
  info: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginHorizontal: 20,
  },
});
