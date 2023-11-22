import { useState } from "react";

import { toast } from "react-toastify";
import RegisterInput from "./RegisterInput";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
});

const validateRegister = (input) => {
  // underfined | {firstName: ...,lastName: ..., }
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("aaaa");
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      toast.error("พี่ต้าหล่อจัง", err.response.data.message);
    });
  };

  return (
    <form
      className="grid grid-cols-2 gap-x-3 gap-y-4"
      onSubmit={handleSubmitForm}
    >
      <div>
        <RegisterInput
          placeholder="First name"
          value={input.firstName}
          onChange={handleChangeInput}
          name="firstName"
          hasError={error.firstName}
        />
        {error.firstName && <InputErrorMessage message={error.firstName} />}
      </div>
      <div>
        <RegisterInput
          placeholder="Last name"
          value={input.lastName}
          onChange={handleChangeInput}
          name="lastName"
          hasError={error.lastName}
        />
        {error.lastName && <InputErrorMessage message={error.lastName} />}
      </div>

      <div className="col-span-full">
        <RegisterInput
          placeholder="Email address"
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          hasError={error.email}
        />
        {error.email && <InputErrorMessage message={error.email} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Mobile number"
          value={input.phone}
          onChange={handleChangeInput}
          name="phone"
          hasError={error.phone}
        />
        {error.mobile && <InputErrorMessage message={error.phone} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Password"
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeholder="Confirm Password"
          type="password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
      </div>
      <div className="mx-auto col-span-full">
        <button className="btn btn-neutral" type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}