import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'col',
    margin: 5,
  },
  image: {
    width: deviceSize.width,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: deviceSize.width,
    textAlign: 'right',
  },
});
