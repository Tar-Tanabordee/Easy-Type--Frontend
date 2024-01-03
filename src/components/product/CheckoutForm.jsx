// import { useState } from 'react';
import Input from "../profile/Input";
import { ActionButton } from "../ActionButton";

export default function CheckoutForm() {
  // const [input, setInput] = useState('');
  // const [file, setFile] = useState(null);

  return (
    <form
      // onSubmit={handleSubmitForm}
      className="flex flex-col justify-center items-center gap-4"
    >
      <img
        src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697365290/project/Moment_1697364747622_1_dgca2a.jpg"
        alt=""
        className="h-56"
      />
      <p>Tanabordee Sirisupanon</p>
      <Input
        type="file"
        inputTitle="Payslip"
        name="paySlip"
        // onChange={handleImageUpload}
      />
      <ActionButton title="Upload" style="bg-black text-white min-w-full" />
    </form>
  );
}
