import Slider from 'react-slick';

import './Gallery.scss';

const Gallery = ({ gallarey, id }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      <Slider {...settings}>
        {gallarey &&
          gallarey.map((image) => {
            return (
              <div className="gallery" key={image.sku}>
                <img
                  className="gallery__image"
                  src={image.url}
                  alt={image.sku}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Gallery;
