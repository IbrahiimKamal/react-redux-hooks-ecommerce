import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';

import './SocialIcons.scss';

const SocialIcons = () => {
  return (
    <div className="socila-icons">
      <span className="socila-icons__icon">
        <ImFacebook />
      </span>
      <span className="socila-icons__icon">
        <ImTwitter />
      </span>
      <span className="socila-icons__icon">
        <ImLinkedin2 />
      </span>
    </div>
  );
};

export default SocialIcons;
