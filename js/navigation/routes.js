import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About";
import ScheduleContainer from "../scenes/Schedule";
import Layout from "./NavigationLayout";
import SessionsContainer from "../scenes/Sessions/";
import FavesContainer from "../scenes/Faves";
import SpeakerContainer from "../scenes/Speakers";

export const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  session: () => SessionsContainer,
  faves: () => FavesContainer,
  speaker: () => SpeakerContainer
}));
