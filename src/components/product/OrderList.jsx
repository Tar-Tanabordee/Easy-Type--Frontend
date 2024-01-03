import useAuth from "../../hooks/use-auth";
import useProduct from "../../hooks/use-product";
import { Link } from "react-router-dom";

export default function OrderList({ order }) {
  const { confirmOrder, rejectOrder, shippedOrder, receivedOrder } =
    useProduct();
  const { authUser } = useAuth();

  return (
    <div className="flex justify-start items-center gap-4 ">
      <Link
        to={`/order/${order.id}`}
        className="flex w-96 gap-4 justify-between p-2 border border-neutral-500 rounded-lg bg-neutral-100 hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out"
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-semibold">
            <h1>#{order.id}</h1>
            <p>{order.status}</p>
          </div>
          <h1>{`${order.user?.firstName} ${order.user?.lastName}`}</h1>
          <h1>
            address:
            {`${order.address?.title} ${order.address?.address} ${order.address?.subDistrict} ${order.address?.district} ${order.address?.province} ${order.address?.country} ${order.address?.postalCode}`}
          </h1>
        </div>
        <img src={order.paySlip} alt="" className="h-16" />
      </Link>
      {authUser.role === "ADMIN" ? (
        <div className="flex h-10 gap-2">
          {order.status === "PENDING" ? (
            <>
              <button
                onClick={() => confirmOrder(order)}
                className="bg-black text-white text-xl p-1.5 rounded-xl hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out"
              >
                Confirm
              </button>
              <button
                onClick={() => rejectOrder(order)}
                className="bg-white text-black border-2 border-black text-xl p-1.5 rounded-xl hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out"
              >
                Reject
              </button>
            </>
          ) : order.status === "PAID" ? (
            <button
              onClick={() => shippedOrder(order)}
              className="bg-black text-white text-xl p-1.5 rounded-xl hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out"
            >
              Shipped
            </button>
          ) : (
            ""
          )}
        </div>
      ) : order.status === "SHIPPED" ? (
        <button
          onClick={() => receivedOrder(order)}
          className="bg-black text-white text-xl p-1.5 rounded-xl"
        >
          Received
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
