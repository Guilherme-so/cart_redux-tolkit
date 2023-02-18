import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cart/cartSlice";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  return (
    <>
      {amount < 1 ? (
        <section className="cart">
          <header>
            <h2>Your bag</h2>
            <h4 className="empty-cart">is current empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>your bag</h2>
          </header>
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total <span>${total.toFixed(2)}</span>
              </h4>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="btn clear-btn"
            >
              clear cart
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CartContainer;
