import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from '../../config/styles';

import BackgroundGradient from '../BackgroundGradient';

const Button = ({buttonText}) => {
  return (
    <View style={styles.button}>
        <BackgroundGradient colors={[colors.purple, colors.blue]}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </BackgroundGradient>
    </View>
  );
}

Button.propTypes = {

}

export default Button;