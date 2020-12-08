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
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textBox: {
    marginLeft: 15,
  },
  title: {
    padding: 5,
    fontSize: 18,
  },
  website: {
    fontSize: 13,
    padding: 5,
  },
  subTitle: {
    fontSize: 15,
    width: 200,
    padding: 10,
    paddingHorizontal: 0,
  },
});
