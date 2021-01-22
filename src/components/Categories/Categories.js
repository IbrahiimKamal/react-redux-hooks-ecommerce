import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Category from './Category/Category';

const Categories = () => {
  return (
    <>
      <Title title="BROWSE OUR CATEGORIES" />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-4 mx-auto">
              <Link to="/">
                <Category title="watch" />
              </Link>
            </div>
            <div className="col-10 col-md-4 mx-auto my-4 my-md-0 ">
              <Link to="/">
                <Category title="shoes" />
              </Link>
            </div>
            <div className="col-10 col-md-4 mx-auto">
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
