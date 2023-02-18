import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal/Modal";

import { useDispatch, useSelector } from "react-redux";
import { calculeTotals, getCartItems } from "./redux/slices/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculeTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      {isLoading ? (
        <div className="loading">
          loading...
        </div>
) : <CartContainer />}
    </main>
  );
}
export default App;
