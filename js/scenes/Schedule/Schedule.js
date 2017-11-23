import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Platform, Text, SectionList, View, ListItem, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { goToSession } from '../../navigation/navigationHelpers';

const Schedule = ({ data, currentNavigatorUID }) => (
    <SectionList
      renderItem={({item}) => { 
        return (
          <TouchableOpacity onPress={() => goToSession(currentNavigatorUID, item)}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              
              {Platform.OS === 'ios' &&
                <Icon name="ios-heart" size={30} color='red' />
              }
              {Platform.OS === 'android' &&
                  <Icon name="md-heart" size={30} color='red' />
              }

              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      }
      renderSectionHeader={(item) => {
        return <Text style={styles.sectionTitle}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      }}
      sections={data}
      keyExtractor={item => item.session_id}
      ItemSeparatorComponent={() => <View style={styles.borders} />}
    />
);

Schedule.propTypes = {

}

export default Schedule;