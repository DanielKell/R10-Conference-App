import React from "react";
import {
  Platform,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { goToSpeaker } from "../../navigation/navigationHelpers";
import { styles } from "./styles";
import CustomButton from "../../components/CustomButton";
import { createFave, deleteFave } from "../../config/models";
import { colors } from "../../config/styles";

const Sessions = ({ sessionData, speakerData, faves }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.subheading}>{sessionData.location}</Text>
        {faves.indexOf(sessionData.session_id) > -1 ? <Icon style={styles.faveHeart} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.red} /> : false}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{sessionData.title}</Text>
        <Text style={styles.time}>
          {moment.unix(sessionData.start_time).format("LT")}
        </Text>
        <Text style={styles.description}>{sessionData.description}</Text>
        {speakerData && <Text style={styles.subheading}>Presented By:</Text>}
      </View>

      {speakerData && (
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
          <TouchableOpacity
            onPress={
              faves.indexOf(sessionData.session_id) >= 0 ? (
                () => deleteFave(sessionData.session_id)
              ) : (
                () => createFave(sessionData.session_id)
              )
            }
          >
            <View style={styles.buttonStyles}>
              <CustomButton
                buttonText={
                  faves.indexOf(sessionData.session_id) >= 0 ? (
                    "Remove from Faves"
                  ) : (
                    "Add to Faves"
                  )
                }
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

Sessions.propTypes = {
  sessionData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string,
    session_id: PropTypes.string,
  }),
  speakerData: PropTypes.shape({
      bio: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      speaker_id: PropTypes.string,
      session: PropTypes.string,
      url: PropTypes.string
  }),
  faves: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default Sessions;
