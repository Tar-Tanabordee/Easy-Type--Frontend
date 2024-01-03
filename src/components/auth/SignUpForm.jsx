import Joi from "joi";
import Input from "./Input";
import { useState } from "react";

import useAuth from "../../hooks/use-auth";
import InputMessageError from "./InputMessageError";

const signUpSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  mobile: Joi.string().pattern(/^[0-9]{10}$/),
  email: Joi.string()
    .email({ tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().trim().required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

const validateSignUp = (input) => {
  const { error } = signUpSchema.validate(input, { abortEarly: false });
  if (error) {
    const msgErr = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return msgErr;
  }
};

export default function SignUpForm({ onCloseModal }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { signUp } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateSignUp(input);
    if (validationError) return setError(validationError);
    setError({});
    signUp(input)
      .then(() => {
        onCloseModal();
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <>
      <h1 className="text-3xl font-medium">Create account</h1>
      <form
        className="flex flex-col justify-center items-start gap-4"
        onSubmit={handleSubmitForm}
      >
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
          />
          {error.firstName && <InputMessageError message={error.firstName} />}
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
          />
          {error.lastName && <InputMessageError message={error.lastName} />}
        </div>
        <div>
          <Input
            placeholder="Mobile"
            value={input.mobile}
            name="mobile"
            onChange={handleChangeInput}
          />
          {error.lastName && <InputMessageError message={error.mobile} />}
        </div>
        <div>
          <Input
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
          />
          {error.email && <InputMessageError message={error.email} />}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
          />
          {error.password && <InputMessageError message={error.password} />}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirm password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
          />
          {error.confirmPassword && (
            <InputMessageError message={error.confirmPassword} />
          )}
        </div>
        <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
          Sign up
        </button>
      </form>
    </>
  );
}
