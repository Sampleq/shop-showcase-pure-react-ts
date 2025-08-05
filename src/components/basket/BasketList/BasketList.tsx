import type { Goods, OrderedGoods } from '@/types';
import { BasketItem } from '../BasketItem';
import styles from './BasketList.module.scss';
import { IoClose } from 'react-icons/io5';

interface BasketListProps {
  orderedGoodsList: OrderedGoods[];
  handleBasketShow: () => void;
  handleDeleteOrder: (id: Goods['id']) => void;
  handleChangeQtyInOrders: (id: Goods['id'], mod: '-' | '+') => void;
  setOrders: React.Dispatch<React.SetStateAction<OrderedGoods[]>>;
  setIsBasketShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BasketList = ({
  orderedGoodsList,
  handleBasketShow,
  handleDeleteOrder,
  handleChangeQtyInOrders,
  setOrders,
  setIsBasketShown,
}: BasketListProps) => {
  const totalCost = orderedGoodsList.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );

  function handleSubmit() {
    if (!totalCost) {
      alert(`Nothing to submit!\n
Add goods in your Cart!`);
    } else {
      alert(`Thanks for ordering!\n
Total cost is  ${totalCost.toFixed(2)} $ `);
      setOrders([]);
    }

    setIsBasketShown(false);
  }

  return (
    <div className={styles.basketList}>
      <h2 className={styles.title}>Your Cart</h2>
      {orderedGoodsList.length ? (
        <ul className={styles.list}>
          {orderedGoodsList.map((orderedGoods) => (
            <BasketItem
              goods={orderedGoods}
              key={orderedGoods.id}
              handleDeleteOrder={handleDeleteOrder}
              handleChangeQtyInOrders={handleChangeQtyInOrders}
            />
          ))}
        </ul>
      ) : (
        <h2>Your Cart is empty!</h2>
      )}

      <h3 className={styles.total}>Total: {totalCost.toFixed(2)} $</h3>

      <button className={styles.submit} onClick={handleSubmit}>
        Submit
      </button>

      <span className={styles.close} onClick={handleBasketShow}>
        <IoClose />
      </span>
    </div>
  );
};
