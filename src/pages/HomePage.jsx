import ShowSomeProduct from "../components/product/ShowSomeProduct";
import { ActionButton } from "../components/ActionButton";
import K2Pro from "../assets/K2Pro.webp";
import MicrosoftTeam from "../assets/MicrosoftTeams.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTruckRampBox } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="bg-stone-100">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={K2Pro} className="w-full" alt="Logo" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={MicrosoftTeam} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="mx-5 ">
        <div className=" flex flex-col justify-center items-center h-[500px] gap-2 z-10">
          <h1 className="text-center text-6xl m-4 z-30">
            แมคคานิคอลคีย์บอร์ด ที่ดีที่สุดสำหรับ Mac
            <br /> & และทุกอุปกรณ์ของคุณ
          </h1>
          <p className="text-xl text-center text-neutral-500">
            Mechanical keyboard Best for Mac
            <br /> & and all your devices
          </p>
          <div className="flex gap-8 m-4">
            <Link to="/store">
              <ActionButton
                title="Browse products"
                style="bg-black text-white"
              />
            </Link>
            <Link to="/about">
              <ActionButton
                title="About us"
                style="bg-white text-black border-2 border-black"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-evenly mb-20">
          <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 ">
            <li>
              <a className="tooltip " data-tip="Delivery">
                <FontAwesomeIcon
                  icon={faTruck}
                  bounce
                  size="6x"
                  style={{ color: "#020203", marginBottom: "8px" }}
                />
                <h2 style={{ marginTop: "8px", fontSize: "20px" }}>
                  Free Delivery
                </h2>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Shipping">
                <FontAwesomeIcon
                  icon={faTruckRampBox}
                  size="6x"
                  style={{ color: "#121416", marginBottom: "8px" }}
                />
                <h2 style={{ marginTop: "8px", fontSize: "20px" }}>
                  Fast Shipping
                </h2>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Warranty">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  size="6x"
                  style={{ color: "#0f0f10", marginBottom: "8px" }}
                />
                <h2 style={{ marginTop: "8px", fontSize: "20px" }}>
                  Guaranteed center.
                </h2>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Secure">
                <FontAwesomeIcon
                  icon={faLock}
                  size="6x"
                  style={{ color: "#0c0d0d", marginBottom: "8px" }}
                />
                <h2 style={{ marginTop: "8px", fontSize: "20px" }}>Secure.</h2>
              </a>
            </li>
            <hr className="my-8 w-11/12 border-t-2 border-neutral-300" />
          </ul>
        </div>
        <div className="mb-10">
          <ShowSomeProduct title="Bestsellers" />
        </div>
      </div>
    </div>
  );
}
