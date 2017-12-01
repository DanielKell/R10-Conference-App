import React from 'react';
import PropTypes from 'prop-types';

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

Faves.propTypes = {
  faves: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default Faves;