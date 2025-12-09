import { Hero } from "./components/sections/Hero";
import { Objectives } from "./components/sections/Objectives";
import { TechStructure } from "./components/sections/TechStructure";
import { Glossary } from "./components/sections/Glossary";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Objectives />
      <TechStructure />
      <Glossary />
    </div>
  );
}

export default App;
