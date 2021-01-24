import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';

import headbanner from '../assets/images/headbanner4.jpeg';

const HeadPhonesPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const headProducts = products.filter(
    (product) => product.title === 'headphones'
  );

  return (
    <>
      <Banner image={headbanner} />
      <section className="py-5">
        <div className="container">
          <Title title="SHIRTS PRODUCTS" />
          <div className="row">
            {headProducts.map((product) => {
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
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
      <ClientSlider />
    </>
  );
};

export default HeadPhonesPage;
