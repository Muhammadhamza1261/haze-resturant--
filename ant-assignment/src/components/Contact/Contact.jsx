import "./Contact.css";
import { Button } from "antd";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <p><FaPhoneAlt /> +92 3236067362</p>

      <p><FaEnvelope /> infoHaze@restaurant.com</p>

      <p><FaMapMarkerAlt /> Karachi, Pakistan</p>

      <Button type="primary">
        Contact Now
      </Button>

    </div>
  );
}

export default Contact;