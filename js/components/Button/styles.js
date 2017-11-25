import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: fonts.fontMainReg,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;