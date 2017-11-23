import React from 'react';
import { Platform, Text, View, ScrollView } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Speakers = ({ speakerData }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.locationContainer}>
            <Text>Speaker Data</Text>
        </View>
    </ScrollView>
  )
}

export default Speakers;