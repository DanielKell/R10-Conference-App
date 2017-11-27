import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
    aboutContainer: {
        padding: '4%'
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    codeOfConductTitle: {
    color: 'purple',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  generalText: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: fonts.fontMainLight,
  },
  logo: {
      height: 100,
  },
  logoContainer: {
    height: 100,
    alignItems: 'center',
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 1,
  },
  footer: {
    marginBottom: 15,
    marginLeft: 15,
    paddingTop: 15,
    borderTopColor: colors.mediumGrey,
    borderTopWidth: 1
    },
  footerText: {
    fontFamily: fonts.fontMainLight,
    fontSize: 14
    }
});