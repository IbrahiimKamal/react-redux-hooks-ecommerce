import { useSelector } from 'react-redux';

import Title from '../Title/Title';
import Product from '../Product/Product';

const FeaturedProducts = () => {
  const { featuredProducts } = useSelector((state) => state.products);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Title title="OUR FEATURED" />
          <div className="row">
            {featuredProducts.map((product) => {
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

export default FeaturedProducts;
