import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import {
  Platform,
  Text,
  SectionList,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import { goToSession } from "../../navigation/navigationHelpers";

const Schedule = ({ data, currentNavigatorUID, faves }) => (
  <SectionList
    renderItem={({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => goToSession(currentNavigatorUID, item)}
        >
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>

            <View style={styles.locationAndHeart}>
              <Text style={styles.itemLocation}>{item.location}</Text>

              {faves.indexOf(item.session_id) > -1 &&
              Platform.OS === "ios" && (
                <Icon
                  style={styles.heart}
                  name="ios-heart"
                  size={20}
                  color="red"
                />
              )}
              {faves.indexOf(item.session_id) > -1 &&
              Platform.OS === "android" && (
                <Icon
                  style={styles.heart}
                  name="md-heart"
                  size={20}
                  color="red"
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    }}
    renderSectionHeader={item => {
      return (
        <Text style={styles.sectionTitle}>
          {Moment.unix(item.section.title).format("h:mm A")}
        </Text>
      );
    }}
    sections={data}
    keyExtractor={item => item.session_id}
    ItemSeparatorComponent={() => <View style={styles.borders} />}
  />
);

Schedule.propTypes = {};

export default Schedule;
