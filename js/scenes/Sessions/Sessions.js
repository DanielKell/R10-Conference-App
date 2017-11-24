import React from 'react';
import { Platform, Text, View, ScrollView, Image } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Session = ({ sessionData, speakerData }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.locationContainer}>

            <Text style={styles.subheading}>{sessionData.location}</Text>
            {Platform.OS === 'ios' &&
                <Icon name="ios-heart" size={30} color='red' />
            }
            {Platform.OS === 'android' &&
                <Icon name="md-heart" size={30} color='red' />
            }
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{sessionData.title}</Text>
            <Text style={styles.time}>{moment.unix(sessionData.start_time).format('LT')}</Text>
            <Text style={styles.description}>{sessionData.description}</Text>
            <Text style={styles.subheading}>Presented By:</Text>
        </View>
        <View>
            <Text> {speakerData.name} </Text>
            <Image
              style={styles.image}
              source={{ uri: speakerData.image }}
            />
        </View>

    </ScrollView>
  )
}

export default Session;