import "./App.css";
import { PADS_INFO } from "./utils/constants";

interface PadProps {
  id: string;
  codeKey: string | number;
  url: string;
  keyButton: string;
}

const onHandleClick = (url: string) => {
  new Audio(url).play();
};

const onPressClick = (e, codeKey, url) => {
  if (e.key === codeKey) {
    new Audio(url).play();
  }
};

const Pad = ({ url, id, codeKey, keyButton }: PadProps) => {
  return (
    <div id={id}>
      <button onClick={() => onHandleClick(url)}>
        {keyButton}
        <audio id={keyButton} src={url} />
      </button>
    </div>
  );
};

function App() {
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
