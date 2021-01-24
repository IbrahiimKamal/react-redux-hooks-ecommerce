import { useState } from 'react';
import { useSelector } from 'react-redux';

import Title from '../Title/Title';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

import './AllProducts.scss';

const AllProducts = ({ products }) => {
  const [visible, setVisible] = useState(6);
  const { loading } = useSelector((state) => state.products);

  const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 3);
  };

  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="BEST SELLING" />
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <Loading />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <Title title="OUR PRODUCTS" />
        <div className="row">
          {products.slice(0, visible).map((product) => {
            return (
              <div
                key={product.id}
                className="col-10 col-md-6 col-lg-4 mx-auto"
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
        {visible === products.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: 'center' }}
              className="col-10 mx-auto pt-3"
            >
              <button onClick={showMoreProducts} className="btn btn-grey">
                show more
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
