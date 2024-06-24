import { useState } from "react";
import { PADS_INFO } from "./utils/constants";
import Pad from "./Pad";
import "./App.css";

function App() {
  const [selectedKey, setSelectedKey] = useState("");

  const playSound = (keyButton: string) => {
    setSelectedKey(keyButton);
    const audio = document.getElementById(keyButton) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine">
      <h1>DRUM MACHINE</h1>
      <div id="display">
        {PADS_INFO.map(pad => (
          <Pad
            id={pad.id}
            keyButton={pad.keyButton}
            url={pad.url}
            key={pad.keyButton}
            codeKey={pad.codeKey}
            playSound={playSound}
          />
        ))}
        <div>
          <p>Key selected: {selectedKey}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
