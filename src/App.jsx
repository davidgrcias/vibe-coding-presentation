import React from 'react';
import Deck from './components/Deck';
import HeroSlide from './slides/HeroSlide';
import ProblemSlide from './slides/ProblemSlide';
import PersonalStorySlide from './slides/PersonalStorySlide';
import VibeExplainerSlide from './slides/VibeExplainerSlide';
import VibeDefinitionSlide from './slides/VibeDefinitionSlide';
import MindsetSlide from './slides/MindsetSlide';
import ToolsSlide from './slides/ToolsSlide';
import SpotifyCaseSlide from './slides/SpotifyCaseSlide';
import AgentTrendSlide from './slides/AgentTrendSlide';
import ITTransformationSlide from './slides/ITTransformationSlide';
import VibeFundamentalsSlide from './slides/VibeFundamentalsSlide';
import AgentSkillsSlide from './slides/AgentSkillsSlide';
import VibeTutorialSlide from './slides/VibeTutorialSlide';
import FutureVibeCodingSlide from './slides/FutureVibeCodingSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import DemoSlide from './slides/DemoSlide';
import ClosingSlide from './slides/ClosingSlide';

const slides = [
  <HeroSlide />,
  <ProblemSlide />,
  <PersonalStorySlide />,
  <VibeExplainerSlide />,
  <VibeDefinitionSlide />,
  <MindsetSlide />,
  <ToolsSlide />,
  <SpotifyCaseSlide />,
  <AgentTrendSlide />,
  <ITTransformationSlide />,
  <VibeFundamentalsSlide />,
  <AgentSkillsSlide />,
  <VibeTutorialSlide />,
  <FutureVibeCodingSlide />,
  <RoadmapSlide />,
  <DemoSlide />,
  <ClosingSlide />
];

function App() {
  return (
    <Deck slides={slides} />
  );
}

export default App;
