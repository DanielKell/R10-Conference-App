import React from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import PropTypes from 'prop-types';

const BackgroundGradient = ({ colors, children }) => {
  return (    
    <LinearGradient
      colors={colors}
      style={styles.gradient}
      end={{ x: 1.0, y: 0.1 }}
      start={{ x: 0.1, y: 1.0 }}
    >
     {children}
    </LinearGradient>
  );
};

BackgroundGradient.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default BackgroundGradient;
