import Footer from "../layout/Footer";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import ProductForm from "../features/auth/ProductForm";

export default function Accessories() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios.get(`/product/get`).then((res) => {
      setAllProduct(res.data.products);
    });
  }, []);
  return (
    <div className="bg-slate-950">
      <h1 className="text-center"> </h1>
      {allProduct.map((product) => (
        <ProductForm key={product.id} ProductDetail={product} />
      ))}
      <Footer />
    </div>
  );
}
