import { Link } from "react-router-dom";

export default function ProductForm({ ProductDetail }) {
  console.log(ProductDetail);
  return (
    <div className="inline-flex p-5 space-x-3 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={ProductDetail.productImage}
            alt="Keyboard"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body justify-evenly">
          <h2 className="card-title">{ProductDetail.productName}</h2>
          <p>{ProductDetail.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{ProductDetail.size}</div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-neutral">
              <Link to="/shopping">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
