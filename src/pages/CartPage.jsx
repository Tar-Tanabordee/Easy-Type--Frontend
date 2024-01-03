import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutList from "../components/product/CheckoutList";
import useProduct from "../hooks/use-product";
import useAuth from "../hooks/use-auth";

export default function CartPage() {
  const { allAddress } = useAuth();
  const { cartItem, getCartItem, createOrder, totalPrice } = useProduct();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCartItem();
  }, []);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitCreateOrder = () => {
    if (input) {
      createOrder(input);
      navigate("/order");
    }
  };
  return (
    <>
      <div className="flex justify-center gap-16 mx-16 my-20 px-36 min-h-[419px]">
        <div>
          <h1 className="text-4xl mb-8">Cart</h1>
          {cartItem?.map((item) => {
            return (
              <CheckoutList
                key={item.id}
                cartItemId={item?.id}
                amount={item?.amount}
                product={item?.product}
              />
            );
          })}
        </div>
        <div>
          <h1 className="text-4xl mb-8">Summary</h1>
          <div className="flex justify-between mb-2 text-lg">
            <h4>Subtotal</h4>
            <h4>{totalPrice} Baht</h4>
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-10 text-lg">
            <h4>Delivery </h4>
            <h4>Free</h4>
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-2 text-lg">
            <h4>Total</h4>
            <h4>{totalPrice} Baht</h4>
          </div>
          <div>
            <h1>Address:</h1>
            <select
              name="address"
              onChange={handleChangeInput}
              className="py-1 px-2 border w-full border-neutral-400 rounded-xl bg-neutral-100"
            >
              <option></option>
              {allAddress.map((address) => {
                return (
                  <option
                    key={address.id}
                    value={address.id}
                  >{`${address.title} ${address.address} ${address.subDistrict}`}</option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => submitCreateOrder()}
            className="bg-black text-xl font-medium text-white border border-black rounded-full hover:shadow-md max-h-fit min-w-full py-2 mt-2"
          >
            Check out
          </button>
        </div>
      </div>
    </>
  );
}
