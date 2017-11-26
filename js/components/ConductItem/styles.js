import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    flex: 0
  },
  subheading: {
    color: colors.purple, 
    fontFamily: fonts.fontMainReg,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  content: {
    color: colors.mediumGrey,
    fontFamily: fonts.fontMainLight,
    fontSize: 12
  }
});