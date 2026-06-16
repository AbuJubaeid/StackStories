import RegisterForm from "@/components/forms/RegisterForm";

export const metadata = {
  title: "Register | StackStories",
};

const RegisterPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;