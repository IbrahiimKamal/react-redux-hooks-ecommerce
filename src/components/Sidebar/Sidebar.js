import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import SocialIcons from '../SocialIcons/SocialIcons';

import { navbarLinks } from '../../utils/navbarLinks';
import welcome from '../../assets/images/welcome.png';

import { closeSidebar } from '../../redux/sidebar/sidebar_actions';

import './Sidebar.scss';

const Sidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <div className={`${sidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}`}>
      <div
        className={`${
          sidebarOpen
            ? 'sidebar__content sidebar__content--show'
            : 'sidebar__content'
        }`}
      >
        <ul className="sidebar__links">
          {navbarLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <Link
                  onClick={() => dispatch(closeSidebar())}
                  to={path}
                  className="sidebar__link"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sidebar__image-container">
          <img src={welcome} alt="welcome logo" className="sidebar__image" />
        </div>
        <div className="sidebar__footer">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
