import "./Hero.css";
import { Carousel } from "antd";

import background from "../../assets/background.webp";
import background2 from "../../assets/background2.jpg";
import backgroundcard from "../../assets/backgroundcard.webp";

function Hero() {
    return (
        <div className="hero">
            <Carousel autoplay>
                <div>
                    <img src={background} alt="food" />
                </div>
                <div>
                    <img src={background2} alt="food" />
                </div>
                <div>
                    <img src={backgroundcard} alt="food" />
                </div>

            </Carousel>
        </div>
    )
}
export default Hero;