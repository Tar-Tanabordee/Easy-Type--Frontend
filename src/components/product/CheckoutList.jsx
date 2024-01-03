import { CiSquareMinus, CiSquarePlus, CiTrash } from "react-icons/ci";
import useProduct from "../../hooks/use-product";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/local-storage";

export default function CheckoutList({ product, amount }) {
  const { deleteFromCart, getCartItem, increaseAmount, decreaseAmount } =
    useProduct();
  useEffect(() => {
    if (getAccessToken()) {
      getCartItem();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAmount = product?.stock > amount ? amount : product?.stock;
  return (
    <>
      <div className="flex gap-10 border-b-2 p-4 justify-between">
        <img className="h-40 " src={product?.image} alt="" />
        <div className="flex flex-col  gap-6">
          <h1 className="text-xl">{product?.name}</h1>
          <p className="text-neutral-500">{product?.description}</p>
        </div>
        <div className="flex flex-col justify-between items-end text-lg">
          <p>{handleAmount * product?.price}Baht</p>
          <div className="flex justify-between items-center gap-4 text-2xl">
            <CiSquareMinus
              onClick={() =>
                decreaseAmount({
                  amount,
                  product,
                })
              }
              className="cursor-pointer"
            />
            <p className="text-xl">{handleAmount}</p>
            <CiSquarePlus
              onClick={() =>
                increaseAmount({
                  amount,
                  product,
                })
              }
              className="cursor-pointer"
            />
          </div>
          <CiTrash
            className="text-2xl cursor-pointer"
            onClick={() => deleteFromCart(product?.id)}
          />
        </div>
      </div>
    </>
  );
}
