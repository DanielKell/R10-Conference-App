import React from 'react';
import { Platform, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import Button from '../../components/Button';

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

                    <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => Linking.openURL(`${speakerData.url}`)}
                    style={styles.button}
                >
                    <Button buttonText="Read more on Wikipedia"/>
                </TouchableOpacity>
            </View>
      </View>
    </ScrollView>
  )
}

export default Speakers;