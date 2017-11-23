import React from 'react';
import { Platform, Text, View } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({ sessionData }) => {
  return (
    <View>
      <View>
        <Text>{sessionData.location}</Text>
        {Platform.OS === 'ios' &&
            <Icon name="ios-heart" size={30} color='red' />
        }
        {Platform.OS === 'android' &&
            <Icon name="md-heart" size={30} color='red' />
        }
      </View>
      <View>
        <Text>{sessionData.title}</Text>
        <Text>{moment.unix(sessionData.start_time).format('LT')}</Text>
        <Text>{sessionData.description}</Text>
      </View>
    </View>
  )
}


export default Session;