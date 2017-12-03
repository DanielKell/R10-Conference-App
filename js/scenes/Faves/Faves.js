import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import Schedule from "../Schedule/Schedule";
import { formatSessionData } from "../../lib/dataHelpers";
import { styles } from "./styles";

const Faves = ({ faveSession, currentNavigatorUID, faves }) => {
  console.log(faveSession)
  return (
    <View>
      {faves.length !== 0 ? (
        <Schedule
          data={formatSessionData(faveSession)}
          currentNavigatorUID={currentNavigatorUID}
          faves={faves}
        />
      ) : (
        <Text style={styles.noFavesText}>
          You currently have no Faves! Add some from the Schedule list.
        </Text>
      )}
    </View>
  );
};

Faves.propTypes = {
  faves: PropTypes.arrayOf(PropTypes.string),
  currentNavigatorUID: PropTypes.string,
  faveSession: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          title: PropTypes.string,
          start_time: PropTypes.number,
          description: PropTypes.string,
          speaker: PropTypes.string
        })
      )
};

export default Faves;
