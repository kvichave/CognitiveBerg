"use client";
import { useState, useEffect } from 'react';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      setText(transcript);
    };

    if (listening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [listening]);

  return (
    <div>
      <button onClick={() => setListening(!listening)}>
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>{text}</p>
    </div>
  );
};

export default SpeechToText;