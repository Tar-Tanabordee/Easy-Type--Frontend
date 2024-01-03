import Modal from "../Modal";
import { useState } from "react";
import AddProductForm from "./AddProductForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddItemContainer() {
  const [showProductModal, setShowProductModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowProductModal(true)}
        className="flex flex-col justify-center items-center h-[300px] w-[300px] transform transition-all hover:-translate-y-2 duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 bg-neutral-100 border-none rounded-full"
      >
        <FontAwesomeIcon
          icon={faPlus}
          beatFade
          size="w-[290px] text-9xl text-neutral-300 rounded-full"
          style={{
            color: "#0a0a0a",
          }}
        />
      </div>
      <Modal
        isVisible={showProductModal}
        onClose={() => setShowProductModal(false)}
      >
        <AddProductForm onClose={() => setShowProductModal(false)} />
      </Modal>
    </>
  );
}
