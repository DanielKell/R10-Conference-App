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

const Faves = ({faveSession, currentNavigatorUID}) => {
  return(
    <Schedule data={formatSessionData(faveSession)} currentNavigatorUID={currentNavigatorUID}/>
  )
}

export default Faves;