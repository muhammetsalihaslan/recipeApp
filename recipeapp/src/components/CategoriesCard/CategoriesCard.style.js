import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  image: {
    width: 90,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  text: {
    color: 'black',
    fontSize: 25,
    marginStart: 15,
  },
});
