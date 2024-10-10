import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full">
      <input type="text" placeholder="Email address or phone number" className="w-full p-3 mb-3 border border-gray-300 rounded" />
      <input type="password" placeholder="Password" className="w-full p-3 mb-3 border border-gray-300 rounded" />
      <button className="w-full p-3 mb-3 text-white bg-blue-600 rounded-md text-2xl font-semibold">Log in</button>
      <Link to="#" className="block mb-3 text-center text-blue-600">
        Forgotten password?
      </Link>
      <hr className="my-3" />
      <div className="text-center">
        <button className="w-fit p-2 text-white bg-green-600 rounded-md text-xl font-medium">Create new account</button>
      </div>
    </form>
  );
};

export default LoginForm;
