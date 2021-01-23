import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Category from './Category/Category';

const Categories = () => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="BROWSE OUR CATEGORIES" />
          <div className="row">
            <div className="col-10 col-md-3 mb-4 mb-md-0 mx-auto">
              <Link to="/">
                <Category title="watch" />
              </Link>
            </div>
            <div className="col-10 col-md-3 mx-auto mb-4 mb-md-0 ">
              <Link to="/">
                <Category title="shoes" />
              </Link>
            </div>
            <div className="col-10 col-md-3 mx-auto mb-4 mb-md-0">
              <Link to="/">
                <Category title="shirt" />
              </Link>
            </div>
            <div className="col-10 col-md-3 mx-auto">
              <Link to="/">
                <Category title="shirt" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
