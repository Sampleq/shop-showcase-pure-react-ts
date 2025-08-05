import type { Goods } from '@/types';
import styles from './GoodsItem.module.scss';

interface GoodsItemProps {
  goods: Goods;
  addToOrders: (newGoods: Goods) => void;
}

export const GoodsItem = ({ goods, addToOrders }: GoodsItemProps) => {
  const {
    name,
    price,
    description,
    images: { background },
  } = goods;

  return (
    <div className={styles.good}>
      {/* <img src={matrixArt} alt='movie art' /> */}
      {/* <img src="/matrix-art.jpg" alt='movie art' /> // из папки public  */}

      <img
        src={
          !background
            ? `https://images.placeholders.dev/?width=300&height=300&text=${name}&textWrap=true&fontSize=36`
            : background
        }
        alt={name}
      />

      <div className={styles.content}>
        <h4>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.purchase}>
          <span className={styles.price}>{price.toFixed(2)} $</span>
          <button className={styles.buy} onClick={() => addToOrders(goods)}>
            Buy
          </button>
        </p>
      </div>
    </div>
  );
};
