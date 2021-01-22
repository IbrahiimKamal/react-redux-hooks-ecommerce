import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import MainBanner from '../components/MainBanner/MainBanner';
import Categories from '../components/Categories/Categories';
import BestProducts from '../components/BestProducts/BestProducts';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts />
    </>
  );
};

export default HomePage;
