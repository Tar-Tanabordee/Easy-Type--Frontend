import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";

export default function ShoppingForm({ KeyboardDetail }) {
  return (
    <div>
      <div className="inline-flex p-5 space-x-3 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={KeyboardDetail.image}
              alt="Keyboard"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{KeyboardDetail.name}</h2>
            <p>{KeyboardDetail.description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-neutral">
                <Link to="/shopping">Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
