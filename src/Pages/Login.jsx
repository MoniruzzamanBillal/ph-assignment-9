import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import UseInputHook from "../Hooks/InputHook";
import InputField from "../Components/InputField";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  const handleSubmit = () => {
    console.log("submit click");
  };

  return (
    <div className="loginContainer  pt-[8rem] pb-[5rem]   ">
      <div className="loginWrapper">
        {/* login body   */}
        <div className="loginInput bg-gray-200 w-[88%] sm:w-[72%] md:w-[62%] lg:w-[46%] m-auto flex flex-col justify-center items-center py-5 sm:py-7 md:py-8 lg:py-9 px-4 sm:px-6 md:px-7 shadow-md ">
          <h1 className="  w-full text-center block text-lg sm:text-xl md:text-2xl font-semibold pb-2 sm:pb-3 md:pb-4 lg:pb-5 mb-2 sm:mb-3 md:mb-4 border-b border-gray-400 ">
            Login your account{" "}
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Email address"}
            inpType={"email"}
            placeHolder="Enter Email address"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"Password"}
            placeHolder="Enter password"
            inputId="password_input"
            inputHook={passwordInput}
          />

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleSubmit()}
          >
            Log in
          </button>

          <p className="  mt-3 ">
            Dont’t Have An Account ?{" "}
            <span className="text-red-500">
              <Link to={`/register`}>Register</Link>
            </span>{" "}
          </p>
        </div>
        {/* login body   */}
      </div>
    </div>
  );
};

export default Login;
