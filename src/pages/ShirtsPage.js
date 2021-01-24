import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';

import shirtBanner from '../assets/images/tshirt-banner.jpg';

const ShirtsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shirtProducts = products.filter((product) => product.title === 'shirt');

  return (
    <>
      <Banner image={shirtBanner} />
      <section className="py-5">
        <div className="container">
          <Title title="SHIRTS PRODUCTS" />
          <div className="row">
            {shirtProducts.map((product) => {
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

export default ShirtsPage;
