import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(''); // Initialize text state

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textElement = document.getElementById("myBox");
    textElement.select();
    document.execCommand("copy");
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ');
    setText(newText.trim());
  };

  return (
    <div className={`text-form ${props.isDarkMode ? 'dark' : 'light'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>Words: {text.trim().split(/\s+/).filter(Boolean).length} | Characters: {text.length}</p>
      </div>
    </div>
  );
}
