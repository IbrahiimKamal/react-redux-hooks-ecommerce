import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Reviews from '../components/Reviews/Reviews';
import Hero from '../components/Hero/Hero';

import aboutBanner from '../assets/images/about-usbanner.jpg';

const AboutPage = () => {
  return (
    <>
      <Banner image={aboutBanner} />
      <AboutInfo />
      <Reviews />
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
    </>
  );
};

export default AboutPage;
