import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Banner from '../components/Banner/Banner';
import AllProducts from '../components/AllProducts/AllProducts';
import ClientSlider from '../components/ClientSlider/ClientSlider';

import productsBanner from '../assets/images/products-banner.jpg';

const AllProductsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Banner image={productsBanner} />
      <AllProducts products={products} />
      <ClientSlider />
    </>
  );
};

export default AllProductsPage;
