import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "./bunner.jpg";
import "./banner.css";

export default function SLider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="lg:w-[870px] w-full lg:h-[400px]">
      <Slider {...settings}>
        <div>
          <img className="" src={banner} alt="" />
        </div>
        <div>
          <img className="" src={banner} alt="" />
        </div>
        <div>
          <img className="" src={banner} alt="" />
        </div>
        <div>
          <img className="" src={banner} alt="" />
        </div>
        <div>
          <img className="" src={banner} alt="" />
        </div>
      </Slider>
    </div>
  );
}
