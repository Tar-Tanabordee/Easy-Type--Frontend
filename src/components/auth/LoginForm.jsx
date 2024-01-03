import Joi from "joi";
import Input from "./Input";
import { useState } from "react";
import useAuth from "../../hooks/use-auth";
import InputMessageError from "./InputMessageError";
import useProduct from "../../hooks/use-product";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().trim().required(),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    const msgErr = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return msgErr;
  }
};

export default function LoginForm({ onCloseModal }) {
  const { getCartItem, getOrder } = useProduct();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const { login, getAllAddress } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateLogin(input);
    if (validationError) return setError(validationError);
    setError({});
    login(input)
      .then(() => {
        onCloseModal();
        getCartItem();
        getOrder();
        getAllAddress();
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Login</h1>
      <form
        className="flex flex-col justify-center items-start gap-4"
        onSubmit={handleSubmitForm}
      >
        <Input placeholder="Email" name="email" onChange={handleChangeInput} />
        {error.email && <InputMessageError message={error.email} />}
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChangeInput}
        />
        {error.password && <InputMessageError message={error.password} />}
        <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
          Login
        </button>
      </form>
    </>
  );
}
