import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";
import CustomButton from "../../components/CustomButton";

const Speakers = ({ speakerData }) => {
  return (
    <ScrollView contentContainerStyle={styles.speakerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: speakerData.image }} />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{speakerData.name}</Text>
          <Text style={styles.content}>{speakerData.bio}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${speakerData.url}`)}
            style={styles.button}
          >
            <CustomButton buttonText="Read more on Wikipedia" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

Speakers.propTypes = {
  speakerData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.url
  })
}

export default Speakers;
