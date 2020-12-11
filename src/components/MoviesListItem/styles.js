import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailImage: {
    width: 120,
    height: 180,
    overflow: 'hidden',
    borderWidth: 2,
  },
  listItem: {
    marginBottom: 4,
    paddingLeft: 20,
    paddingRight: 5,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  textBox: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    padding: 5,
    fontSize: 18,
  },
  website: {
    fontSize: 14,
    padding: 5,
  },
});
