export interface Goods {
  id: string;
  name: string;
  description: string;
  price: number;
  images: {
    background: string;
  };
}

export interface OrderedGoods extends Goods {
  quantity: number;
}
