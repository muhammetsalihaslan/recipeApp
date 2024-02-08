import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'col',
  },
  image: {
    width: deviceSize.width,
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
