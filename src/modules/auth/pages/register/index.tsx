import { Button, Image } from "@heroui/react";
import RegisterForm from "@/modules/auth/components/Form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center w-full p-4">
      <div className="flex flex-col w-full max-w-md bg-white rounded-xl py-8 px-6 shadow-lg">
        <Button
          variant="bordered"
          className="w-full mb-3 h-11 bg-white border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          startContent={
            <Image
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/wprfnfa1_expires_30_days.png"
              className="w-5 h-5 rounded"
              alt="Google"
            />
          }
        >
          Continue with Google
        </Button>

        <div className="w-full mb-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-500 text-sm font-medium px-4">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
