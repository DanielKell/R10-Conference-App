import { StyleSheet } from "react-native";
import { fonts } from "../../config/styles";

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 220,
    borderRadius: 50,
    overflow: 'hidden'
  },
  buttonsText: {
    fontFamily: fonts.fontMainReg,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: 'transparent',
    marginTop: 15,
    color: 'white'
  },
});

export default styles;
