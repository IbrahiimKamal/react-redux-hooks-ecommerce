import Slider from 'react-slick';

import Title from '../Title/Title';

import clientImg1 from '../../assets/images/client/1.png';
import clientImg2 from '../../assets/images/client/2.png';
import clientImg3 from '../../assets/images/client/3.png';
import clientImg4 from '../../assets/images/client/4.png';
import clientImg5 from '../../assets/images/client/5.png';
import clientImg6 from '../../assets/images/client/6.png';

import './ClientSlider.scss';

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 section-bg">
      <div className="container">
        <Title title="OUR CLIENTS" />
        <Slider {...settings}>
          <div className="client-image-container">
            <img className="client-image" src={clientImg1} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" src={clientImg2} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" src={clientImg3} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" src={clientImg4} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" src={clientImg5} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" src={clientImg6} alt="client logo" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
