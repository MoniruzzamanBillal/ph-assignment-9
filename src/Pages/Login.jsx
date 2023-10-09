import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import UseInputHook from "../Hooks/InputHook";
import InputField from "../Components/InputField";
import { AppContext } from "../Context/Context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import auth from "../Firebase.config";

const Login = () => {
  const { user, loading, emailLogin } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  // console.log(user);

  const addedSuccessFully = () =>
    toast.success("logged in successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const errorlogin = () =>
    toast.warn("Username or password is incorrect!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // email login
  const handleSubmit = () => {
    // console.log("submit click");

    emailLogin(emailInput.value, passwordInput.value)
      .then((user) => {
        addedSuccessFully();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, "1200");
      })
      .catch((error) => {
        console.log(error);
        errorlogin();
      });

    emailInput.reset();
    passwordInput.reset();
  };

  // google login
  const handleGoogleLogin = () => {
    console.log("google login click");
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((response) => {
        addedSuccessFully();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, "1200");
      })
      .catch((error) => console.log(error));
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

          <ToastContainer />

          {/* google sign  */}

          <p
            className="  mt-3 cursor-pointer hover:underline flex items-center text-xl gap-2 "
            onClick={() => handleGoogleLogin()}
          >
            Sign in with
            <span className="text-2xl">
              <FcGoogle />
            </span>{" "}
          </p>
          {/* google sign  */}

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
