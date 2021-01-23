import { Link } from 'react-router-dom';

import './MainBanner.scss';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
          shop personalize
          <br />
          your galaxy
          <br />
          watches
        </h1>
        <Link to="/products" className="btn btn-black">
          shop now
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
