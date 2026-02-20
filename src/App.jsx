import React from 'react';
import Deck from './components/Deck';

// Act 1: HOOK — "Why Should You Care?"
import HeroSlide from './slides/HeroSlide';
import ProblemSlide from './slides/ProblemSlide';
import PersonalStorySlide from './slides/PersonalStorySlide';

// Act 2: DEFINE — "What Is This Thing?"
import KarpathyVibeSlide from './slides/KarpathyVibeSlide';
import VibeDefinitionSlide from './slides/VibeDefinitionSlide';
import VibeExplainerSlide from './slides/VibeExplainerSlide';
import ForbesVibeSlide from './slides/ForbesVibeSlide';
import IdentityCrisisSlide from './slides/IdentityCrisisSlide';
import MindsetSlide from './slides/MindsetSlide';

// Act 3: TOOLS & PROOF — "It's Real and It's Here"
import AgentSkillsSlide from './slides/AgentSkillsSlide';
import BigThreeToolsSlide from './slides/BigThreeToolsSlide';
import AgentTrendSlide from './slides/AgentTrendSlide';
import MicrosoftAgentAdoptionSlide from './slides/MicrosoftAgentAdoptionSlide';
import SpotifyCaseSlide from './slides/SpotifyCaseSlide';
import AnthropicTrendsSlide from './slides/AnthropicTrendsSlide';

// Act 4: ACTION — "How Do YOU Start?"
import ITTransformationSlide from './slides/ITTransformationSlide';
import VibeFundamentalsSlide from './slides/VibeFundamentalsSlide';
import VibeTutorialSlide from './slides/VibeTutorialSlide';
import AddyOsmaniSlide from './slides/AddyOsmaniSlide';
import FutureVibeCodingSlide from './slides/FutureVibeCodingSlide';
import RoadmapSlide from './slides/RoadmapSlide';

// Act 5: CLOSE — "Now Go Do It"
import DemoSlide from './slides/DemoSlide';
import ClosingSlide from './slides/ClosingSlide';

const slides = [
  // Act 1: HOOK
  <HeroSlide />,
  <ProblemSlide />,
  <PersonalStorySlide />,

  // Act 2: DEFINE
  <KarpathyVibeSlide />,
  <VibeDefinitionSlide />,
  <VibeExplainerSlide />,
  <ForbesVibeSlide />,
  <IdentityCrisisSlide />,
  <MindsetSlide />,

  // Act 3: TOOLS & PROOF
  <AgentSkillsSlide />,
  <BigThreeToolsSlide />,
  <AgentTrendSlide />,
  <MicrosoftAgentAdoptionSlide />,
  <SpotifyCaseSlide />,
  <AnthropicTrendsSlide />,

  // Act 4: ACTION
  <ITTransformationSlide />,
  <VibeFundamentalsSlide />,
  <VibeTutorialSlide />,
  <AddyOsmaniSlide />,
  <FutureVibeCodingSlide />,
  <RoadmapSlide />,

  // Act 5: CLOSE
  <DemoSlide />,
  <ClosingSlide />
];

function App() {
  return (
    <Deck slides={slides} />
  );
}

export default App;
