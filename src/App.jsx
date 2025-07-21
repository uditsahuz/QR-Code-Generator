import React, { useEffect, useState } from "react";

const App = () => {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrcode, setQrcode] = useState("");

  useEffect(() => {
    if (word) {
      setQrcode(
        `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=100x100`
      );
    }
  }, [word]);

  const handleclick = () => {
    setWord(temp.trim());
    setTemp("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">QR CODE GENERATOR</h1>
        <div className="input-area">
          <input
            type="text"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter your URL"
            className="input"
          />
          <button
            className="generate-btn"
            onClick={handleclick}
            disabled={!temp.trim()}
          >
            Generate
          </button>
        </div>

        {qrcode && (
          <div className="qr-area">
            <img src={qrcode} alt="QR CODE" className="qr-img" id="qrImage" />
            <br />
            <a href={qrcode} download="qr-code.png" className="download-btn">
              Download QR
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
