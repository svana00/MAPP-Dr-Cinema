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
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  BackgroundImage: {
    height: '50%',
    width: '100%',
    resizeMode: 'repeat',
    flex: 1,
  },
  Background: {
    backgroundColor: '#FFFF',
    marginTop: '80%',
    height: '70%',
    flex: 2,
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
    marginLeft: '8%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  secondaryFacts: {
    marginLeft: '8%',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    marginBottom: '2%',
    marginTop: '5%',
    fontWeight: '500',
  },
  content: {
    flex: 0.5,
    flexDirection: 'column',
    marginLeft: '8%',
  },
  genres: {
    flex: 1,
    marginBottom: '5%',
    marginRight: '10%',
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
  heading2: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: '500',
  },
  info2: {
    flex: 1,
    fontSize: 15,
    margin: 6,
  },
});
