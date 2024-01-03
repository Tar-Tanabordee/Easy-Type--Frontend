import { useEffect } from 'react';
import OrderList from '../components/product/OrderList';
import useProduct from '../hooks/use-product';

export default function OrderPage() {
  const { order, getCartItem } = useProduct();

  useEffect(() => {
    getCartItem();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[387px] flex flex-col mx-80 my-24 gap-4 ">
      {order?.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
}
