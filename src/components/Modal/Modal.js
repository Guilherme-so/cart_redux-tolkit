import styles from "./modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modal/modalSlice";
import { clearCart } from "../../redux/slices/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside
      className={styles["modal-container"]}
      onClick={() => dispatch(closeModal())}
    >
      <div className={styles.modal}>
        <h4>Remove all items from your shopping cart?</h4>

        <div className={styles["btn-container"]}>
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type="button"
            className={`${styles.btn} ${styles["confirm-btn"]}`}
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className={`${styles.btn} ${styles["clear-btn"]}`}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
