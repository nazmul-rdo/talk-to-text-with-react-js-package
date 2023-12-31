import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <div className="container">
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button className="button" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="button" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="button" onClick={resetTranscript}>Reset</button>
        <p className="transcript">{transcript}</p>
      </div>
    </div>
  );
}

export default App;