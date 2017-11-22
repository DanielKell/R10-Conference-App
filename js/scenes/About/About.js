import React from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

const About = ({data}) => {
    
    return(
        <View
            style={styles.aboutContainer}
        >
            <View
            style={styles.logoContainer}
            >
                <Image
                    style={styles.logo}
                    resizeMode={"contain"}
                    source={require('../../assets/images/r10_logo.png')}
                />
            </View>

            <Text
                style={styles.generalText}
            >
                R10 is a conference that focuses on just about any topic related to dev.
            </Text>
            <Text
                style={[styles.aboutTitle, styles.generalText]}
            >
                Date & Venue
            </Text>
            <Text
                style={styles.generalText}
            >
                The R10 conference will take place on Tuesday, June 27, 2018 in Vancouver, BC.
            </Text>
            <Text
                style={[styles.aboutTitle, styles.generalText]}
            >
                Code of Conduct
            </Text>

            <FlatList
                data={data}
                renderItem={({ item }) => 
                <View>
                <Text
                    style={styles.codeOfConductTitle}
                >
                    {item.title}
                </Text>
                <Text>
                    {item.description}
                </Text>           
                </View>}

                keyExtractor={(item) => item.title}
            />
    </View>
    );
}

About.propTypes = {

}

export default About;