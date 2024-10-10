import { Link } from "react-router-dom";
import _ from "lodash";
import LoginForm from "@/modules/auth/pages/components/Form/LoginForm";
import { languageList, menuList } from "@/modules/auth/pages/core/config/link-list";

const LoginPage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex flex-col items-center justify-center bg-gray-100 h-4/5">
        <div className="flex flex-col items-center md:flex-row w-[980px]">
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
      <div className="mt-10 mx-auto text-neutral-500 w-[980px]">
        <div className="flex flex-wrap space-x-2">
          {languageList.map((language) => (
            <Link key={_.uniqueId("language")} to={language.href} className="text-sm opacity-95 hover:underline">
              {language.label}
            </Link>
          ))}
        </div>
        <hr className="my-2" />
        <div className="flex flex-wrap">
          {menuList.map((menu) => (
            <Link key={_.uniqueId("menu")} to={menu.href} className="text-sm mr-3 opacity-95 hover:underline">
              {menu.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 text-xs">Meta © 2024</div>
      </div>
    </div>
  );
};

export default LoginPage;
