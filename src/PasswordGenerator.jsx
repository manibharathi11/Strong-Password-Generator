import React, { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumber, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charSet = "";
    if (includeUpperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowerCase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charSet += "0987654321";
    if (includeSymbols) charSet += "@!#$%^&*()_-=+";
    console.log(charSet);
    console.log(charSet[0]);
    let generatedPassword = " ";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
      console.log(generatedPassword);
    }
    setPassword(generatedPassword);
  };
  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => {
            setLength(parseInt(e.target.value));
          }}
        />
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="upper"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="lower"
          checked={includeLowerCase}
          onChange={(e) => setIncludeLowerCase(e.target.checked)}
        />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumber}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="numbers">Include Number</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="symbol"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="generate-password">
        <input type="text" readOnly value={password} />
        <button className="copy-btn">Copy</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
