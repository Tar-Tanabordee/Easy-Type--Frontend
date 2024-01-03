import { BiEdit, BiTrash } from 'react-icons/bi';
import Modal from '../Modal';
import AddressForm from './AddressForm';
import { useState } from 'react';
import useAuth from '../../hooks/use-auth';

export default function AddressContainer({ address }) {
  const { deleteAddress } = useAuth();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const handleClickDelete = () => deleteAddress(address.id);
  return (
    <>
      <div className="flex items-center justify-between bg-neutral-100 px-3 py-2 border border-neutral-400 rounded-lg shadow-md mt-4">
        <h1 className="text-lg px-2">{address.title}</h1>
        <div className="flex gap-4 text-lg text-neutral-500">
          <BiEdit
            className="cursor-pointer"
            onClick={() => setShowAddressModal(true)}
          />
          <BiTrash className="cursor-pointer" onClick={handleClickDelete} />
        </div>
      </div>
      <Modal
        isVisible={showAddressModal}
        onClose={() => setShowAddressModal(false)}
      >
        <AddressForm
          onCloseModal={() => setShowAddressModal(false)}
          address={address}
        />
      </Modal>
    </>
  );
}
