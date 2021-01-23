import { contactInfo, myAccount } from '../../utils/footerInfo';

import footerLogo from '../../assets/images/hogash-logo.png';
import paymentLogo from '../../assets/images/payment.png';

import SocialIcons from '../SocialIcons/SocialIcons';

import './Footer.scss';

const Footer = () => {
  return (
    <section className="site-footer py-5">
      <div className="container">
        {/* footer header */}
        <div className="row site-footer__header">
          <div className="col-10 col-lg-2 mx-auto">
            <img
              src={footerLogo}
              alt="footer logo"
              className="site-footer__logo"
            />
          </div>
          <div className="col-10 col-lg-5 mx-auto">
            <h5 className="site-footer__title">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p className="site-footer__text">
              Get all the latest information on Events, Sales and Offers.
            </p>
          </div>
          <div className="col-10 col-lg-5 mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="site-footer__form"
            >
              <input
                type="email"
                className="site-footer__input"
                placeholder="your email..."
              />
              <input
                type="submit"
                className="site-footer__btn"
                value="subscribe"
              />
            </form>
          </div>
        </div>
        {/* footer content */}
        <div className="row">
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">CONTACT INFO</h5>
            {contactInfo.map((item) => {
              const { id, text } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">MY ACCOUNT</h5>
            {myAccount.map((item) => {
              const { id, text } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  {text}
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">MY ACCOUNT</h5>
            {myAccount.map((item) => {
              const { id, text } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        {/* footer footer */}
        <div className="row site-footer__footer">
          {/* payment logo */}
          <div className="col-10 col-lg-4 mx-auto">
            <img src={paymentLogo} alt="payment" />
          </div>
          {/* copy rights */}
          <div className="col-10 col-lg-4 mx-auto">
            <span className="site-footer__rights">
              <span className="site-footer__rights--author">Ibrahim Kamal</span>{' '}
              &copy; {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
          {/* social icons */}
          <div className="col-10 col-lg-4 mx-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
