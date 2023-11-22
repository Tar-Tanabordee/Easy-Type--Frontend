import { useEffect, useState } from "react";
import axios from "../config/axios";
import ShoppingForm from "../features/auth/ShoppingFrom";

export default function ShoppingPage() {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    axios.get("/productByCat/:categoryId").then((res) => {
      // Remove :productId from the path
      setGetProduct(res.data.products);
    });
  }, []);

  return (
    <div>
      {getProduct.map((Keyboard) => (
        <ShoppingForm key={Keyboard.id} KeyboardDetail={Keyboard} />
      ))}
    </div>
  );
}
