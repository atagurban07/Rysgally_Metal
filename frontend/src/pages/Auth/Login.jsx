import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import loginFoto from "../../../assets/Login.png"
import { useTranslation } from 'react-i18next';


const Login = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <section className="flex flex-wrap pl-10">
        <div className="w-full max-w-md mx-auto mt-10 md:mt-20 lg:mt-24 xl:ml-10 xl:max-w-xl">
          <div className="relative ml-4 sm:ml-15 md:ml-10 lg:ml-0">
            <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
              {t('signInTitle')}
            </h1>

            <form onSubmit={submitHandler} className="container mx-auto">
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  {t('profileEmailText')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border rounded w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-full text-white bg-transparent"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  {t('profilePasswordText')}
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 p-2 border rounded w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-full bg-transparent text-white"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-4 w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-full"
              >
                {isLoading ? t('signInLoadingTitle') : t('signInTitle')}
              </button>

              {isLoading && <Loader />}
            </form>

            <div className="mt-3 ">
              <p className="text-white">
                {t('signInNewCustomer')}{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                  className="text-pink-500 hover:underline ml-4 sm:ml-15 md:ml-10 lg:ml-0"
                >
                  {t('signInRegisterTitle')}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 xl:w-1/3 xl:ml-10 mt-4">
          <img
            src={loginFoto}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </section>
    </div>

  );
};

export default Login;
