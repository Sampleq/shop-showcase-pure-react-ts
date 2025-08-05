import { useEffect, useState } from 'react';

import styles from './Showcase.module.scss';
import { API_KEY, API_URL } from '@/config';
import { Preloader } from '../Preloader';
import { GoodsList } from '../GoodsList';
import { Cart } from '../Cart';
import type { Goods, OrderedGoods } from '@/types';
import { getRandomNumber } from '@/utils/getRandomNumber';
import { BasketList } from '../basket/BasketList';

import { ToastContainer, toast } from 'react-toastify';

interface ShowcaseProps {}

export const Showcase = ({}: ShowcaseProps) => {
  const [goods, setGoods] = useState<Goods[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<OrderedGoods[]>([]);
  const [isBasketShown, setIsBasketShown] = useState<boolean>(false);

  function addToOrders(newGoods: Goods) {
    // setOrders([...orders, newGoods]); // just list

    const orderedGoodsIndex = orders.findIndex(
      (order) => order.id === newGoods.id
    );

    if (orderedGoodsIndex === -1) {
      const newOrderedGoods: OrderedGoods = {
        ...newGoods,
        quantity: 1,
      };

      setOrders([...orders, newOrderedGoods]);
    } else {
      setOrders(
        orders.map((order, i) => {
          if (i === orderedGoodsIndex) {
            return {
              ...order,
              quantity: order.quantity + 1,
            };
          }

          return order;
        })
      );
    }

    toast(`${newGoods.name} added to Cart`);
  }

  function deleteFromOrders(idToDelete: Goods['id']) {
    setOrders(orders.filter((order) => order.id !== idToDelete));
  }

  function changeQtyInOrders(idToChangeQty: Goods['id'], mod: '-' | '+') {
    setOrders(
      orders
        .map((order) => {
          if (order.id === idToChangeQty) {
            return {
              ...order,
              quantity: mod === '-' ? order.quantity - 1 : order.quantity + 1,
            };
          }

          return order;
        })
        .filter((order) => order.quantity > 0)
      /* если разбить на отдельные функции добавления и удаления товара - можно будет избавиться от дополнительного прохода по массиву методом filter() */
    );
  }

  function handleBasketShow() {
    setIsBasketShown(!isBasketShown);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.items) {
          setGoods(
            data.items.map((item: Goods) => {
              if (!item.price) {
                return {
                  ...item,
                  price: getRandomNumber(1000, 20000) / 100,
                };
              }

              return item;
            })
          );
        }
      })
      .catch((error) => {
        console.warn(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className={styles.showcase}>
      <div className={styles.wrapper}>
        {/* <Cart quantity={new Set(orders).size} />  // for just list */}
        <Cart quantity={orders.length} handleBasketShow={handleBasketShow} />
        {isLoading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} addToOrders={addToOrders} />
        )}

        {isBasketShown && (
          <BasketList
            orderedGoodsList={orders}
            handleBasketShow={handleBasketShow}
            handleDeleteOrder={deleteFromOrders}
            handleChangeQtyInOrders={changeQtyInOrders}
            setOrders={setOrders}
            setIsBasketShown={setIsBasketShown}
          />
        )}
      </div>

      <ToastContainer
        hideProgressBar
        toastClassName={styles.toast}
        autoClose={3000}
      />
    </main>
  );
};
