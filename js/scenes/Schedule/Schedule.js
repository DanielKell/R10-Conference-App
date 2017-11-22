import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Text, SectionList, View, ListItem} from 'react-native';

import { styles } from './styles';

const Schedule = ({ data }) => (
    <SectionList
      renderItem={({item}) => { 
        return (
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
        )}
      }
      renderSectionHeader={(item) => {
        return <Text style={styles.sectionTitle}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      }}
      sections={data}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={() => <View style={styles.borders} />}
    />
);

Schedule.propTypes = {

}

export default Schedule;