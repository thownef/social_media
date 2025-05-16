import RegisterForm from "@/modules/auth/components/Form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen h-screen bg-white flex w-full">
      <div className="w-full md:w-2/3 mt-10 md:mt-0">
        <RegisterForm />
      </div>
      <div className="fixed top-0 right-0 visible bg-[url('/assets/img/signup_banner.jpg')] bg-cover bg-center bg-no-repeat shadow-none rounded-none border-0 hidden md:block w-1/3 h-full"></div>
    </div>
  );
};

export default RegisterPage;
