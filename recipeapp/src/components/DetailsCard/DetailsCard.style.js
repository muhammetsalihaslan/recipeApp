import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  image: {
    minWidth: deviceSize.width / 7,
    height: deviceSize.height / 4,
    resizeMode: 'cover',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  text3: {
    color: 'black',
    marginTop: 5,
  },
  hr: {
    minWidth: deviceSize.width / 7,
    height: 1,
    backgroundColor: 'black',
    marginTop: 5,
  },
});
