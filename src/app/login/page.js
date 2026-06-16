import LoginForm from "@/components/forms/LoginForm";

export const metadata = {
  title: "Login | StackStories",
};

const LoginPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <LoginForm />
    </div>
  );
};

export default LoginPage;