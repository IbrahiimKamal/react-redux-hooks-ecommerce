import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Category from './Category/Category';

import shirt from '../../assets/images/categories/shirt.jpg';
import shoes from '../../assets/images/categories/shoes.jpg';
import head from '../../assets/images/categories/images-2.jpg';

const Categories = () => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="BROWSE OUR CATEGORIES" />
          <div className="row">
            <div className="col-6 col-md-4 mb-4 mb-md-0 mx-auto">
              <Link to="/shirts">
                <Category image={shirt} title="shirts" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0 ">
              <Link to="/shoes">
                <Category image={shoes} title="shoes" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0">
              <Link to="/headphones">
                <Category image={head} title="Headphones" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
