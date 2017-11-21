import {
  createRouter
} from '@expo/ex-navigation';

import AboutContainer from '../scenes/About';
import ScheduleContainer from '../scenes/Schedule';

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */

export const Router = createRouter(() => ({
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
}));