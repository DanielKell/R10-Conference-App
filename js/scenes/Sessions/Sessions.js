import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

const Session = ({ sessionData }) => {
  return (
    <View>
      <View>
        <Text>{sessionData.location}</Text>
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