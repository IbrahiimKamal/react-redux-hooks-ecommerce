import bannerBg from '../../assets/images/home_banner.jpg';

import './MainBanner.scss';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__image-container">
        <img src={bannerBg} className="banner__image" />
      </div>
      <div className="banner__hero">
        <h1 className="banner__title">
          shop personalize
          <br />
          your galaxy
          <br />
          watches
        </h1>
        <button className="btn btn-black">shop now</button>
      </div>
    </div>
  );
};

export default MainBanner;
