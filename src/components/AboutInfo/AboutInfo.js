import { FiCheck } from 'react-icons/fi';

import aboutImage from '../../assets/images/about-info.jpg';

import Title from '../Title/Title';

import './AboutInfo.scss';

const AboutInfo = () => {
  return (
    <section className="about py-5">
      <div className="container">
        <Title title="ABOUT US" />
        <div className="row">
          <div className="col-10 col-md-6 mx-auto mb-4 align-self-center">
            <h4 className="about__title">Who We Are?</h4>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              tellus ante. Nam suscipit urna risus, fermentum commodo ipsum
              porta id.
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, sed porta est consectetur.
              Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
              ultricies nibh gravida, accumsan libero luctus, molestie nunc.
            </p>
            <div className="about__icons d-flex align-items-center">
              <div
                className="about_icon d-flex align-items-center mr-md-5
              "
              >
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Pellentesque ultricies nibh
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Pellentesque ultricies nibh
                </span>
              </div>
            </div>
            <div className="about__icons d-flex align-items-center">
              <div className="about_icon d-flex align-items-center mr-md-5">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Pellentesque ultricies nibh
                </span>
              </div>
              <div className="about_icon d-flex align-items-center">
                <FiCheck className="mr-2" />{' '}
                <span className="about__icon-text">
                  Pellentesque ultricies nibh
                </span>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto align-self-md-center">
            <img src={aboutImage} alt="about us" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
