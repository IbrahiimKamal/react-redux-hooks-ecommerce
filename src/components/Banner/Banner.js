import './Banner.scss';

const Banner = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="product-banner"
    ></div>
  );
};

export default Banner;
