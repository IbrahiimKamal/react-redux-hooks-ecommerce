import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

import { formatPrice } from '../../utils/formatPrice';

import Stars from '../Stars/Stars';

import './Product.scss';

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.sku}`}>
      <div className="product">
        <div className="product__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product__image"
          />
        </div>
        <div className="product__footer">
          <div className="product__footer-heading">
            <h3 className="product__footer-title">{product.name}</h3>
            <span className="product__footer-icon">
              <AiOutlineShopping />
            </span>
          </div>
          <div className="product__footer-prices">
            <span>
              <span className="product__footer-price">
                {formatPrice(product.price)}
              </span>
              <span className="product__footer-price--old">
                {formatPrice(product.oldPrice)}
              </span>
            </span>
            {/* stars component */}
            <Stars stars={product.stars} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
