import React from 'react';
import Deck from './components/Deck';
import HeroSlide from './slides/HeroSlide';
import ProblemSlide from './slides/ProblemSlide';
import ConceptSlide from './slides/ConceptSlide';
import MindsetSlide from './slides/MindsetSlide';
import ToolsSlide from './slides/ToolsSlide';
import DemoSlide from './slides/DemoSlide';
import ClosingSlide from './slides/ClosingSlide';

const slides = [
  <HeroSlide />,
  <ProblemSlide />,
  <ConceptSlide />,
  <MindsetSlide />,
  <ToolsSlide />,
  <DemoSlide />,
  <ClosingSlide />
];

function App() {
  return (
    <Deck slides={slides} />
  );
}

export default App;
