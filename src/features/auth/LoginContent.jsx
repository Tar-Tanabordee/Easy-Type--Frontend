import LoginForm from "./LoginForm";

export default function LoginContent() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <LoginForm />
      </div>
    </div>
  );
}
