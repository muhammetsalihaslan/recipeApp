import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'col',
    margin: 5,
    flex: 1,
  },
  image: {
    minWidth: deviceSize.width / 7,
    minHeight: 150,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'right',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
