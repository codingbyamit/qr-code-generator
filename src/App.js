import { useState } from "react";
import "./App.css";
import QrCodeGenerate from "./api/QrCodeGenerate";

function App() {
    const [qrData, setQrData] = useState("example.com");
    const [qrSize, setQrSize] = useState("200x200");

    if (qrSize === "400x400") {
        alert("Please Small Size");
    }

    return (
        <div className="qr-code-app">
            <div className="heading">
                <h1>QR Code Generator</h1>
                <div className="url">
                    <label className="input-label">QR URL :</label>
                    <input
                        type="text"
                        value={qrData}
                        onChange={(e) => setQrData(e.target.value)}
                    />
                </div>
                <div className="qr-img">
                    <label className="qr-size">QR Size : </label>
                    <input
                        type="text"
                        value={qrSize}
                        onChange={(e) => setQrSize(e.target.value)}
                    />
                </div>
                <div className="qr-code">
                    <img src={QrCodeGenerate(qrData, qrSize)} alt="Qr Code" />
                </div>
            </div>
        </div>
    );
}

export default App;
