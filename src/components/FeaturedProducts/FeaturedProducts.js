import { useSelector } from 'react-redux';

import Title from '../Title/Title';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

const FeaturedProducts = ({ featuredProducts }) => {
  const { loading } = useSelector((state) => state.products);

  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="OUR FEATURED" />
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
    <>
      <section className="py-5">
        <div className="container">
          <Title title="OUR FEATURED" />
          <div className="row">
            {featuredProducts.map((product) => {
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
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
