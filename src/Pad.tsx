import React, { useEffect } from "react";

interface PadProps {
  id: string;
  codeKey: string | number;
  url: string;
  keyButton: string;
  playSound: (keyButton: string) => void;
}

const Pad = (props: PadProps) => {
  const { url, id, keyButton, codeKey, playSound } = props;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (codeKey === e.keyCode) {
      playSound(keyButton);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button id={id} className="drum-pad" onClick={() => playSound(keyButton)}>
      <audio id={keyButton} className="clip" src={url} />
      {keyButton}
    </button>
  );
};

export default Pad;
