import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    padding: 6
  },
  locationContainer: {
    width: '100%',
    padding: 12,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainer: {
    width: '100%',
    padding: 12
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    fontFamily: fonts.fontMainReg,
    fontWeight: 'bold'
  },
  description: {
    marginBottom: 10,
    fontFamily: fonts.fontMainLight,
    fontSize: 18,
    lineHeight: 22
  },
  time: {
    marginTop: 5,
    marginBottom: 10,
    color: colors.red,
    fontFamily: fonts.fontMainReg,
  },
  subheading: {
    marginTop: 10,
    color: colors.mediumGrey,
    fontFamily: fonts.fontMainReg,
  }
});