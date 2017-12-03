import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  SectionList,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import Moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToSession } from "../../navigation/navigationHelpers";

const ScheduleList = ({ sessionData, favesData, route }) => (
  <SectionList
    style={styles.container}
    renderItem={({ item }) => {
      return (
        <TouchableOpacity onPress={() => goToSession(route, item)}>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.locationInfo}>
              <Text style={styles.itemLocation}>{item.location}</Text>
              {favesData.find(x => item.session_id === x.id) ? <Icon style={styles.faveHeart} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.red} /> : false}
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
    sections={sessionData}
    keyExtractor={item => item.title}
    ItemSeparatorComponent={() => <View style={styles.border} />}
  />
);

// ScheduleList.propTypes = {
//     sessionData: PropTypes.arrayOf(PropTypes.shape({
//       title: PropTypes.number,
//       object: PropTypes.shape({
//         description: PropTypes.string,
//         location: PropTypes.string,
//         session_id: PropTypes.string,
//         speaker: PropTypes.string,
//         start_time: PropTypes.number,
//         title: PropTypes.string,
//       }),
//     })).isRequired,
//     favesData: PropTypes.arrayOf(PropTypes.shape({
//       faved_on: PropTypes.date,
//       id: PropTypes.string,
//     })).isRequired,
//     route: PropTypes.string.isRequired,
// }

export default ScheduleList;
