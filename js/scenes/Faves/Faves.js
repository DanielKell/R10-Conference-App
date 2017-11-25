import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import { Sessions } from '../Sessions';
import { formatSessionData } from '../../lib/dataHelpers';

const Faves = ({faveSession}) => {
  return(
    <Sessions sessionData={formatSessionData(faveSession)} currentNavigatorUID={'faves'}/>
  )
}

export default Faves;