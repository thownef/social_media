import { Link } from "react-router-dom";
import _ from "lodash";
import LoginForm from "@/modules/auth/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center md:flex-row w-[980px] gap-3">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold text-blue-600">facebook</h1>
            <p className="mt-4 text-2xl">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="mt-10 md:mt-0">
            <LoginForm />
            <p className="mt-4 text-center text-base">
              <Link to="#" className="text-black font-semibold">
                Create a Page
              </Link>
              &nbsp;for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
