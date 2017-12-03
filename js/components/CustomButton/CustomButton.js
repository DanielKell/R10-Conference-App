import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";

import BackgroundGradient from "../BackgroundGradient";

const CustomButton = ({ buttonText }) => {
  return (
    <View style={styles.button}>
      <BackgroundGradient colors={[colors.purple, colors.blue]} >
        <Text style={styles.buttonsText}>{buttonText}</Text>
      </BackgroundGradient>
    </View>
  );
};

CustomButton.propTypes = {};

export default CustomButton;
