import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Q from "../assets/Q.png";
import Input from "../components/profile/Input";
import useProduct from "../hooks/use-product";

export default function CheckoutPage() {
  const [file, setFile] = useState(null);
  const [input] = useState("");
  const params = useParams();
  const orderId = +params.id;
  const navigate = useNavigate();
  const { order, uploadPaySlipOrder, getOrder } = useProduct();

  const orderList = order.filter((el) => el.id === orderId);

  const handleImageUpload = async (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("paySlip", file);
      formData.append("id", orderList[0].id);
      uploadPaySlipOrder(formData);
      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="flex justify-center items-center gap-40 my-2 min-h-[563px]">
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col justify-center items-center gap-4"
      >
        <div>
          <h1 className="text-4xl mb-8">Summary</h1>
          <div>
            {orderList.map((OrderItem) => {
              return OrderItem.orderItems?.map((item) => {
                return (
                  <div key={item.id} className="flex justify-between text-lg">
                    <div>
                      {item.product.name} x{item.amount}
                    </div>
                    <h4>${item.totalPrice} Baht</h4>
                  </div>
                );
              });
            })}
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-10 text-lg">
            <h4>Estimated Delivery & Handling</h4>
            <h4>Free</h4>
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-2 text-lg">
            <h4>Total</h4>
            <h4>
              {orderList[0].orderItems?.reduce(
                (sum, item) => sum + +item.totalPrice,
                0
              )}
              Baht
            </h4>
          </div>
        </div>

        <div className="flex justify-center items-end gap-4">
          {orderList[0]?.paySlip ? (
            <img className="h-60" src={orderList[0]?.paySlip} alt="" />
          ) : (
            <>
              <Input
                type="file"
                inputTitle="Payslip"
                name="paySlip"
                value={input.paySlip}
                onChange={handleImageUpload}
              />
              <button className="bg-black text-white text-xl p-1.5 rounded-xl">
                Upload
              </button>
            </>
          )}
        </div>
      </form>
      <div className="flex flex-col items-center">
        <img src={Q} className="w-full" alt="Logo" />

        <p>Tanabordee Sirisupanon</p>
      </div>
    </div>
  );
}
