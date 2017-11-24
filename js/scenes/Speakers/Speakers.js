import React from 'react';
import { Platform, Text, View, ScrollView, Image } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Speakers = ({ speakerData }) => {
  return (
 <ScrollView contentContainerStyle={styles.speakerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: speakerData.image}}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{speakerData.name}</Text>
          <Text style={styles.content}>{speakerData.bio}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Speakers;