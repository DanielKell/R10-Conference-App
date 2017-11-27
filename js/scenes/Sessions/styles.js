import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
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
  },
  image: {
    marginRight: 8,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  speaker: {
    flex: 0,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',

  },
  speakerName: {
    fontFamily: fonts.fontMainReg
  },
  buttonStyles: {
    marginTop: 10,
    marginLeft: 50
  }
});