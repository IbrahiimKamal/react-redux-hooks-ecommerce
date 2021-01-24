import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import SingleProduct from '../components/SingleProduct/SingleProduct';

import { fetchSingleProduct } from '../redux/products/products_actions';

const SingleProductPage = () => {
  const { singleProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  return (
    <>
      <SingleProduct singleProduct={singleProduct} />
    </>
  );
};

export default SingleProductPage;
