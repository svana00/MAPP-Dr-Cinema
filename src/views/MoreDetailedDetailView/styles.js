import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailImage: {
    width: 200,
    height: 290,
    overflow: 'hidden',
    borderWidth: 1,
  },
  rating: {
    alignItems: 'center',
    flex: 1,
  },
  limit: {
  },
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
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    fontSize: 32,
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  secondaryFacts: {
    marginLeft: '10%',
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '2%',
    marginTop: '5%',
  },
  content: {
    flex: 0.5,
    flexDirection: 'column',
    marginLeft: '10%',
  },
  genres: {
    flex: 1,
    marginBottom: '5%',
  },
  facts: {
    flex: 1,
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
  description: {
    fontSize: 16,
    marginRight: '10%',
  },
  info: {
    fontSize: 15,
    marginRight: '10%',
  },
});
