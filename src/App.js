import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useDispatch, useSelector} from "react-redux"
import {calculeTotals} from "./redux/slices/cart/cartSlice"

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((store) => store.cart)

  useEffect(()=> {
    dispatch(calculeTotals())
  },[cartItems])

  return <main>
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
