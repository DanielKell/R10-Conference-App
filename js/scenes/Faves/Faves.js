import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import Schedule from '../Schedule/Schedule';
import { formatSessionData } from '../../lib/dataHelpers';

const Faves = ({faveSession, currentNavigatorUID, faves}) => {
  return(
    <Schedule 
      data={formatSessionData(faveSession)} 
      currentNavigatorUID={currentNavigatorUID}
      faves={faves}
    />
  )
}

export default Faves;