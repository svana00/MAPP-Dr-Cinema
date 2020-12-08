import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  smallContainer: {
    marginTop: 10,
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  paragraph: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingRight: 40,
    paddingLeft: 40,
  },
  logo: {
    width: 260,
    height: 260,
  },
  button: {
    flex: 1,
    width: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  whiteBackgroundThing: {
    position: 'absolute',
    width: 360.34,
    height: 400,
    left: 250,
    top: 85,
    backgroundColor: '#FFFFFF',
    transform: [
      {
        rotate: '-43deg',
      },
    ],
  },
});
