import { Button, Image } from "@heroui/react";
import LoginForm from "@/modules/auth/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen bg-[var(--background)] flex items-center justify-center w-full">
      <div className="flex flex-col max-w-sm w-full bg-white rounded-lg py-16 px-8 shadow-sm">
        <Button
          variant="bordered"
          className="w-full mb-4 h-10 bg-white border-[#ECF0F5] text-[#5D6778] font-normal"
          startContent={
            <Image
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/wprfnfa1_expires_30_days.png"
              className="w-4 h-4 rounded"
              alt="Google"
            />
          }
        >
          Log in with Google
        </Button>

        <Button
          variant="bordered"
          className="w-full mb-8 h-10 bg-white border-[#ECF0F5] text-[#5D6778] font-normal"
          startContent={
            <Image
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/o6mul0xw_expires_30_days.png"
              className="w-4 h-4 rounded"
              alt="Email"
            />
          }
        >
          Log in with Email
        </Button>

        <div className="w-full mb-8 flex items-center">
          <div className="flex-1 h-px bg-[#ECF0F5]"></div>
          <span className="text-[#5D6778] text-xs font-bold px-4">OR</span>
          <div className="flex-1 h-px bg-[#ECF0F5]"></div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
