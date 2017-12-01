import { StyleSheet } from "react-native";

import { colors, fonts } from "../../config/styles";

export const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: colors.lightGrey,
    padding: 6,
    paddingLeft: 12,
    fontSize: 12,
    fontFamily: fonts.fontMainReg
  },
  borders: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGrey
  },
  itemTitle: {
    margin: 10,
    fontFamily: fonts.fontMainReg
  },
  itemLocation: {
    color: colors.mediumGrey,
    marginBottom: 12,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: fonts.fontMainReg
  },
  locationAndHeart: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  heart: {
    marginRight: 20
  }
});
