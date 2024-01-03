import { useState } from "react";
// import { AiOutlinePlus } from 'react-icons/ai';

import Modal from "../Modal";
import AddressForm from "./AddressForm";
import AddressContainer from "./AddressContainer";
import useAuth from "../../hooks/use-auth";

export default function Address() {
  const { allAddress } = useAuth();
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <>
      <div className="flex-1 px-4">
        <div
          className="flex justify-start items-center cursor-pointer hover:bg-neutral-100 max-w-fit px-2 rounded-full gap-2 mb-8"
          onClick={() => setShowAddressModal(true)}
        >
          {/* <AiOutlinePlus className="text-2xl" /> */}
          <h1 className="text-xl cursor-pointer">New address</h1>
        </div>
        {allAddress.map((address) => (
          <AddressContainer key={address.id} address={address} />
        ))}
      </div>
      <Modal
        isVisible={showAddressModal}
        onClose={() => setShowAddressModal(false)}
      >
        <AddressForm
          onCloseModal={() => {
            setShowAddressModal(false);
          }}
        />
      </Modal>
    </>
  );
}
