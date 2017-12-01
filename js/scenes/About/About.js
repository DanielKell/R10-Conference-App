import React from "react";
import PropTypes from "prop-types";

import { styles } from "./styles";
import { Image, ScrollView, Text, View } from "react-native";

import ConductItem from "../../components/ConductItem";

const About = ({ data }) => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode={"contain"}
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>

        <Text style={styles.generalText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={[styles.aboutTitle, styles.generalText]}>
          Date & Venue
        </Text>
        <Text style={styles.generalText}>
          The R10 conference will take place on Tuesday, June 27, 2018 in
          Vancouver, BC.
        </Text>
        <Text style={[styles.aboutTitle, styles.generalText]}>
          Code of Conduct
        </Text>

        {data.map(item => {
          return <ConductItem itemData={item} key={item.title} />;
        })}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© RED Academy 2017</Text>
      </View>
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
};

export default About;
