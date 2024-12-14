import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import registerFoto from "../../../assets/register.png"
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t, i18n } = useTranslation();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered");
      } catch (err) {
        console.log(err);
        toast.error(err.data.message);
      }
    }
  };

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 lg:pl-10 lg:pr-10 lg:py-6">
      <div className="w-full max-w-md mx-auto lg:mx-0 mt-4 sm:mt-6 md:mt-8 lg:mt-10 lg:w-2/3 px-4 lg:px-0 lg:ml-[10%]">
        <h1 className="text-2xl font-semibold mb-4 text-center md:text-left text-white">
          {t('signInRegisterTitle')}
        </h1>

        <form onSubmit={submitHandler} className="w-full max-w-lg mx-auto">
          <div className="my-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              {t('profileNameText')}
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full sm:w-72 md:w-80 lg:w-full bg-transparent text-white"
              placeholder={t('placeholderNameTitle')}
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              className="mt-1 p-2 border rounded w-full sm:w-72 md:w-80 lg:w-full bg-transparent text-white"
              placeholder={t('placeholderEmailTitle')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              {t('profilePasswordText')}
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full sm:w-72 md:w-80 lg:w-full bg-transparent text-white"
              placeholder={t('placeholderPasswordTitle')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              {t('profileConfirmPasswordText')}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full sm:w-72 md:w-80 lg:w-full bg-transparent text-white"
              placeholder={t('placeholderConfirmPasswordTitle')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-4 w-full sm:w-72 md:w-80 lg:w-auto sm:ml-auto"
          >
            {isLoading ? t('signInRegisterLoadingTitle') : t('signInRegisterTitle')}
          </button>

          {isLoading && <Loader />}
        </form>

        <div className="mt-4 text-center">
          <p className="text-white">
            {t('registerAlreadyAccountTitle')}{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="text-pink-500 hover:underline"
            >
              {t('registerLoginTitle')}
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 xl:w-1/2 mt-4 lg:ml-8">
        <img
          src={registerFoto}
          alt=""
          className="h-[28rem] w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Register;
