// import { Divider } from "antd";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FoodCards from "./components/FoodCards/FoodCards";
import Booking from "./components/Booking/Booking";
import Reviews from "./components/Reviews/Reviews";
import Gallery from "./components/Gallery/Gallery";
import QRSection from "./components/QRSection/QRSection";
import Deliveryprogress from "./components/Deliveryprogress/DeliveryProgress";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return(
    <>
    <Header />
    <Hero />
    <FoodCards />
    <Booking />
    <Reviews />
    <Gallery />
    <QRSection />
    <Deliveryprogress />
    <Contact />
    <Footer />

    </>
  )
}

export default App;