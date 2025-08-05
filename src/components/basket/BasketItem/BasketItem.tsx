import type { Goods, OrderedGoods } from '@/types';
import styles from './BasketItem.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface BasketItemProps {
  goods: OrderedGoods;
  handleDeleteOrder: (id: Goods['id']) => void;
  handleChangeQtyInOrders: (id: Goods['id'], mod: '-' | '+') => void;
}

export const BasketItem = ({
  goods,
  handleDeleteOrder,
  handleChangeQtyInOrders,
}: BasketItemProps) => {
  return (
    <li className={styles.basketItem}>
      <div>
        <b>{goods.name}</b> ({goods.price} $){' '}
        <span
          className={styles.changeQty}
          onClick={() => handleChangeQtyInOrders(goods.id, '-')}
        >
          <FaMinus />
        </span>{' '}
        <b>x{goods.quantity} </b>
        <span
          className={styles.changeQty}
          onClick={() => handleChangeQtyInOrders(goods.id, '+')}
        >
          <FaPlus />
        </span>{' '}
        = <b>{(goods.price * goods.quantity).toFixed(2)}&nbsp;$</b>
      </div>

      <span className={styles.delete}>
        <RiDeleteBinLine onClick={() => handleDeleteOrder(goods.id)} />
      </span>
    </li>
  );
};
