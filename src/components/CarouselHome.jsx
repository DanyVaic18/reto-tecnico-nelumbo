import { Carousel } from "antd";
import BannerMacroPay from "../assets/carousel/banner-macro-pay.png";
import CarouselSmartphone from "../assets/carousel/carusel-smartphone.jpeg";
import PhoneDarkPro from "../assets/carousel/phone-dark-pro.png";
import cellPhonesMokup from "../assets/carousel/cell-phones-mokup.jpg";


const CarouselHome = () => {
  return (
    <Carousel arrows infinite  className="rounded-xl bg-black w-[80%] mx-auto">
      <img src={BannerMacroPay} alt={"Banner of Macro pay"} className="rounded-xl max-h-[480px] object-contain" />
      <img src={CarouselSmartphone} alt={"CarouselSmartphone"} className="rounded-xl max-h-[480px] object-contain" />
      <img src={PhoneDarkPro} alt={"PhoneDarkPro"} className="rounded-xl max-h-[480px] object-contain" />
      <img src={cellPhonesMokup} alt={"cellPhonesMokup"} className="rounded-xl max-h-[480px] object-contain" />
    </Carousel>
  );
};

export default CarouselHome;
