import React from 'react';
import { Platform, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSpeaker } from '../../navigation/navigationHelpers'
import { styles } from './styles';
import CustomButton from '../../components/CustomButton';
import { createFave, deleteFave } from '../../config/models';

const Sessions = ({sessionData, speakerData, faves}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.locationContainer}>

            <Text style={styles.subheading}>{sessionData.location}</Text>
            {faves.indexOf(sessionData.session_id) > -1 && Platform.OS === 'ios' &&
                <Icon name="ios-heart" size={30} color='red' />
            }
            {faves.indexOf(sessionData.session_id) > -1 && Platform.OS === 'android' &&
                <Icon name="md-heart" size={30} color='red' />
            }
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{sessionData.title}</Text>
            <Text style={styles.time}>{moment.unix(sessionData.start_time).format('LT')}</Text>
            <Text style={styles.description}>{sessionData.description}</Text>
            {speakerData && <Text style={styles.subheading}>Presented By:</Text>}
        </View>
        
        {speakerData && 
        <View>
        <View>    
        <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
            <View style={styles.speaker}>
                <Image
                    style={styles.image}
                    source={{ uri: speakerData.image }}
                />
                <Text style={styles.speakerName}> {speakerData.name} </Text>
            </View>
        </TouchableOpacity>
        </View>
            <TouchableOpacity onPress={faves.indexOf(sessionData.session_id) >=0 ? () => deleteFave(sessionData.session_id): () => createFave(sessionData.session_id)}>
                <View style={styles.buttonStyles}>
                <CustomButton 
                    buttonText={faves.indexOf(sessionData.session_id) >=0 ? "Remove from Faves" : "Add to Faves"}
                />
                </View>
            </TouchableOpacity>
      </View>
        }
    </ScrollView>
  )
}

export default Sessions;