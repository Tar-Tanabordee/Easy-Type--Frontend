import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { useEffect, useState } from 'react';

import ShowSomeProduct from '../components/product/ShowSomeProduct';
import useProduct from '../hooks/use-product';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const { authUser } = useAuth();

  const { allProducts, addToCart } = useProduct();
  const params = useParams();
  const productId = +params.id;
  const product = allProducts.filter((product) => product.id === productId);

  const min = 1;
  const max = product[0]?.stock;
  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-16 my-10">
      <div className="my-10">
        {/* <div className="mx-24 mb-8">{`Store / ${product[0]?.category?.name} / ${product[0]?.name}`}</div> */}
        <div className="flex mx-24 mb-8">
          <Link to="/store">Store</Link> /
          <Link>{product[0]?.category?.name}</Link> /
          <Link>{product[0]?.name}</Link>
        </div>
        <div className="flex justify-center gap-40 ">
          <img
            className="h-[450px]"
            src={product[0]?.image}
            alt={product[0]?.name}
          />

          <div className="flex flex-col justify-start gap-10 w-[450px]">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl ">{product[0]?.name}</h1>
              <p className="text-xl">{product[0]?.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <CiSquareMinus className="text-4xl" onClick={handleDecrement} />
              <p className="text-2xl">{count}</p>
              <CiSquarePlus className="text-4xl" onClick={handleIncrement} />
            </div>
            <p
              className={`text-xl ${
                product[0]?.stock === count ? 'text-red-500' : 'text-black'
              }`}
            >
              in stock: {product[0]?.stock}
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="/cart"
                onClick={() =>
                  addToCart({
                    productId: product[0].id,
                    amount: count,
                    userId: authUser.id,
                  })
                }
                className="bg-black text-xl font-medium text-center text-white border border-black rounded-full hover:shadow-md max-h-fit py-2"
              >
                Buy now
              </Link>
              <button
                onClick={() =>
                  addToCart({
                    productId: product[0].id,
                    amount: count,
                    userId: authUser.id,
                  })
                }
                className="bg-white text-xl font-medium text-black border-[1.5px] border-black rounded-full hover:shadow-md max-h-fit py-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShowSomeProduct title="Related Products" />
    </div>
  );
}
