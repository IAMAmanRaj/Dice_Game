import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import ResponsiveWrapper from "./components/ResponsiveWrapper";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <ResponsiveWrapper>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </ResponsiveWrapper>
  );
}

export default App;
