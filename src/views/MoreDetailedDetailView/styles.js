import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailImage: {
    width: 200,
    height: 290,
    overflow: 'hidden',
    borderWidth: 1,
  },
  container: {
    padding: 25,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 23,
    textAlign: 'justify',
    marginHorizontal: 15,
  },
  info: {
    marginHorizontal: 15,
    fontSize: 16,
    paddingBottom: 3,
  },
  limit: {
    position: 'absolute',
    marginBottom: 5,
    marginTop: 65,
    marginHorizontal: 15,
  }
});
