import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useAuth } from "../../hooks/use-auth";
import RegisterContainer from "./RegisterContainer";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth(); // { login: login}

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input);
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmitForm}>
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Account Login</h1>
        </div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <LoginInput
          type="email"
          placeholder="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <LoginInput
          type="password"
          placeholder="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <LoginButton />
      </form>
      <RegisterContainer />
    </div>
  );
}
