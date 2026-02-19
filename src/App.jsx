import React from 'react';
import Deck from './components/Deck';
import HeroSlide from './slides/HeroSlide';
import ProblemSlide from './slides/ProblemSlide';
import ConceptSlide from './slides/ConceptSlide';
import VibeDefinitionSlide from './slides/VibeDefinitionSlide';
import MindsetSlide from './slides/MindsetSlide';
import ToolsSlide from './slides/ToolsSlide';
import SpotifyCaseSlide from './slides/SpotifyCaseSlide';
import AgentTrendSlide from './slides/AgentTrendSlide';
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
  <ConceptSlide />,
  <VibeDefinitionSlide />,
  <MindsetSlide />,
  <ToolsSlide />,
  <SpotifyCaseSlide />,
  <AgentTrendSlide />,
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
