import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
  speakerContainer: {
    padding: 15,
    backgroundColor: 'black'
  },
  titleContainer: {
    marginTop: 15,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    width: '85%',
    fontFamily: fonts.fontMainReg,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  contentContainer: {
   padding: 12
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  heading: {
    fontSize: 22,
    fontFamily: fonts.fontMainReg,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  content: {
    fontFamily: fonts.fontMainLight,
    fontSize: 14
  }
});