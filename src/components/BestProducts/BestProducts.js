import { useSelector } from 'react-redux';

import Title from '../Title/Title';
import Product from '../Product/Product';

import './BestProducts.scss';

const BestProducts = () => {
  const { bestProducts } = useSelector((state) => state.products);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title="BEST SELLING" />
          <div className="row">
            {bestProducts.map((product) => {
              return (
                <div
                  key={product.sku}
                  className="col-10 col-md-6 col-lg-3 mx-auto"
                >
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestProducts;
