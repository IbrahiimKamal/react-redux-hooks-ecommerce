import ContactUs from '../components/ContactUs/ContactUs';
import Banner from '../components/Banner/Banner';

import contactAbout from '../assets/images/contactbanner.jpg';

const ContactPage = () => {
  return (
    <>
      <Banner image={contactAbout} />
      <ContactUs />
    </>
  );
};

export default ContactPage;
