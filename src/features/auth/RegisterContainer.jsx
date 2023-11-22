import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button className="btn btn-neutral" onClick={() => setIsOpen(true)}>
        Sign up
      </button>

      <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
        <RegisterForm />
      </Modal>
    </div>
  );
}
