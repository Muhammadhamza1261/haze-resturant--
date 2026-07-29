import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <h2>HAZE Restaurant</h2>

      <p>© 2026 All Rights Reserved</p>

      <div className="icons">
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
      </div>

    </div>
  );
}

export default Footer;