import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    marginTop: '80%',
    backgroundColor: '#FFFF',
    height: '70%',
    borderRadius: 10,
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading2: {
    fontSize: 22,
    marginLeft: '8%',
    marginTop: 24,
    marginBottom: 1,
    fontWeight: '500',
  },
  title: {
    flex: 4,
    fontSize: 30,
    alignItems: 'center',
    marginLeft: '8%',
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
    flex: 1,
    fontSize: 15,
    marginRight: 10,
  },
  facts: {
    flex: 1,
    fontSize: 15,
    marginLeft: '8%',
    margin: 3,
  },
  trailer: {
    flex: 3,
    height: '50%',
    width: '100%',
    marginRight: 80,
    alignItems: 'flex-start',
    marginBottom: 30,
    marginLeft: '8%',
    flexWrap: 'wrap'
  },
  noTrailer: {
    flex: 3,
    height: '50%',
    width: '100%',
    marginRight: 80,
    alignItems: 'flex-start',
    marginBottom: 150,
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: 1,
  },
});
