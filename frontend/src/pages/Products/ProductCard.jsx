import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HeartIcon";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const getProductName = () => {
    const { language } = i18n;
    switch (language) {
      case 'tr':
        return p.nameTr;  // Türkçe ad
      case 'en':
        return p.nameEn;
      case 'ru':
        return p.nameRu; // İngilizce ad
      // Diğer diller için ek koşullar ekleyebilirsiniz
      default:
        return p.name;    // Varsayılan ad
    }
  };

  // Dinamik olarak ürün açıklamasını seç
  const getProductDescription = () => {
    const { language } = i18n;
    switch (language) {
      case 'tr':
        return p.descriptionTr;  // Türkçe açıklama
      case 'en':
        return p.descriptionEn;
      case 'ru':
        return p.descriptionRu;  // İngilizce açıklama
      // Diğer diller için ek koşullar ekleyebilirsiniz
      default:
        return p.description;    // Varsayılan açıklama
    }
  };

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-[220px]   relative bg-[#1A1A1A] rounded-lg shaodw dark:bg-gray-800 dark:border-gray-700">
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <span className="absolute text-center bottom-3 right-3 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
            {p?.rating === 0 ? (
              <p className=" flex text-center justify-between "><FaRegStar size={'17px'} className="mr-1" />{p?.rating}</p>
            ) : (
              <>
                {p?.rating < 4 ? (
                  <p className=" flex text-center justify-between "><FaStarHalfAlt size={'17px'} className="mr-1" />{p?.rating}</p>
                ) : (
                  <p className=" flex text-center justify-between "><FaStar size={'17px'} className="mr-1" />{p?.rating} </p>
                )}

              </>
            )}
            {/* // {p?.category} */}
          </span>
          <img
            className="cursor-pointer w-full"
            src={p.image}
            alt={p.name}
            style={{ height: "170px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon product={p} />
      </section>

      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl text-whiet dark:text-white">
            {getProductName()?.length > 15 ? getProductName()?.substring(0, 12) + "..." : getProductName()}
            {/* {p?.name?.length > 15 ? p?.name?.substring(0, 15) + "..." : p?.name} */}
          </h5>

          <p className="text-black font-semibold text-pink-500">
            {/* {p?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })} */}
          </p>
        </div>

        <p className="mb-3 font-normal text-[#CFCFCF]">
          {getProductDescription()?.substring(0, 28)} ...
        </p>

        <section className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            {t('readMoreBtn')}
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          {/* <button
            className="p-2 rounded-full"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button> */}
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
