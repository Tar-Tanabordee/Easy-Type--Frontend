import { useState } from "react";
import Joi from "joi";

import Input from "./Input";
import useAuth from "../../hooks/use-auth";
import InputMessageError from "../auth/InputMessageError";

const addressSchema = Joi.object({
  title: Joi.string().required(),
  address: Joi.string().required(),
  subDistrict: Joi.string().required(),
  district: Joi.string().required(),
  province: Joi.string().required(),
  country: Joi.string().required(),
  postalCode: Joi.string()
    .pattern(/^[0-9]{5}$/)
    .required(),
});

const validateAddAddress = (input) => {
  const { error } = addressSchema.validate(input, { abortEarly: false });
  if (error) {
    const msgErr = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return msgErr;
  }
};

export default function AddressForm({ onCloseModal, address }) {
  const { createAddress, updateAddress } = useAuth();
  const [input, setInput] = useState({
    title: address?.title ?? "",
    address: address?.address ?? "",
    subDistrict: address?.subDistrict ?? "",
    district: address?.district ?? "",
    province: address?.province ?? "",
    country: address?.country ?? "",
    postalCode: address?.postalCode ?? "",
  });

  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const validationError = validateAddAddress(input);

      if (validationError) {
        return setError(validationError);
      }

      setError({});

      if (address) {
        const newAddress = { ...address, ...input };
        delete newAddress.userId;
        updateAddress(newAddress);
      } else {
        createAddress(input);
      }
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col w-96 gap-2" onSubmit={handleSubmitForm}>
      <div>
        <div>
          <Input
            name="title"
            inputTitle="Title"
            onChange={handleChangeInput}
            value={input.title}
          />
          {error.address && <InputMessageError message={error.title} />}
        </div>
      </div>

      <div className="flex flex-1 gap-2">
        <div>
          <Input
            name="address"
            inputTitle="Address"
            onChange={handleChangeInput}
            value={input.address}
          />
          {error.address && <InputMessageError message={error.address} />}
        </div>
        <div>
          <Input
            name="subDistrict"
            inputTitle="Subdistrict"
            onChange={handleChangeInput}
            value={input.subDistrict}
          />
          {error.subDistrict && (
            <InputMessageError message={error.subDistrict} />
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Input
            name="district"
            inputTitle="District"
            onChange={handleChangeInput}
            value={input.district}
          />
          {error.district && <InputMessageError message={error.district} />}
        </div>
        <div>
          <Input
            name="province"
            inputTitle="Province"
            onChange={handleChangeInput}
            value={input.province}
          />
          {error.province && <InputMessageError message={error.province} />}
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Input
            name="country"
            inputTitle="Country"
            onChange={handleChangeInput}
            value={input.country}
          />
          {error.country && <InputMessageError message={error.country} />}
        </div>
        <div>
          <Input
            name="postalCode"
            inputTitle="Postal Code"
            onChange={handleChangeInput}
            value={input.postalCode}
          />
          {error.postalCode && <InputMessageError message={error.postalCode} />}
        </div>
      </div>
      <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
        Add
      </button>
    </form>
  );
}
