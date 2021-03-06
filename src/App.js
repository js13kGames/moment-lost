import { connect } from "./store";

import TitleScreen from "./TitleScreen";
import IntroScreen from "./IntroScreen";
import FindScreen from "./FindScreen";
import PlayOverlay from "./PlayOverlay";
import ScoreScreen from "./ScoreScreen";
import LevelSelect from "./LevelSelect";
import NoPassage from "./NoPassage";

const scenes = [
  TitleScreen,
  IntroScreen,
  FindScreen,
  PlayOverlay,
  ScoreScreen,
  LevelSelect,
  NoPassage,
];

function App({current_scene}) {
  const component = scenes[current_scene];
  return component ? component() : "";
}

export default connect(App);
