import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";

export default function LoginPage() {
  return (
    <div>
      <LoginContent />
      <LoginForm />
      <RegisterContainer />
    </div>
  );
}
