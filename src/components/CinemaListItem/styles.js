import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailImage: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
  icon: {
    fontSize: 25,
    marginTop: 25,
    marginBottom: 10,
    color: 'red',
  },
  listItem: {
    marginTop: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textBox: {
    width: 270,
    marginLeft: 8,
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
