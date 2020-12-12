import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    backgroundColor: '#FFFF',
    marginTop: '80%',
    height: '70%',
    flex: 2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    fontSize: 32,
    alignItems: 'center',
    marginRight: 8,
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
  },
  facts: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    marginRight: '10%',
  },
  heading2: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: '500',
  },
  whiteBox: {
    backgroundColor: '#FFFF',
    height: '100%',
  },
});
