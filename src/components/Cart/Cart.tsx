import { GrBasket } from 'react-icons/gr';
import styles from './Cart.module.scss';

interface CartProps {
  quantity: number;
  handleBasketShow: () => void;
}

export const Cart = ({ quantity, handleBasketShow }: CartProps) => {
  return (
    <div className={styles.cart} onClick={handleBasketShow}>
      <GrBasket className={styles.icon} />
      {quantity ? <span className={styles.quantity}>{quantity}</span> : null}
    </div>
  );
};
