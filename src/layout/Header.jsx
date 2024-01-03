import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

import Menu from "./Menu";
import Modal from "../components/Modal";
import SignUpForm from "../components/auth/SignUpForm";
import LoginForm from "../components/auth/LoginForm";
import useAuth from "../hooks/use-auth";
import DropDown from "../components/DropDown";
import useProduct from "../hooks/use-product";
import { getAccessToken } from "../utils/local-storage";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { Logo } from "../icon";

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const { authUser } = useAuth();
  const { cartItem } = useProduct();

  return (
    <>
      <header className="flex justify-between px-10 border bg-black h-20">
        <Link to="/" className="flex items-center gap-6 ">
          <FontAwesomeIcon
            icon={faKeyboard}
            beat
            size="xl"
            style={{ color: "#ffffff" }}
          />
          <div className="text-4xl text-neutral-50 font-semibold">
            Easy Type
          </div>
        </Link>
        <div className="flex items-center gap-8 text-lg text-neutral-50 ">
          <Menu />
          {/* <Link to="/store">Store</Link> */}
        </div>
        <div className="flex justify-between items-center gap-8">
          <Link to="/cart" className="relative">
            <div className="absolute -top-3 -right-2 flex justify-center items-center bg-black text-white text-xs border border-neutral-500 rounded-full px-1 ">
              {getAccessToken() ? cartItem.length : 0}
            </div>
            <FontAwesomeIcon
              icon={faCartShopping}
              shake
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </Link>
          {authUser ? (
            <>
              <DropDown />
            </>
          ) : (
            <>
              <button
                className="bg-neutral-100 border  border-neutral-400 rounded-full px-4 py-1.5 text-lg text-neutral-500"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>

              <button
                className="bg-neutral-100 border border-neutral-400 rounded-full px-4 py-1.5 text-lg text-neutral-500"
                onClick={() => setShowSignUpModal(true)}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </header>
      <Modal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <LoginForm
          onCloseModal={() => {
            setShowLoginModal(false);
          }}
        />
      </Modal>
      <Modal
        isVisible={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <SignUpForm
          onCloseModal={() => {
            setShowSignUpModal(false);
          }}
        />
      </Modal>
    </>
  );
}
