import { GoodsItem } from '@/components/GoodsItem';

import type { Goods } from '@/types';
import styles from './GoodsList.module.scss';

interface GoodsListProps {
  goods: Goods[];
  addToOrders: (newGoods: Goods) => void;
}

export const GoodsList = ({ goods, addToOrders }: GoodsListProps) => {
  return (
    <div className={styles.goodsList}>
      {!goods.length ? (
        <h2>Nothing here</h2>
      ) : (
        goods
          .slice(0, 50)
          .map((good) => (
            <GoodsItem key={good.id} goods={good} addToOrders={addToOrders} />
          ))
      )}
    </div>
  );
};
