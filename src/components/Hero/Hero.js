import { BsStar } from 'react-icons/bs';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero py-5">
      <article className="hero__content">
        <h3 className="hero__offer">
          extra{' '}
          <span className="hero__offer-btn">
            <BsStar className="hero__star" />
            <span>30% off</span>
            <BsStar className="hero__star" />
          </span>{' '}
          online
        </h3>
        <h3 className="hero__title">lifestyle collection</h3>
        <p className="hero__text">free shipping on orders over $99</p>
        <button className="btn">discover now</button>
      </article>
    </section>
  );
};

export default Hero;
