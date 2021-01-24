import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { CgCloseO } from 'react-icons/cg';

import { formatPrice } from '../../utils/formatPrice';

import { closeSideCart } from '../../redux/sidebar/sidebar_actions';
import { removeFromCart } from '../../redux/products/products_actions';

import cartEmptyImg from '../../assets/images/cart-empty.jpg';

import './CartSidebar.scss';

const CartSidebar = () => {
  const { cart } = useSelector((state) => state.products);
  const { sideCartOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <div
      className={
        sideCartOpen ? 'cart-overlay cart-overlay--show' : 'cart-overlay'
      }
    >
      <div
        className={
          sideCartOpen ? 'cart-sidebar cart-sidebar--show' : 'cart-sidebar'
        }
      >
        <div className="cart-sidebar__heading">
          <p className="cart-sidebar__title">your cart</p>
          <span className="cart-sidebar__close">
            <CgCloseO onClick={() => dispatch(closeSideCart())} />
          </span>
        </div>
        <div className="cart-sidebar__content">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div key={item.id} className="cart-sidebar__products">
                  <div className="cart-sidebar__product-image-container">
                    <img
                      className="cart-sidebar__product-image"
                      src={item.image}
                      alt="product"
                    />
                  </div>
                  <div className="cart-sidebar__product-info">
                    <p className="cart-sidebar__product-name">{item.name}</p>
                    <div className="cart-sidebar__prices">
                      <p className="cart-sidebar__product-qty">{item.qty} X</p>
                      <p className="cart-sidebar__product-price">
                        {formatPrice(item.price)}
                      </p>
                      <p className="cart-sidebar__delete">
                        <MdDelete
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cart-sidebar__empty-image-container">
              <img
                className="cart-sidebar__empty-image"
                src={cartEmptyImg}
                alt="cart is empty"
              />
            </div>
          )}
        </div>
        <div className="cart-sidebar__footer">
          Total: {formatPrice(totalPrice)}{' '}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
