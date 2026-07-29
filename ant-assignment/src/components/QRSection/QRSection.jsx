import "./QRSection.css";
import { QRCode } from "antd";

function QRSection() {
    return (
        <div className="qr-section">
            <h1>Scan Our Menu</h1>

            <p>Scan the QR Code to view our restaurant menu.</p>
        <div className="qrcode">
            <QRCode value="https://www.abcrestaurant.com/menu" />
        </div>
        </div>
    )
};

export default QRSection;